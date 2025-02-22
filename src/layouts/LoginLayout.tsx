"use client";

// NextJS
import Image from "next/image";

// ReactJS
import { useTranslation } from "react-i18next";

// Components

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    // Translation
    const { t } = useTranslation();

    return (
        <section className="grid place-items-center h-screen grid-cols-1 bg-white md:grid-cols-2 p-3">
            <aside className="flex-col w-full h-full bg-primary gap-8 p-16 md:flex hidden rounded-lg items-center justify-center">
                <Image
                    alt="Logo"
                    height={150}
                    src="/logo.svg"
                    width={300}
                />
            </aside>

            <aside className="flex flex-col w-full h-full bg-white justify-center gap-8 p-16">
                {children}
            </aside>
        </section>
    );
}