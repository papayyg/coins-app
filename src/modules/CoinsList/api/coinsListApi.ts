import apiRequest from "../../../api/index";
import { useSearchQueryStore } from "../../../store/searchQuery";

export interface Coin {
    _id: string;
    name: string;
    shortDescription: string;
    obverseImageLink: string;
}

export const fetchCoinsList = (): Promise<Coin[]> => {
    const { category, storeQuery, country, metal, quality, priceFrom, priceTo, yearFrom, yearTo, count, pageNumber } = useSearchQueryStore.getState();
    const params = {
        category,
        search: storeQuery,
        country,
        metal,
        quality,
        minPrice: priceFrom,
        maxPrice: priceTo,
        minYear: yearFrom,
        maxYear: yearTo,
        limit: count,
        offset: (pageNumber - 1) * count,
    };

    return apiRequest.get<Coin[]>("/list", params);
};
