import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchCoinCategories, CoinCategory } from '../api/coinCategoriesApi';

export const useCoinCategories = (): UseQueryResult<CoinCategory[]> => {
    return useQuery({
        queryKey: ['coinCategories'],
        queryFn: fetchCoinCategories
    });
};
