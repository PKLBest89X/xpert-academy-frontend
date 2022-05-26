import React, { FC, useContext } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { ThemeContext } from "../../../App";

// <---------------- import icons ------------------>
import { Icon } from "components/Icon";
import { AiOutlineMenu } from "react-icons/ai";

// <--------------- import admin navigate data ------------->
import { routingAdminData } from "./navigationData";

// <---------------- import redux hooks and function --------------->
import { useOverflow } from "hooks/effects/useOverflow";

// <--------------- immport components ------------------------->
import { Divider } from "components/Divider";

type ScreenNowType = {
    screen: {
        smDown: boolean;
        smUp: boolean;
    };
    handleClickMenuToggle: (
        event: React.MouseEvent<SVGAElement, MouseEvent>
    ) => void;
    handleClickNavLink: (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => void;
};

const AdminNavigation: FC<ScreenNowType> = React.memo(
    ({ screen, handleClickMenuToggle, handleClickNavLink }) => {
        // <--------------------- defined initial variables ------------------>
        const location = useLocation();
        const { md, lg } = useContext(ThemeContext);
        const { smDown, smUp } = screen;

        // <-------------------- defined hooks and fetching mounted ----------------------->
        useOverflow({ action: smDown });

        // <-------------------- functions ------------------------->

        return (
            <aside
                className={`fixed top-0 st:-left-full md:left-0  ${
                    smDown ? `st:left-0` : `st:-left-full`
                } h-screen overflow-hidden bg-container-primary-color shadow-lg st:z-[100] md:z-10 transition-all duration-300 ease-out w-64 lg:w-64 ${
                    smUp ? `lg:w-64 md:w-64` : `lg:w-[60px] md:w-[60px]`
                }`}
            >
                <div className="relative top-0 left-0 w-full min-h-full overflow-hidden">
                    <div className="absolute top-0 left-0 flex items-center gap-4 px-4 w-full h-[64px]">
                        <AiOutlineMenu
                            className={`text-lg cursor-pointer text-text-color`}
                            onClick={handleClickMenuToggle}
                        />

                        <Link
                            to="/"
                            className={`flex items-center ml-4 gap-4 font-bold text-text-color whitespace-nowrap`}
                        >
                            <img
                                src={`/assets/images/academy_24px.png`}
                                alt="just logo"
                            />
                            Xpert academy
                        </Link>
                    </div>
                    <div
                        className={`absolute overflow-y-auto overflow-x-hidden top-16 left-0 py-4 px-2 w-full h-[calc(100vh-64px)] inner-scrollbar`}
                    >
                        <div className={`transition-all duration-150 ease-in-out transform ${!smUp && (md || lg) ? `hidden` : `flex flex-col justify-center items-center`}`}>
                            {/* <Icon
                                icon={"circle-user"}
                                className={`rounded-full w-16 h-16 text-text-color`}
                            /> */}
                            <img
                                src="/assets/images/user/profiles/Neymar55.jpg"
                                alt="admin"
                                className={`rounded-full w-16 h-16 text-text-color`}
                            />
                            <span className="">Phoummisay</span>
                            <span className="">Khounthikoummane</span>
                        </div>
                        <Divider />
                        <ul className="space-y-2">
                            {routingAdminData.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.path}
                                        state={{ from: location }}
                                        className={({ isActive }) =>
                                            `grid grid-cols-4 items-center justify-start p-2 rounded-lg text-md font-normal transition duration-200 ease-in-out ${
                                                isActive
                                                    ? `bg-primary-color text-body-color`
                                                    : `bg-body-color text-text-color hover:bg-container-third-color hover:text-body-color`
                                            }`
                                        }
                                        onClick={handleClickNavLink}
                                        end={true}
                                    >
                                        <Icon
                                            icon={item.iconName}
                                            className={`col-span-1 w-6 h-6`}
                                        />
                                        <span
                                            className={`col-span-3 whitespace-nowrap ${
                                                !smUp && (md || lg) && `hidden`
                                            }`}
                                        >
                                            {item.title}
                                        </span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
);
export default AdminNavigation;
