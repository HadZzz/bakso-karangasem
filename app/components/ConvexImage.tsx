"use client";

import { useConvexQuery } from "../hooks/useConvexQuery";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import Image from "next/image";

interface ConvexImageProps {
  storageId?: Id<"_storage"> | string; // Support both new storageId and old URL strings
  alt: string;
  fill?: boolean;
  className?: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
}

export default function ConvexImage({ 
  storageId, 
  alt, 
  fill = false, 
  className = "", 
  width, 
  height,
  fallbackSrc = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}: ConvexImageProps) {
  // Function to extract actual image URL from Google Images redirect URL
  const extractImageUrl = (googleUrl: string): string => {
    try {
      // Try to extract imgurl parameter from Google Images URL
      const urlParams = new URLSearchParams(googleUrl.split('?')[1]);
      const imgUrl = urlParams.get('imgurl');
      if (imgUrl) {
        return decodeURIComponent(imgUrl);
      }
      
      // If it's already a direct image URL, return as is
      if (googleUrl.match(/\.(jpg|jpeg|png|gif|webp)(\?|$)/i)) {
        return googleUrl;
      }
      
      // Fallback to original URL
      return googleUrl;
    } catch {
      return googleUrl;
    }
  };

  // Check if storageId is actually a URL string (legacy data)
  // Convex storageId format: starts with letters/numbers, no http or dots
  const isLegacyUrl = storageId && typeof storageId === 'string' &&
    (storageId.startsWith('http') || storageId.includes('google.com') ||
     storageId.includes('kompas.com') || storageId.includes('.'));
  
  const imageUrl = useConvexQuery(api.files.getImageUrl,
    (storageId && !isLegacyUrl) ? { storageId: storageId as Id<"_storage"> } : "skip"
  );

  // If no storageId, use fallback
  if (!storageId) {
    if (fill) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt}
          fill
          className={className}
        />
      );
    }
    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width || 400}
        height={height || 300}
        className={className}
      />
    );
  }

  // If it's a legacy URL, extract and use the actual image URL
  if (isLegacyUrl) {
    const actualImageUrl = extractImageUrl(storageId as string);
    
    if (fill) {
      return (
        <Image
          src={actualImageUrl}
          alt={alt}
          fill
          className={className}
          onError={(e) => {
            // If image fails to load, use fallback
            (e.target as HTMLImageElement).src = fallbackSrc;
          }}
        />
      );
    }
    return (
      <Image
        src={actualImageUrl}
        alt={alt}
        width={width || 400}
        height={height || 300}
        className={className}
        onError={(e) => {
          // If image fails to load, use fallback
          (e.target as HTMLImageElement).src = fallbackSrc;
        }}
      />
    );
  }

  // If storageId exists but URL not loaded yet, show loading
  if (imageUrl === undefined) {
    return (
      <div className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  // If URL loaded, show image with fallback to regular img if Next.js Image fails
  if (fill) {
    return (
      <Image
        src={imageUrl || fallbackSrc}
        alt={alt}
        fill
        className={className}
        onError={(e) => {
          // If Next.js Image fails, replace with regular img
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl || fallbackSrc;
          imgElement.alt = alt;
          imgElement.className = className;
          imgElement.style.width = '100%';
          imgElement.style.height = '100%';
          imgElement.style.objectFit = 'cover';
          e.currentTarget.parentNode?.replaceChild(imgElement, e.currentTarget);
        }}
      />
    );
  }

  return (
    <Image
      src={imageUrl || fallbackSrc}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={className}
      onError={(e) => {
        // If Next.js Image fails, replace with regular img
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl || fallbackSrc;
        imgElement.alt = alt;
        imgElement.className = className;
        imgElement.style.width = `${width || 400}px`;
        imgElement.style.height = `${height || 300}px`;
        imgElement.style.objectFit = 'cover';
        e.currentTarget.parentNode?.replaceChild(imgElement, e.currentTarget);
      }}
    />
  );
}