import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// <------------ Import type ------------->
import type { UserInfoType, AuthInfoType } from "types/auth.type";

type InitialStateType = AuthInfoType & {
    data: UserInfoType | null;
};

const initialState: InitialStateType = {
    data: null,
    accessToken: "",
    roles: [],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onAuthUser: (state, { payload }: PayloadAction<AuthInfoType>) => {
            state.accessToken = payload.accessToken;
            state.roles = state.roles.concat(payload.roles);
        },
        onGetUser: (state, { payload }: PayloadAction<UserInfoType>) => {
            state.data = payload;
        },
    },
});

export const { onAuthUser, onGetUser } = authSlice.actions;
export default authSlice.reducer;
