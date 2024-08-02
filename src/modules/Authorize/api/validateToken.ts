import apiRequest from "../../../api";

interface AuthResponse {
    success: boolean;
}

export const validateToken = async (): Promise<boolean> => {
    try {
        const response = await apiRequest.post<AuthResponse>("/auth/verify", {});
        return response.success === true;
    } catch {
        return false;
    }
};
