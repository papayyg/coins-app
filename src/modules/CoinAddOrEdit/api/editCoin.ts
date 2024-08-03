import apiRequest from "../../../api";
import { Coin } from "../../../types/coin";

export const editCoin = async (id: string, data: Coin): Promise<Coin> => {
    return await apiRequest.put<Coin, Coin>(`/coin/${id}`, data);
};
