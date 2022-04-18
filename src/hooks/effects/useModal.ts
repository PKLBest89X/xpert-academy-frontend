import { popupOpen, popupClose } from "slices/features/modalSlice";
import { useAppDispatch } from "hooks/useRedux";
import { useEffect } from "react";

type ModalOpenType = string;

export const useModalOpen = () => {
    const dispatch = useAppDispatch();
    const modalOpen = (open: ModalOpenType) => {
        dispatch(popupOpen(open));
    };

    return { modalOpen };
};

export const useModalClose = () => {
    const dispatch = useAppDispatch();
    const modalClose = () => {
        dispatch(popupClose());
    };
    return { modalClose };
};
