"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

// Create Convex client with fallback for build time
const createConvexClient = () => {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  
  // During build time or when URL is not available, return null
  if (!url) {
    return null;
  }
  
  return new ConvexReactClient(url);
};

const convex = createConvexClient();

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  // If no convex client (build time), render children without provider
  if (!convex) {
    return <>{children}</>;
  }
  
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}