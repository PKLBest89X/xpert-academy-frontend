import axios from "api/axios";
import { AxiosResponse } from "axios";

// <------------ import for redux ------------->
import { useAppDispatch } from "hooks/useRedux";
import { onAuthUser } from "slices/auth/authSlice";

//<------------------ Import Type --------------->
import type { AuthInfoType } from "types/auth.type";
import type { NotificationType } from "types/notification.type";

export const useRefreshToken = () => {
    const dispatch = useAppDispatch();
    const getResponse = async () => {
        try {
            const refresh: AxiosResponse<
                Omit<AuthInfoType, "name" | "surname" | "email" | "password">
            > = await axios.get("/refreshToken");
            const { accessToken, roles } = refresh.data;
            dispatch(onAuthUser({ accessToken, roles }));
            return refresh;
        } catch (err) {
            return (err as NotificationType).message;
        }
    };
    return getResponse;
};
