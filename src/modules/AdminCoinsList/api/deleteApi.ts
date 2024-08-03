import apiRequest from "../../../api";

interface DeleteResponse {
    success: boolean;
}

export const deleteCoin = async (id: string): Promise<DeleteResponse> => {
    const response = await apiRequest.delete<DeleteResponse>(`/coin/${id}`);
    return response;
};
