import apiRequest from "../../../api/index";

interface AuthResponse {
    auth: boolean;
    token: string;
}

interface Data {
    login: string;
    password: string;
}

export const fetchAuthorization = (data: Data | undefined): Promise<AuthResponse> => {
    return apiRequest.post<AuthResponse>(`/auth/login`, data);
};
