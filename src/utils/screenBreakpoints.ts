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
};

const { sm, md, lg } = breakpointScreen;

export const screenBreakpoints = {
    // xs: `(min-width: ${xs.min}px) and (max-width: ${xs.max}px)`,
    sm: `(max-width: ${sm.max}px)`,
    md: `(min-width: ${md.min}px) and (max-width: ${md.max}px)`,
    lg: `(min-width: ${lg.min}px)`,
};
