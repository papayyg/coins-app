// src/api/index.ts

import axiosInstance from "./axiosInstance";

const apiRequest = {
    get: async <T>(endpoint: string, params?: Record<string, unknown>): Promise<T> => {
        const response = await axiosInstance.get(endpoint, { params });
        return response.data;
    },
    post: async <T, D = unknown>(endpoint: string, data: D): Promise<T> => {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
    },
};

export default apiRequest;
