module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            st: "0px",
            // => @media (min-width: 0px) { ... }

            xs: "320px",
            // => @media (min-width: 320px) { ... }

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
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
            "red-color": "#ff3232",
            "red-color-act": "#ff1919",
            "green-color": "#00cc00",
            "green-color-act": "#00b200",
            "blue-color": "#3232ff",
            "blue-color-act": "#1919ff",
            "title-color": "#393939",
            "text-color": "#707070",
            "body-color": "#fbfefd",
            "container-primary-color": "#ffffff",
            "container-second-color": "#747474",
            "container-second-color-act": "#9a9a9a",
            "container-third-color": "#d6d6d6",
            "container-fourth-color": "#f0f0f0",
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
                fadeIn: "fadeIn 400ms ease-in-out",
                fadeOut: "fadeOut 300ms ease",
                spin: "spin 6s linear infinite",
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};
