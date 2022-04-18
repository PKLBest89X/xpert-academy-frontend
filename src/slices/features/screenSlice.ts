import { createSlice } from "@reduxjs/toolkit";

type InitialType = {
    smUp: boolean;
    smDown: boolean;
};

const initialState: InitialType = {
    smUp: false,
    smDown: false,
};

const screenSlice = createSlice({
    name: "screen",
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
    },
});

export const { onSmUpOpen, onSmUpClose, onSmDownOpen, onSmDownClose } = screenSlice.actions;
export default screenSlice.reducer;
