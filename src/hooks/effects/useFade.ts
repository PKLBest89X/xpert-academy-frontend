import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/useRedux";
export const useFade = () => {
	// show is controlling the CSS animation
    const { popupStatus } = useAppSelector(state => state.modal);
	const [show, setShow] = useState(popupStatus);
	// isVisible is exposed to the component (toggled after animation)
	const [visible, setVisible] = useState(show);

	// Update visibility when show changes
	useEffect(() => {
		if (show) setVisible(true);
	}, [show]);

	// These props go on the fading DOM element
	let fromProps = {
		style: { animation: `${show ? "fadeIn" : "fadeOut"} 1s` },
		onAnimationEnd: () => {
			if (!show) {
				setVisible(false);
				setShow(false)
			}
		}
	};


	return {visible, setVisible, show, setShow, animationEnd: fromProps.onAnimationEnd};
};