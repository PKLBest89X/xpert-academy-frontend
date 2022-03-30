import { Outlet, Navigate } from "react-router-dom";
import { FC } from "react";
import { useAppSelector } from "hooks/useRedux";

export const ProtectedRoute: FC = () => {
    const { data } = useAppSelector((state) => state.auth);
    return data ? <Outlet /> : <Navigate to="/login" replace />;
};
