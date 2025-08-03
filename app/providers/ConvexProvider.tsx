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
  
  // During build time or when URL is not available, create a dummy client
  if (!url) {
    console.warn('NEXT_PUBLIC_CONVEX_URL is not set. Creating dummy Convex client.');
    // Create a dummy URL for build time
    return new ConvexReactClient('https://dummy.convex.cloud');
  }
  
  try {
    return new ConvexReactClient(url);
  } catch (error) {
    console.error('Failed to create Convex client:', error);
    // Create a dummy client as fallback
    return new ConvexReactClient('https://dummy.convex.cloud');
  }
};

const convex = createConvexClient();

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const isConvexAvailable = !!process.env.NEXT_PUBLIC_CONVEX_URL;
  
  // Always wrap with ConvexProvider to prevent hook errors
  return (
    <ConvexProvider client={convex}>
      <ConvexAvailabilityContext.Provider value={isConvexAvailable}>
        {children}
      </ConvexAvailabilityContext.Provider>
    </ConvexProvider>
  );
}