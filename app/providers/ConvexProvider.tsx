"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, createContext, useContext } from "react";

// Create context to track if Convex is available
const ConvexAvailabilityContext = createContext<boolean>(false);

// Hook to check if Convex is available
export const useConvexAvailable = () => useContext(ConvexAvailabilityContext);

// Create Convex client with fallback for build time
const createConvexClient = () => {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  
  // During build time or when URL is not available, return null
  if (!url) {
    console.warn('NEXT_PUBLIC_CONVEX_URL is not set. Convex features will be disabled.');
    return null;
  }
  
  try {
    return new ConvexReactClient(url);
  } catch (error) {
    console.error('Failed to create Convex client:', error);
    return null;
  }
};

const convex = createConvexClient();

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const isConvexAvailable = !!convex;
  
  // Always provide the availability context
  const content = (
    <ConvexAvailabilityContext.Provider value={isConvexAvailable}>
      {children}
    </ConvexAvailabilityContext.Provider>
  );
  
  // If no convex client, render with availability context only
  if (!convex) {
    return content;
  }
  
  // If convex client exists, wrap with ConvexProvider
  return (
    <ConvexProvider client={convex}>
      {content}
    </ConvexProvider>
  );
}