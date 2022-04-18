module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontSize: {
            xs: "0.75rem",
            sm: "0.813rem",
            base: "0.938rem",
            md: "1rem",
            lg: "1.25rem",
            xl: "1.5rem",
            "2xl": "3rem",
        },
        colors: {
            "primary-color": "#4bafe7",
            "primary-color-act": "#439DCF",
            "second-color": "#ebaf54",
            "second-color-act": "#D39D4B",
            "title-color": "#393939",
            "text-color": "#707070",
            "body-color": "#fbfefd",
            "container-primary-color": "#ffffff",
            "container-second-color": "#747474",
            "backdrop-color": "#000000",
        },
        extend: {
            keyframes: {
                fadeIn: {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
                fadeOut: {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                    },
                },
            },
            animation: {
                fadeIn: "fadeIn 300ms ease-in-out",
                fadeOut: "fadeOut 300ms ease-in-out",
            },
        },
    },
    plugins: [],
};
