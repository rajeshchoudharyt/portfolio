import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            transitionProperty: {
                width: "width",
            },
            boxShadow: {
                all: "0px 0px 15px -1px rgb(0 0 0 / 0.3)",
            },
            colors: {
                bianca: {
                    50: "#f7f5ec",
                    100: "#f3f0e1",
                    200: "#e5dec3",
                    300: "#d4c79d",
                    400: "#c2ac75",
                    500: "#b69759",
                    600: "#a8854e",
                    700: "#8c6b42",
                    800: "#72573a",
                    900: "#5d4831",
                    950: "#312419",
                },
            },
        },
    },
    safelist: [
        "bg-white",
        "text-black",
        "bg-gray-500",
        "border-gray-500",

        "bg-bianca-50",
        "text-bianca-950",
        "bg-bianca-500",
        "border-bianca-500",

        "bg-gray-800",
        "text-gray-200",
        "bg-gray-50",
        "border-gray-50",

        "bg-gradient-to-r from-sky-300 to-purple-300",
        "text-purple-800",
        "bg-sky-800",
        "border-sky-800",

        "fill-white",
        "bg-black",

        "fill-bianca-50",
        "bg-bianca-950",

        "fill-gray-800",
        "bg-gray-200",

        "fill-purple-800",

        "text-gray-800",
        "text-bianca-50",
        "text-white",
        "bg-purple-800",
        "text-purple-200",
    ],
    plugins: [],
};
export default config;
