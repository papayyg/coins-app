import axiosInstance from "./axiosInstance";
import { getTokenFromCookies } from "../utils/getToken";

const apiRequest = {
    get: async <T>(endpoint: string, params?: Record<string, unknown>): Promise<T> => {
        const response = await axiosInstance.get(endpoint, { params });
        return response.data;
    },
    post: async <T, D = unknown>(endpoint: string, data: D): Promise<T> => {
        const token = getTokenFromCookies();
        const response = await axiosInstance.post(endpoint, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },
    put: async <T, D = unknown>(endpoint: string, data: D): Promise<T> => {
        const token = getTokenFromCookies();
        const response = await axiosInstance.put(endpoint, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },
    delete: async <T>(endpoint: string): Promise<T> => {
        const token = getTokenFromCookies();
        const response = await axiosInstance.delete(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    },
};

export default apiRequest;
