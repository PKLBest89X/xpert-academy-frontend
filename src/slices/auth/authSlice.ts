import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// <------------ Import type ------------->
import type { UserInfoType, AuthInfoType } from 'types/auth.type';


type InitialStateType = {
    data: UserInfoType | null;
    accessToken: Omit<AuthInfoType, "roles"> | string,
    userRoles: Omit<AuthInfoType, "accessToken"> | null
}

const initialState: InitialStateType = {
    data: null,
    accessToken: "",
    userRoles: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onAuthUser: (state, { payload }: PayloadAction<AuthInfoType>) => {
            state.accessToken = payload.accessToken;
            state.userRoles!.roles = payload.roles;
        },
        onGetUser: (state, { payload }: PayloadAction<UserInfoType>) => {
            state.data = payload;
        }
    }
});

export const { onAuthUser, onGetUser } = authSlice.actions;
export default authSlice.reducer;