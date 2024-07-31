// src/store.ts
import { create } from "zustand";
import { combine } from "zustand/middleware";
interface Item {
  id: number;
  name: string;
}

const useStore = create(
  combine({ items: [] as Item[] }, (set) => ({
    addItem: (item: Item) =>
      set((state) => ({ items: [...state.items, item] })),

    updateItem: (id: number, name: string) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, name } : item
        ),
      })),

    deleteItem: (id: number) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
  }))
);

export default useStore;
