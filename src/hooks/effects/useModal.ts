import { popupOpen, popupClose } from "slices/features/modalSlice";
import { useAppDispatch } from "hooks/useRedux";
import type { ModalPopupType } from 'types/actions.type';

export const useModalOpen = () => {
    const dispatch = useAppDispatch();
    const modalOpen = (open: ModalPopupType) => {
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
