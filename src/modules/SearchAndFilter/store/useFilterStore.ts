import { create } from "zustand";

interface FilterState {
    filterIsOpen: boolean;
    toggleFilter: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    filterIsOpen: false,
    toggleFilter: () => set((state) => ({ filterIsOpen: !state.filterIsOpen })),
}));