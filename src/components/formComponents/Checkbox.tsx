import React, { useState } from "react";

// <----------------- import redux hooks adn funtctions -------------------->
import { useAppSelector, useAppDispatch } from "hooks/useRedux";
import { togglePersist } from "slices/features/persistLogin/persistLoginSlice";



export const Checkbox: React.FC = () => {
    // <-------------------- defined initial variables --------------------->
    const { persist } = useAppSelector((state) => state.persistLogin);
    const dispatch = useAppDispatch();

    // <------------------- functions ------------------->
    const onChecked = () => dispatch(togglePersist())

    return (
        <div className="form-check">
            <input
                className="appearance-none h-4 w-4 border border-b-container-third-color rounded-sm bg-body-color checked:bg-primary-color checked:border-primary-color focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={persist}
                onChange={onChecked}
            />
            <label
                className="inline-block text-text-color"
                htmlFor="flexCheckDefault"
            >
                Default checkbox
            </label>
        </div>
    );
};
