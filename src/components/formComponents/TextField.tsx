import React, { FC, useState, useCallback } from "react";

// <--------------- import formik ------------------->
import { getIn, FieldProps } from "formik";

// <------------- import component -------------->
import { Icon } from "components/Icon";

// <---------------- import utils --------------->

// <---------------- import type ---------------->
import type { InputType } from "types/input.type";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// <----------------- defined types --------------->
type TextFieldFocusType = {
    name: string;
    isBlur: boolean;
};

type TextFieldPropsType = {
    leftIcon?: IconProp;
    rightIcon?: IconProp;
};

export const TextField: FC<
    TextFieldPropsType &
        React.InputHTMLAttributes<HTMLInputElement> &
        FieldProps
> = React.memo((props) => {
    // <---------------- defined initial variables ---------------->

    const isTouched = getIn(props.form.touched, props.field.name);
    const messageError = getIn(props.form.errors, props.field.name);
    const { leftIcon, rightIcon, field, form, ...rest } = props;
    const [focused, setFocused] = useState<TextFieldFocusType>({
        name: "",
        isBlur: true,
    });
    const [rightIconActive, setRightIconActive] = useState<boolean>(false);

    // <----------------- functions ------------->
    const onHandleFocus = useCallback(
        (event: React.FocusEvent<HTMLInputElement, Element>) => {
            const { name } = event.target;
            setFocused((prev) => ({ ...prev, name, isBlur: false }));
        },
        []
    );

    const handleRightIconClick = () => setRightIconActive(!rightIconActive);
    return (
        <div className="flex flex-col gap-2">
            <div className="relative">
                {leftIcon && (
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <Icon
                            icon={leftIcon}
                            className={`transition duration-200 ease-in-out ${
                                field.name === focused.name && !field.onBlur
                                    ? `text-primary-color`
                                    : `text-text-color`
                            }`}
                        />
                    </div>
                )}
                <input
                    type={
                        rightIcon &&
                        field.name?.toLocaleLowerCase().includes("password") &&
                        rightIconActive
                            ? `text`
                            : `password`
                    }
                    className={`outline-none bg-container-primary-color border border-text-color text-text-color text-md rounded-lg block w-full ${
                        leftIcon && `pl-10`
                    } ${
                        rightIcon && `pr-10`
                    } p-3 transition duration-200 ease-in-out focus:border-primary-color focus:ring-2`}
                    onFocus={onHandleFocus}
                    autoComplete="off"
                    {...field}
                    {...rest}
                />
                {rightIcon && (
                    <div
                        className={`flex absolute inset-y-0 right-0 items-center pr-3 ${
                            rightIcon && leftIcon
                                ? `cursor-pointer`
                                : `pointer-events-none`
                        } z-30`}
                    >
                        <Icon
                            icon={
                                leftIcon
                                    ? rightIconActive
                                        ? "eye"
                                        : "eye-slash"
                                    : rightIcon
                            }
                            className={`transition duration-200 ease-in-out ${
                                rightIconActive && leftIcon
                                    ? `text-second-color`
                                    : `text-text-color`
                            }`}
                            onClick={handleRightIconClick}
                        />
                    </div>
                )}
            </div>
            {props.form.errors && props.field.name && isTouched && (
                <p className="text-red-color text-sm">{messageError}</p>
            )}
        </div>
    );
});
