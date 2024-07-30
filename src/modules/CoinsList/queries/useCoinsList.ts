import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchCoinsList, Coin } from '../api/coinsListApi';

export const useCoinsList = (): UseQueryResult<Coin[]> => {
    return useQuery({
        queryKey: ['coinList'],
        queryFn: fetchCoinsList
    });
};
