import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "slices/auth/authSlice";
import modalSlice from 'slices/features/modalSlice';
import toggleSlice from "slices/features/toggleSlice";
import persistLoginSlice from "slices/features/persistLogin/persistLoginSlice";

export const rootReducer = combineReducers({
    auth: authSlice,
    modal: modalSlice,
    toggle: toggleSlice,
    persistLogin: persistLoginSlice,
})
