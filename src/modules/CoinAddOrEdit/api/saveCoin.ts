import apiRequest from "../../../api";
import { Coin } from "../../../types/coin";

export const saveCoin = async (data: Coin): Promise<Coin> => {
    return await apiRequest.post<Coin, Coin>("/coin", data);
};
