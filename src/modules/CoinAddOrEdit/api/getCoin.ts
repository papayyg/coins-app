import apiRequest from '../../../api';
import { Coin } from '../../../types/coin';

export const getCoin = (coinId: string | undefined): Promise<Coin> => {
    return apiRequest.get<Coin>(`/coin/${coinId}`);
};
