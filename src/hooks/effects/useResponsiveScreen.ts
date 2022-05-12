import { useEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { screenBreakpoints } from "utils/screenBreakpoints";
import { useAppDispatch } from "hooks/useRedux";
import {
    onSmUpOpen,
    onSmUpClose,
    onSmDownClose,
} from "slices/features/toggleSlice";

export const useResponsiveScreen = () => {
    const dispatch = useAppDispatch();
    const { matches: sm } = useMediaQuery(screenBreakpoints.sm);
    const { matches: md } = useMediaQuery(screenBreakpoints.md);
    const { matches: lg } = useMediaQuery(screenBreakpoints.lg);
    useEffect(() => {
        if (sm || md) {
            dispatch(onSmUpClose());
            dispatch(onSmDownClose());
        } else if (lg) dispatch(onSmUpOpen());
    }, [dispatch, sm, md, lg]);
    return { sm, md, lg };
};
