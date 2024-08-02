export const getTokenFromCookies = (): string | null => {
    const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];
    return token || null;
};