import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all menu items
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("menu").order("desc").collect();
  },
});

// Get menu items by category
export const getByCategory = query({
  args: { category: v.union(v.literal("bakso"), v.literal("minuman"), v.literal("tambahan")) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("menu")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

// Get available menu items (for frontend)
export const getAvailable = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("menu")
      .withIndex("by_available", (q) => q.eq("available", true))
      .order("desc")
      .collect();
  },
});

// Get popular menu items
export const getPopular = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("menu")
      .withIndex("by_popular", (q) => q.eq("popular", true))
      .collect();
  },
});

// Get single menu item
export const getById = query({
  args: { id: v.id("menu") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Create new menu item
export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.union(v.literal("bakso"), v.literal("minuman"), v.literal("tambahan")),
    image: v.optional(v.id("_storage")),
    available: v.boolean(),
    popular: v.boolean(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("menu", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

// Update menu item
export const update = mutation({
  args: {
    id: v.id("menu"),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.union(v.literal("bakso"), v.literal("minuman"), v.literal("tambahan")),
    image: v.optional(v.id("_storage")),
    available: v.boolean(),
    popular: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { id, ...updateData } = args;
    return await ctx.db.patch(id, {
      ...updateData,
      updatedAt: Date.now(),
    });
  },
});

// Delete menu item
export const remove = mutation({
  args: { id: v.id("menu") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

// Toggle availability
export const toggleAvailability = mutation({
  args: { id: v.id("menu") },
  handler: async (ctx, args) => {
    const menu = await ctx.db.get(args.id);
    if (!menu) throw new Error("Menu item not found");
    
    return await ctx.db.patch(args.id, {
      available: !menu.available,
      updatedAt: Date.now(),
    });
  },
});

// Toggle popular status
export const togglePopular = mutation({
  args: { id: v.id("menu") },
  handler: async (ctx, args) => {
    const menu = await ctx.db.get(args.id);
    if (!menu) throw new Error("Menu item not found");
    
    return await ctx.db.patch(args.id, {
      popular: !menu.popular,
      updatedAt: Date.now(),
    });
  },
});