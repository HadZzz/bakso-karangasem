import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Simple admin authentication (in production, use proper hashing)
export const loginAdmin = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // For demo purposes, using simple hardcoded admin
    // In production, hash passwords and store in database
    if (args.email === "admin@baksomurniati.com" && args.password === "admin123") {
      return {
        success: true,
        admin: {
          email: args.email,
          name: "Admin Bakso Murniati",
        },
      };
    }
    
    return {
      success: false,
      error: "Invalid credentials",
    };
  },
});

// Get admin profile (for session validation)
export const getAdminProfile = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    // Simple validation for demo
    if (args.email === "admin@baksomurniati.com") {
      return {
        email: args.email,
        name: "Admin Bakso Murniati",
      };
    }
    return null;
  },
});

// Create initial admin (run once)
export const createInitialAdmin = mutation({
  args: {},
  handler: async (ctx) => {
    const existingAdmin = await ctx.db
      .query("admins")
      .withIndex("by_email", (q) => q.eq("email", "admin@baksomurniati.com"))
      .first();
    
    if (!existingAdmin) {
      return await ctx.db.insert("admins", {
        email: "admin@baksomurniati.com",
        name: "Admin Bakso Murniati",
        passwordHash: "admin123", // In production, use proper hashing
        createdAt: Date.now(),
      });
    }
    
    return existingAdmin._id;
  },
});