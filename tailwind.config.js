/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                header: `url("../public/overlay3.svg"), linear-gradient(45deg, #9bb17d 5%, #4fa49a 30%, #4361c2)`,
                footer: `url("../public/overlay3.svg"), linear-gradient(45deg, #4361c2, #4fa49a 30%, #9bb17d 90%)`,
                image: `url("../public/bg.jpg"), linear-gradient(#555, #555)`,
            },
        },
    },
    plugins: [],
};
