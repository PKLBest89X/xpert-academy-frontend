import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// <--------------- import axios and its tools ------------->
import axios from "api/axios";
import { AxiosError, AxiosResponse } from "axios";

// <---------------- import react query -------------->
import { useQuery, useMutation } from "react-query";

// <---------------- import hooks and redux function ---------------->
import { useAppDispatch } from "hooks/useRedux";
import { onAuthUser } from "slices/auth/authSlice";

// <---------------- import types ---------------------->
import type { LoginUserType, AuthInfoType } from "types/auth.type";
import type { NotificationType } from "types/actions.type";
import type { RoutesType } from "types/routes.type";

// <----------------- creating hooks ---------------->
// export const useRegister = () => {
//     const dispatch = useAppDispatch();
//     return useMutation<>()
// }

export const useLogin = <T extends LoginUserType>() => {
    // <-------------- Initial defined variables ----------------->
    const dispatch = useAppDispatch();
    const location = useLocation();
    const state = (location.state as RoutesType).from!.pathname;
    const navigate = useNavigate();

    return useMutation<
        AxiosResponse<AuthInfoType>,
        AxiosError<NotificationType>,
        T
    >(
        "authUser",
        async ({ email, password }: T) => {
            const loginUser = await axios.post(
                "login",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            return loginUser;
        },
        {
            onSuccess: (getResponse) => {
                dispatch(onAuthUser(getResponse.data));
                if (state === "admin") {
                    window.location.reload();
                    navigate("admin", {
                        replace: true,
                        state: {
                            from: location,
                        },
                    });
                } else {
                    navigate(state, {
                        replace: true,
                        state: {
                            from: location,
                        },
                    });
                }
            },
        }
    );
};

// export const useLogout = () => {
//     return useMutation<>()
// }
