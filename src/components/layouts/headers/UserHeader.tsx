import React, { useState } from "react";
import { useHeader } from "hooks/effects/useHeader";
import { Link, useLocation } from "react-router-dom";

// <--------------- import icons ------------->
import { BsDiamondHalf } from "react-icons/bs";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

// <---------------- import navigations ------------------>
import UserNavigation from "../navigations/UserNavigation";

// <--------------- import hooks---------------->
import { useAppDispatch } from "hooks/useRedux";
import { handleToggle } from "slices/features/toggleSlice";

const UserHeader: React.FC = () => {
    // <---------------- defined initial variables -------------->
    const { scrollActive } = useHeader();
    const location = useLocation();
    const dispatch = useAppDispatch();

    // <----------------- functions ----------------------->
    const onHandleToggle = () => dispatch(handleToggle());
    return (
        <header
            className={`fixed top-0 left-0 transition duration-200 ease-in-out z-50 w-full px-4 2xl:px-0 ${
                scrollActive || location.pathname !== "/"
                    ? `shadow-md bg-[#ffffff]`
                    : `shadow-none transform translate-y-4`
            }`}
        >
            <nav className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between h-[64px]">
                    <div className="flex items-center gap-4">
                        <AiOutlineMenu
                            className={`md:hidden text-lg cursor-pointer ${
                                scrollActive || location.pathname !== "/"
                                    ? `text-text-color`
                                    : `text-body-color`
                            }`}
                            onClick={onHandleToggle}
                        />

                        <Link
                            to="/"
                            className={`flex items-center ml-4 md:mr-4 lg:mr-8 md:ml-0 gap-4 w-full font-bold ${
                                scrollActive || location.pathname !== "/"
                                    ? `text-text-color`
                                    : `text-body-color`
                            }`}
                        >
                            <img
                                src={`${
                                    scrollActive || location.pathname !== "/"
                                        ? `/assets/images/academy_24px.png`
                                        : `/assets/images/white_logo_academy_24px.png`
                                }`}
                                alt="just logo"
                            />
                            Xpert academy
                        </Link>
                        <UserNavigation
                            scrollActive={scrollActive}
                            pathname={location.pathname}
                            toggle={onHandleToggle}
                        />
                    </div>
                    <div className="flex items-center gap-4 md:gap-2">
                        <Link
                            to="/cart"
                            className={`flex items-center gap-2 mr-2 text-md transition duration-200 ease-in-out ${
                                scrollActive || location.pathname !== "/"
                                    ? `text-text-color hover:text-primary-color after:bg-primary-color`
                                    : `text-body-color hover:text-body-color after:bg-body-color`
                            }`}
                        >
                            <FaShoppingCart />
                            <span
                                className={`relative xs:hidden sm:block md:hidden lg:block after:absolute after:bottom-0 after:left-0 after:content-[""] after:w-full after:h-[2px] after:transform after:scale-0 after:origin-bottom-right after:transition after:duration-300 after:ease-in-out hover:after:transform hover:after:scale-100 hover:after:origin-bottom-left ${
                                    scrollActive || location.pathname !== "/"
                                        ? `text-text-color hover:text-primary-color after:bg-primary-color`
                                        : `text-body-color hover:text-body-color after:bg-body-color`
                                }`}
                            >
                                ກະຕ່າ
                            </span>
                        </Link>
                        {/* {userData ? (
                            <UserLoggedIn
                                userData={userData}
                                handleLogout={handleLogout}
                            />
                        ) : (
                            <Link to="/login" className="btn-gg">
                                login
                            </Link>
                        )} */}
                        <Link
                            to="auth"
                            className={`flex items-center transition duration-300 ease-in-out text-md gap-2 py-2 px-6 rounded-md hover:shadow-sm ${
                                scrollActive || location.pathname !== "/"
                                    ? `text-body-color bg-primary-color hover:bg-primary-color-act hover:shadow-lg hover:border-primary-color-act`
                                    : `bg-opacity-0 border-body-color text-body-color border-2 hover:bg-body-color hover:text-text-color`
                            }`}
                            state={{
                                from: location,
                            }}
                        >
                            <FaUserCircle />
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default UserHeader;
