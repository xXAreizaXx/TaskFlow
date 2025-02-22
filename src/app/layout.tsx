// NextJS
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

// Providers
import Providers from "../providers/Providers";

// Styles
import "./globals.css";

// Fonts
const dmSans = DM_Sans({
    style: "normal",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

// Metadata
export const metadata: Metadata = {
    description: "",
    title: "TaskFlow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={dmSans.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
