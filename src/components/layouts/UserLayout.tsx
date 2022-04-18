import { FC } from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "./headers/UserHeader";

const UserLayout: FC = () => {
    return (
        <>
            <UserHeader />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default UserLayout;
