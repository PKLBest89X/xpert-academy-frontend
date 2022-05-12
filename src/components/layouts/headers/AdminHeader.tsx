import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// <------------------ import icons ----------------->
import { AiOutlineMenu } from "react-icons/ai";

// <----------------- import form components ---------------->
import { Button } from "components/formComponents/Button";

// <----------------- import hooks ------------------>>
import { useAppDispatch } from "hooks/useRedux";
import { handleToggle } from "slices/features/toggleSlice";

const AdminHeader: React.FC = () => {
    // <---------------- defined initial variables -------------->
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // <----------------- functions ----------------------->
    const onHandleToggle = () => dispatch(handleToggle());
    const onLogout = () => {
        navigate("/", {
            replace: true,
            state: {
                from: location,
            },
        });
    };

    return (
        <header className="fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-30 px-4 shadow-md bg-container-primary-color">
            <nav className="flex items-center justify-between h-[64px]">
                <div className="flex items-center gap-4">
                    <AiOutlineMenu
                        className={`text-lg cursor-pointer text-text-color`}
                        onClick={onHandleToggle}
                    />

                    <Link
                        to="/"
                        className={`flex items-center ml-4 gap-4 font-bold text-text-color`}
                    >
                        <img
                            src={`/assets/images/academy_24px.png`}
                            alt="just logo"
                        />
                        Xpert academy
                    </Link>
                </div>
                <div>
                    <Button
                        name="btnAdminLogout"
                        text="Logout"
                        handleClick={onLogout}
                    />
                </div>
            </nav>
        </header>
    );
};

export default AdminHeader;
