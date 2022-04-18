const breakpointScreen = {
    xs: {
        min: 480,
        max: 639,
    },
    sm: {
        min: 640,
        max: 767,
    },
    md: {
        min: 768,
        max: 1023,
    },
    lg: {
        min: 1024,
        max: 1279,
    },
    xl: {
        min: 1280,
        // max: 1535
    },
};

const { xs, sm, md, lg, xl } = breakpointScreen;

export const screenBreakpoints = {
    xs: `(min-width: ${xs.min}px) and (max-width: ${xs.max}px)`,
    sm: `(min-width: ${sm.min}px) and (max-width: ${sm.max}px)`,
    md: `(min-width: ${md.min}px) and (max-width: ${md.max}px)`,
    lg: `(min-width: ${lg.min}px) and (max-width: ${lg.max}px)`,
    xl: `(min-width: ${xl.min}px)`,
};
