"use client";

import { useMutation } from "convex/react";
import { FunctionReference } from "convex/server";
import { useConvexAvailable } from "../providers/ConvexProvider";

// Safe wrapper for useMutation that handles build time
export function useConvexMutation<Mutation extends FunctionReference<"mutation">>(
  mutation: Mutation
): (args: Mutation["_args"]) => Promise<Mutation["_returnType"]> {
  const isConvexAvailable = useConvexAvailable();
  
  // Always call useMutation to maintain hook order - no conditional calls
  const mutationFn = useMutation(mutation);
  
  // Return a wrapper function that checks availability and handles errors
  return async (args: Mutation["_args"]) => {
    if (!isConvexAvailable) {
      throw new Error("Convex is not available. Please check your environment variables and ensure NEXT_PUBLIC_CONVEX_URL is set.");
    }
    
    try {
      return await mutationFn(args);
    } catch (error) {
      // Handle specific Convex client errors
      if (error instanceof Error && error.message.includes('Could not find Convex client')) {
        throw new Error("Convex is not properly configured. Please check your environment variables.");
      }
      throw error;
    }
  };
}