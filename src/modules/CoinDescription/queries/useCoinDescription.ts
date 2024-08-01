import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Coin } from '../../../types/coin';
import { fetchCoinDescription } from '../api/coinDescriptionApi';


export const useCoinDescription = (coinId: string): UseQueryResult<Coin> => {
    return useQuery({
        queryKey: [`/coins/${coinId}`],
        queryFn: () => fetchCoinDescription(coinId),
        refetchOnWindowFocus: false,
    });
};
