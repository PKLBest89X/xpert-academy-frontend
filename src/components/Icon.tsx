import React, { FC } from "react";

// <-------------------- import type --------------------->
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type IconComponentProp = {};

export const Icon: FC<FontAwesomeIconProps> = (props) => {
    return <FontAwesomeIcon {...props} />;
};
