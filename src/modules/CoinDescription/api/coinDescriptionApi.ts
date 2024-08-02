import apiRequest from "../../../api/index";
import { Coin } from '../../../types/coin';

export const fetchCoinDescription = (coinId: string | undefined): Promise<Coin> => {
    return apiRequest.get<Coin>(`/coin/${coinId}`);
};
