import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchCoinsList, CoinListRespone } from "../api/coinsListApi";

export const useCoinsList = (): UseQueryResult<CoinListRespone> => {
    return useQuery({
        queryKey: ["coinList"],
        queryFn: fetchCoinsList,
        refetchOnWindowFocus: false,
    });
};
