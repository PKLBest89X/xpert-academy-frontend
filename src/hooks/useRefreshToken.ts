import axios from "api/axios";
import Axios from "axios";
import { AxiosResponse, AxiosRequestConfig } from "axios";

// <------------ import for redux ------------->
import { useAppDispatch } from "hooks/useRedux";
import { onAuthUser } from "slices/auth/authSlice";

//<------------------ Import Type --------------->
import type { AuthInfoType } from "types/auth.type";
import type { NotificationType } from "types/actions.type";

type AxiosOptions = {
    signal?: AbortSignal;
};

export const useRefreshToken = () => {
    const dispatch = useAppDispatch();
    const getResponse = async ({ signal }: AxiosOptions) => {
        try {
            let abortController = new AbortController();
            const signal = abortController.signal;
            const source = Axios.CancelToken.source();
            const refresh: AxiosResponse<
                Omit<AuthInfoType, "name" | "surname" | "email" | "password">
            > = await Axios.get("http://localhost:5000/api/v1/refreshToken", {
                withCredentials: true,
                signal,
                cancelToken: source.token,
            });
            const { accessToken, roles } = refresh.data;
            dispatch(onAuthUser({ accessToken, roles }));
            source.cancel("Quests have been cancelled!!");
            abortController.abort();
            return accessToken;
        } catch (err) {
            return (err as NotificationType).message;
        }
    };
    return getResponse;
};
