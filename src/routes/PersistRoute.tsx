import { FC } from "react";
import { useRefreshToken } from "hooks/useRefreshToken";
import { useAppSelector } from "hooks/useRedux";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";

// <--------------------- import types ------------------------>

import type { AuthInfoType } from "types/auth.type";
import { AxiosError } from "axios";
import type { NotificationType } from "types/actions.type";

const PersistRoute: FC = () => {
    const { persist } = useAppSelector((state) => state.persistLogin);
    const refresh = useRefreshToken();

    const { isLoading } = useQuery(["refresh"], async ({ signal }) => {
        const getResponse = await refresh({ signal });
        return getResponse;
    });

    return !persist ? <Outlet /> : isLoading ? <p>loading...</p> : <Outlet />;
};

export { PersistRoute };
