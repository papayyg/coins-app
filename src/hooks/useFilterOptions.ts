import { useQuery, UseQueryResult } from "@tanstack/react-query";
import apiRequest from "../api";

interface FilterOptions {
    country: string[];
    metal: string[];
    quality: string[];
}

const fetchFilterOptions = async () => {
    return apiRequest.get<FilterOptions>("/coin/filter");
};

export const useFilterOptions = (): UseQueryResult<FilterOptions> => {
    return useQuery({
        queryKey: ["filterOptions"],
        queryFn: fetchFilterOptions,
        refetchOnWindowFocus: false,
    });
};
