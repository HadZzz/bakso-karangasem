"use client";

import { useMutation } from "convex/react";
import { FunctionReference } from "convex/server";
import { useConvexAvailable } from "../providers/ConvexProvider";

// Safe wrapper for useMutation that handles build time
export function useConvexMutation<Mutation extends FunctionReference<"mutation">>(
  mutation: Mutation
): (args: Mutation["_args"]) => Promise<Mutation["_returnType"]> {
  const isConvexAvailable = useConvexAvailable();
  
  try {
    // Always call useMutation to maintain hook order
    const mutationFn = useMutation(mutation);
    
    // Return a wrapper function that checks availability
    return async (args: Mutation["_args"]) => {
      if (!isConvexAvailable) {
        throw new Error("Convex is not available. Please check your environment variables.");
      }
      return mutationFn(args);
    };
  } catch {
    // Return a function that always throws if Convex is not available
    return async () => {
      throw new Error("Convex is not available. Please check your environment variables.");
    };
  }
}