import { createSlice } from "@reduxjs/toolkit";

type PersistType = {
    persist: boolean;
};

const initialState: PersistType = {
    persist: JSON.parse(`${localStorage.getItem("persist")}`) || false,
};

const persistLoginSlice = createSlice({
    name: "persistLogin",
    initialState,
    reducers: {
        togglePersist: (state) => {
            state.persist = !state.persist;
            localStorage.setItem("persist", String(state.persist));
        },
    },
});

export const { togglePersist } = persistLoginSlice.actions;
export default persistLoginSlice.reducer;
