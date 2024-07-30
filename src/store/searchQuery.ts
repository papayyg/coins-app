import { create } from "zustand";

interface SearchQueryState {
    category: string;
    storeQuery: string;
    country: string;
    metal: string;
    quality: string;
    priceFrom: string;
    priceTo: string;
    yearFrom: string;
    yearTo: string;
    count: number;
    pageNumber: number;
    changeCategory: (category: string) => void;
    changeQuery: (query: string) => void;
    changeCountry: (country: string) => void;
    changeMetal: (metal: string) => void;
    changeQuality: (quality: string) => void;
    changePriceFrom: (priceFrom: string) => void;
    changePriceTo: (priceTo: string) => void;
    changeYearFrom: (yearFrom: string) => void;
    changeYearTo: (yearTo: string) => void;
    changeCount: (amount: number) => void;
    changePageNumber: (pageNumber: number) => void;
}

export const useSearchQueryStore = create<SearchQueryState>((set) => ({
    category: "",
    storeQuery: "",
    country: "",
    metal: "",
    quality: "",
    priceFrom: "",
    priceTo: "",
    yearFrom: "",
    yearTo: "",
    count: 6,
    pageNumber: 1,
    changeCategory: (category: string) => set({ category }),
    changeQuery: (storeQuery: string) => set({ storeQuery }),
    changeCountry: (country: string) => set({ country }),
    changeMetal: (metal: string) => set({ metal }),
    changeQuality: (quality: string) => set({ quality }),
    changePriceFrom: (priceFrom: string) => set({ priceFrom }),
    changePriceTo: (priceTo: string) => set({ priceTo }),
    changeYearFrom: (yearFrom: string) => set({ yearFrom }),
    changeYearTo: (yearTo: string) => set({ yearTo }),
    changeCount: (count: number) => set({ count }),
    changePageNumber: (pageNumber: number) => set({ pageNumber }),
}));
