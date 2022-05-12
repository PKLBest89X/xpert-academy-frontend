import { FC, useContext, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../App";

// <------------------ import admin header, components --------------------->
import AdminHeader from "./headers/AdminHeader";
import AdminNavigation from "./navigations/AdminNavigation";
import Backdrop from "components/Backdrop";

// <----------------- import redux functions and hooks ------------------------->
import { useAppSelector, useAppDispatch } from "hooks/useRedux";
import { handleToggle } from "slices/features/toggleSlice";

const AdminLayout: FC = () => {
    // <-------------- defined initial variables --------------->
    const { smDown, smUp } = useAppSelector((state) => state.toggle);
    const { sm } = useContext(ThemeContext);
    const dispatch = useAppDispatch();

    // <----------------- functions -------------------------->
    const handleClick = useCallback(() => dispatch(handleToggle()), [dispatch]);
    const handleClickNavLink = useCallback(() => {
        if (sm && smDown) dispatch(handleToggle());
    }, [dispatch, sm, smDown]);
    return (
        <div>
            <AdminHeader />
            <Backdrop active={smDown && sm} handleClick={handleClick} />
            <div className={`flex pt-[64px]`}>
                <AdminNavigation
                    screen={{
                        smDown,
                        smUp,
                    }}
                    handleClickMenuToggle={handleClick}
                    handleClickNavLink={handleClickNavLink}
                />
                <div
                    className={`w-full ${
                        !smDown && sm && `ml-0`
                    } transition-all duration-300 ease-out lg:ml-[256px] ${
                        smUp
                            ? `lg:ml-[256px] md:ml-[256px]`
                            : `lg:ml-[60px] md:ml-[60px]`
                    }`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
