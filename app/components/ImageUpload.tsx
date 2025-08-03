"use client";

import { useState, useRef } from "react";
import { useConvexMutation } from "../hooks/useConvexMutation";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import ConvexImage from "./ConvexImage";

interface ImageUploadProps {
  currentImage?: Id<"_storage"> | string;
  onImageChange: (storageId: Id<"_storage"> | undefined) => void;
  className?: string;
}

export default function ImageUpload({ currentImage, onImageChange, className = "" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [preview, setPreview] = useState<string | null>(null);
  const [storageId, setStorageId] = useState<Id<"_storage"> | undefined>(
    currentImage && typeof currentImage === 'string' && !currentImage.startsWith('http')
      ? currentImage as Id<"_storage">
      : undefined
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const generateUploadUrl = useConvexMutation(api.files.generateUploadUrl);

  // Function to compress image before upload
  const compressImage = (file: File, maxWidth: number = 800, quality: number = 0.8): Promise<File> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        
        // Draw and compress
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          } else {
            resolve(file); // Fallback to original if compression fails
          }
        }, file.type, quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 10MB before compression)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setUploading(true);
    setUploadProgress('Preparing image...');

    try {
      // Create preview immediately for better UX
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Compress image for faster upload
      setUploadProgress('Compressing image...');
      const compressedFile = await compressImage(file, 1200, 0.85);
      
      console.log(`Original size: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
      console.log(`Compressed size: ${(compressedFile.size / 1024 / 1024).toFixed(2)}MB`);

      // Get upload URL from Convex
      setUploadProgress('Getting upload URL...');
      const uploadUrl = await generateUploadUrl();

      // Upload compressed file to Convex
      setUploadProgress('Uploading to server...');
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": compressedFile.type },
        body: compressedFile,
      });

      if (!result.ok) {
        throw new Error(`Upload failed: ${result.statusText}`);
      }

      setUploadProgress('Processing...');
      const { storageId: newStorageId } = await result.json();
      
      // Update local state and notify parent
      setStorageId(newStorageId);
      onImageChange(newStorageId);
      setUploadProgress('Upload complete!');
      
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image. Please try again.");
      setPreview(null);
    } finally {
      setTimeout(() => {
        setUploading(false);
        setUploadProgress('');
      }, 500);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setStorageId(undefined);
    onImageChange(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          {preview || storageId || currentImage ? (
            <div className="relative w-full h-full">
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <ConvexImage
                  storageId={storageId || currentImage}
                  alt="Current image"
                  fill
                  className="object-cover rounded-lg"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white text-sm">Click to change image</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={uploading}
          />
        </label>
      </div>

      {uploading && (
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600"></div>
            <span className="ml-2 text-sm text-gray-600">{uploadProgress}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-600 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
          </div>
        </div>
      )}

      {(preview || storageId || currentImage) && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleRemoveImage}
            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            disabled={uploading}
          >
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
}