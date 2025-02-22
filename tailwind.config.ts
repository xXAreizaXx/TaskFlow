import type { Config } from "tailwindcss";

import flowbite from "flowbite-react/tailwind";

const config: Config = {
    content: [
        flowbite?.content(),
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: "#F97316",
                light: "#F3F4F6",
                primary: "#3B82F6",
                secondary: "#10B981",
                text: "#1F2937",
            },
        },
    },
    plugins: [
        flowbite?.plugin(),
    ],
};

export default config;
