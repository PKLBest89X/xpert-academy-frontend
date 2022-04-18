import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "slices/auth/authSlice";
import modalSlice from 'slices/features/modalSlice';
import screenSlice from "slices/features/screenSlice";

export const rootReducer = combineReducers({
    auth: authSlice,
    modal: modalSlice,
    screen: screenSlice
})