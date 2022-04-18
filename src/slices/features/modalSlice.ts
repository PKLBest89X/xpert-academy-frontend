import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = {
    popupName: string;
    popupStatus: boolean;
};

const initialState: ModalType = {
    popupName: "",
    popupStatus: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        popupOpen: (state, { payload }: PayloadAction<string>) => {
            state.popupName = payload;
            state.popupStatus = true
        },
        popupClose: (state) => {
            state.popupName = "";
            state.popupStatus = false;
        }
    }
})

export const { popupOpen, popupClose } = modalSlice.actions;
export default modalSlice.reducer;