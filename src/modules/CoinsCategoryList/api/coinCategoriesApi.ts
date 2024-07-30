import apiRequest from "../../../api/index";

export interface CoinCategory {
    name: string;
    obverseImageLink: string;
}

export const fetchCoinCategories = (): Promise<CoinCategory[]> => {
    return apiRequest.get<CoinCategory[]>('/');
};