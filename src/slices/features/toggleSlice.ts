import { createSlice } from "@reduxjs/toolkit";

type InitialType = {
    smUp: boolean;
    smDown: boolean;
};

const initialState: InitialType = {
    smUp: false,
    smDown: false,
};

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        onSmUpOpen: (state) => {
            state.smUp = true;
        },
        onSmUpClose: (state) => {
            state.smUp = false;
        },
        onSmDownOpen: (state) => {
            state.smDown = true;
        },
        onSmDownClose: (state) => {
            state.smDown = false;
        },
        handleToggle: (state) => {
            state.smDown = !state.smDown;
            state.smUp = !state.smUp;
        },
    },
});

export const {
    onSmUpOpen,
    onSmUpClose,
    onSmDownOpen,
    onSmDownClose,
    handleToggle,
} = toggleSlice.actions;
export default toggleSlice.reducer;
