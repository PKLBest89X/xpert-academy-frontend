import React, { useEffect, useRef } from "react";
import { useModalClose } from "hooks/effects/useModal";
import { useOverflow } from "hooks/effects/useOverflow";
import { useAppSelector } from "hooks/useRedux";
import { useFade } from 'hooks/effects/useFade'

type ModalType = {
    children: React.ReactNode;
};

const Modal: React.FC<ModalType> = ({ children }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { popupStatus } = useAppSelector((state) => state.modal);
    const { modalClose } = useModalClose();
    const { visible, setVisible, setShow, animationEnd} = useFade();
    useOverflow();

    const handleClickModal = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (modalRef.current === event.target) {modalClose()
            setVisible(false)
            setShow(false)
        };
    };
    return (
        <div
            className={`fixed top-0 left-0 flex justify-center items-center bg-backdrop-color bg-opacity-20 z-[100] overflow-hidden w-full h-full ${
                visible ? `block animate-fadeIn` : `animate-fadeOut`
            }`}
            onClick={handleClickModal}
            onAnimationEnd={animationEnd}
            ref={modalRef}
        >
            <div className="relative bg-container-primary-color rounded-md shadow-md max-w-5xl h-3/5 z-20 flex-1 overflow-hidden">
                <div className="absolute top-0 left-0 flex justify-end items-center w-full h-[64px]">
                    <button
                        className="inline-block px-4 py-6 border-none rounded-md flex-initial w-[60px]"
                        onClick={() => modalClose()}
                    >
                        X
                    </button>
                </div>
                <div className="overflow-auto h-[calc(100%-64px)] absolute top-16 left-0 w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
