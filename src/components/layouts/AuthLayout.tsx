import { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
    return (
        <div>
            <h1>Authentication layout</h1>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
