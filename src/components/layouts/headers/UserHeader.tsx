import React from "react";
import { useHeader } from "hooks/useHeader";
import { Link } from "react-router-dom";

// <--------------- import icons ------------->
import { BsDiamondHalf } from "react-icons/bs";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

// <--------------- import routing data --------------->
import { routingUserData } from "./data";

// <--------------- import aos ---------------->
import { useAos } from "hooks/effects/useAos";

const UserHeader: React.FC = () => {
    useAos();
    const { scrollActive } = useHeader();
    return (
        <header
            className={`fixed top-0 left-0 transition duration-150 ease-in-out z-50 w-full ${
                scrollActive
                    ? `shadow-md bg-[#ffffff]`
                    : `shadow-none transform translate-y-4`
            }`}
        >
            <nav className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between h-[64px]">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className={`flex items-center gap-4 font-bold ${
                                scrollActive
                                    ? `text-text-color`
                                    : `text-body-color`
                            }`}
                        >
                            <img
                                src={`${
                                    scrollActive
                                        ? `/assets/images/academy_24px.png`
                                        : `/assets/images/white_logo_academy_24px.png`
                                }`}
                                alt="just logo"
                            />
                            Xpert academy
                        </Link>
                        <div className="flex gap-8 ml-8">
                            {routingUserData.map((items, index) => (
                                <Link
                                    className={`relative inline-block gap-2 after:contents-[""] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:transform after:scale-0 after:origin-bottom-right after:transition after:duration-300 after:ease-in-out hover:after:transform hover:after:scale-100 hover:after:origin-bottom-left ${
                                        scrollActive
                                            ? `text-text-color hover:text-primary-color after:bg-primary-color`
                                            : `text-body-color hover:text-body-color after:bg-body-color`
                                    }`}
                                    key={index}
                                    to={items.path}
                                >
                                    {items.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/cart"
                            className={`relative flex items-center gap-2 mr-4 text-md after:absolute after:bottom-0 after:left-0 after:content-[""] after:w-full after:h-[2px] after:transform after:scale-0 after:origin-bottom-right after:transition after:duration-300 after:ease-in-out hover:after:transform hover:after:scale-100 hover:after:origin-bottom-left ${
                                scrollActive
                                    ? `text-text-color hover:text-primary-color after:bg-primary-color`
                                    : `text-body-color hover:text-body-color after:bg-body-color`
                            }`}
                        >
                            <FaShoppingCart />
                            ກະຕ່າໃສ່ເຄື່ອງ
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
                            to="auth/login"
                            className={`flex items-center transition duration-300 ease-in-out text-md gap-2 py-2 px-6 rounded-md ${
                                scrollActive
                                    ? `text-body-color bg-primary-color hover:bg-primary-color-act hover:shadow-lg hover:border-primary-color-act`
                                    : `bg-primary-color border-body-color text-body-color border-2 hover:bg-body-color hover:text-text-color`
                            }`}
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
