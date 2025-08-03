"use client";

import { useQuery } from "convex/react";
import { FunctionReference, OptionalRestArgs } from "convex/server";
import { useConvexAvailable } from "../providers/ConvexProvider";

// Safe wrapper for useQuery that handles build time
export function useConvexQuery<Query extends FunctionReference<"query">>(
  query: Query,
  ...args: OptionalRestArgs<Query> | ["skip"]
): Query["_returnType"] | undefined {
  const isConvexAvailable = useConvexAvailable();
  
  try {
    // Always call useQuery to maintain hook order, but handle errors
    const result = useQuery(query, ...args as OptionalRestArgs<Query>);
    
    // If Convex is not available, return undefined
    if (!isConvexAvailable) {
      return undefined;
    }
    
    return result;
  } catch (error) {
    // During build time or when ConvexProvider is not available, return undefined
    if (typeof window === 'undefined' ||
        !isConvexAvailable ||
        (error as Error)?.message?.includes('Could not find Convex client')) {
      return undefined;
    }
    throw error;
  }
}