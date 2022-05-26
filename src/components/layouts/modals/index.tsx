import React, { useRef } from "react";
import { useOverflow } from "hooks/effects/useOverflow";
import { useAppSelector } from "hooks/useRedux";
import { useFade } from "hooks/effects/useFade";
import { useSpring, animated } from "react-spring";
import { Icon } from "components/Icon";

type ModalType = {
    children: React.ReactNode;
    modalHeight?: string;
    modalWidth?: string;
};

const Modal: React.FC<ModalType> = ({ children, modalHeight, modalWidth }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { popupStatus } = useAppSelector((state) => state.modal);
    const { animateActive, setAnimateActive, animationEnd } = useFade();
    useOverflow({ action: popupStatus });

    const styles = useSpring({
        opacity: 1,
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(-20px, -20px)" },
    });

    const handleClickModal = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (modalRef.current === event.target) {
            setAnimateActive("inactive");
        }
    };
    return (
        <animated.div
            style={styles}
            className={`fixed top-0 left-0 flex justify-center items-center bg-backdrop-color bg-opacity-20 z-[100] overflow-hidden w-full h-full ${
                animateActive === "inactive" && `animate-fadeOut`
            }`}
            onClick={handleClickModal}
            onAnimationEnd={animationEnd}
            ref={modalRef}
        >
            <div
                className={`relative bg-container-primary-color rounded-md shadow-md max-w-5xl h-4/5 z-20 flex-1 overflow-hidden`}
            >
                <div className="absolute top-0 left-0 flex justify-end items-center w-full h-[64px]">
                    <button
                        className="inline-block px-4 py-6 border-none rounded-md flex-initial w-[60px]"
                        onClick={() => setAnimateActive("inactive")}
                    >
                        <Icon
                            icon={"xmark"}
                            className={`w-5 h-5 text-text-color`}
                        />
                    </button>
                </div>
                <div
                    className={`overflow-auto h-[calc(100%-64px)] absolute top-16 left-0 w-full`}
                >
                    {children}
                </div>
            </div>
        </animated.div>
    );
};

export default Modal;
