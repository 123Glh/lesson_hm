import { create } from 'zustand'
import type { Product } from "@/types";

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
}));
export const useProducts = () => useProductStore((state) => state.products);