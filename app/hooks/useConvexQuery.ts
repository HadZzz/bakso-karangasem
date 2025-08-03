"use client";

import { useQuery } from "convex/react";
import { FunctionReference, OptionalRestArgs } from "convex/server";

// Safe wrapper for useQuery that handles build time
export function useConvexQuery<Query extends FunctionReference<"query">>(
  query: Query,
  ...args: OptionalRestArgs<Query>
): any {
  try {
    // Check if we're in a ConvexProvider context
    const result = useQuery(query, ...args);
    return result;
  } catch (error) {
    // During build time or when ConvexProvider is not available, return undefined
    if (typeof window === 'undefined' || (error as Error)?.message?.includes('Could not find Convex client')) {
      return undefined;
    }
    throw error;
  }
}