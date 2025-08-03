import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  menu: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.union(
      v.literal("bakso"),
      v.literal("minuman"),
      v.literal("tambahan")
    ),
    image: v.optional(v.id("_storage")),
    available: v.boolean(),
    popular: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_category", ["category"])
    .index("by_available", ["available"])
    .index("by_popular", ["popular"]),

  admins: defineTable({
    email: v.string(),
    name: v.string(),
    passwordHash: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});