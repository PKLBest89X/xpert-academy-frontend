import React from "react";

// <--------------------------------- import icons ----------------------------------->
import { Icon } from "components/Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// <------------------------------- import utils ------------------------------------>
import { classNames } from "utils/classNames";

type PageButtonType = {
    children?: React.ReactElement;
    iconName?: IconProp;
    className?: string;
};

export const PageButton: React.FC<
    PageButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
    const { children, iconName, className, ...rest } = props;
    const makeStyles = className || "";
    return (
        <button
            type="button"
            className={classNames(
                "inline-block bg-primary-color text-body-color rounded-md px-4 py-2 transition duration-200 ease-in-out hover:bg-primary-color-act",
                makeStyles
            )}
            {...rest}
        >
            {iconName && <Icon icon={iconName} />}
        </button>
    );
};
