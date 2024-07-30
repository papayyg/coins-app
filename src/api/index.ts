// src/api/index.ts

import axiosInstance from "./axiosInstance";

const apiRequest = {
    get: async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
        const response = await axiosInstance.get(endpoint, { params });
        return response.data;
    },
    post: async <T>(endpoint: string, data: any): Promise<T> => {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
    },
};

export default apiRequest;
