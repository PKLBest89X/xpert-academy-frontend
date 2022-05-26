import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/useRedux";
import { useModalClose, useModalOpen } from "hooks/effects/useModal";

// <---------------------- import types ------------------------->
import type { VisibleFadeType } from "types/actions.type";

export const useFade = () => {
    // show is controlling the CSS animation
    const { popupStatus: visible } = useAppSelector((state) => state.modal);
    const { modalClose } = useModalClose();
    const { modalOpen } = useModalOpen();
    const [animateActive, setAnimateActive] = useState<VisibleFadeType>("idle");

    // Update visibility when show changes
    useEffect(() => {
        let isMounted = true;
        if (visible && isMounted) setAnimateActive("active");
        return () => {
            isMounted = false;
        };
    }, [visible]);

    // These props go on the fading DOM element
    let fromProps = {
        onAnimationEnd: () => {
            if (animateActive === "inactive" && visible) {
                modalClose();
            }
        },
    };

    return {
        visible,
        modalOpen,
        modalClose,
        animateActive,
        setAnimateActive,
        animationEnd: fromProps.onAnimationEnd,
    };
};
