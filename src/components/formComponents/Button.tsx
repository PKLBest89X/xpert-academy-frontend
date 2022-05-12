import React, { FC, ButtonHTMLAttributes } from "react";

// <-------------------- import types --------------------->
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "components/Icon";

type ButtonProps = {
    text: string;
    handleClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    className?: string;
    leftIcon?: IconProp;
    rightIcon?: IconProp;
};

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> =
    React.memo((props) => {
        const { text, handleClick, className, leftIcon, rightIcon, ...rest } =
            props;
        return (
            <button
                className={`inline-block bg-primary-color text-body-color rounded-md py-2 ${
                    leftIcon || rightIcon ? `px-4` : `px-6`
                } transition duration-200 ease-in-out hover:bg-primary-color-act ${
                    className || ""
                }`}
                onClick={handleClick}
                {...rest}
            >
                {leftIcon && <Icon icon={leftIcon} />}
                <span
                    className={`text-body-color ${leftIcon && `ml-2`} ${
                        rightIcon && `mr-2`
                    }`}
                >
                    {text}
                </span>
                {rightIcon && <Icon icon={rightIcon} />}
            </button>
        );
    });
