import { FC } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout: FC = () => {
    return (
        <div>
            <h1>Admin Layout</h1>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
