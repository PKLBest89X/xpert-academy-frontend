import { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
    return (
        <main className="flex justify-center items-center w-full h-screen">
            <Outlet />
        </main>
    );
};

export default AuthLayout;
