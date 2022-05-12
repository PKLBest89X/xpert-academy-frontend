import { Outlet, Navigate, useLocation } from "react-router-dom";
import { FC } from "react";

// <--------------- import types ------------------>
import type { UserRoleType } from "types/auth.type";

// <--------------- import hooks ----------------->
import { useAppSelector } from "hooks/useRedux";

type RoleType = {
    allowedRole: UserRoleType[];
};

export const ProtectedRoute: FC<RoleType> = ({ allowedRole }) => {
    // <-------------- defined initial variables ---------------->
    const location = useLocation();
    const { accessToken, roles } = useAppSelector((state) => state.auth);

    return true ? (
        <Outlet />
    ) : (
        <Navigate to="auth" state={{ from: location }} replace />
    );
};
