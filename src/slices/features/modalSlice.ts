import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ModalPopupType } from "types/actions.type";

type ModalType = {
    popupName: ModalPopupType | "";
    popupStatus: boolean;
};

const initialState: ModalType = {
    popupName: "",
    popupStatus: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        popupOpen: (state, { payload }: PayloadAction<ModalPopupType>) => {
            state.popupName = payload;
            state.popupStatus = true;
        },
        popupClose: (state) => {
            state.popupName = "";
            state.popupStatus = false;
        },
    },
});

export const { popupOpen, popupClose } = modalSlice.actions;
export default modalSlice.reducer;
