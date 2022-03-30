import { axiosWithAuth } from "api/axios";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";
import { AxiosInstance, AxiosError } from "axios";

// <--------- Import redux hooks--------->
import { useAppSelector } from "hooks/useRedux";

type TokenType = {
    authorization: string;
};

export const useAxiosWithAuth = (): AxiosInstance => {
    const refresh = useRefreshToken();
    const { accessToken } = useAppSelector(state => state.auth);
    useEffect(() => {
        const requestInterceptor = axiosWithAuth.interceptors.request.use(
            (config) => {
                if (!(config.headers as TokenType).authorization) {
                    (
                        config.headers as TokenType
                    ).authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        const responseInterceptor = axiosWithAuth.interceptors.response.use(
            (response) => response,
            async (error: AxiosError) => {
                const preventRequest = error.config;
                if (error.response?.status === 403) {
                    const newAccessToken = await refresh();
                    (
                        preventRequest.headers as TokenType
                    ).authorization = `Bearer ${newAccessToken}`;
                    return axiosWithAuth(preventRequest);
                }
                return Promise.reject(error);
            }
        );
        return () => {
            axiosWithAuth.interceptors.request.eject(requestInterceptor);
            axiosWithAuth.interceptors.response.eject(responseInterceptor);
        };
    }, [accessToken, refresh]);
    return axiosWithAuth;
};
