import apiRequest from "../../../api/index";
import { Coin } from '../../../types/coin';

export const fetchCoinDescription = (coinId: string | undefined): Promise<Coin> => {
	console.log(coinId)
    return apiRequest.get<Coin>(`/${coinId}`);
};
