import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            transitionDuration: {
                400: "400ms",
            },
            boxShadow: {
                all: "0px 0px 10px -3px rgb(120 113 108 / 0.6)",
            },
            fontSize: {
                xxs: "0.65rem",
            },
            minHeight: {
                md: "28rem",
            },
            backdropBlur: {
                xs: "0.7px",
            },
        },
    },
    plugins: [],
};
export default config;
