import { Id } from "../convex/_generated/dataModel";

export interface MenuItem {
  _id: Id<"menu">;
  name: string;
  description: string;
  price: number;
  category: "bakso" | "minuman" | "tambahan";
  image?: Id<"_storage"> | string; // Support both new storageId and legacy URL strings
  available: boolean;
  popular: boolean;
  createdAt: number;
  updatedAt: number;
}

export type MenuCategory = "all" | "bakso" | "minuman" | "tambahan";