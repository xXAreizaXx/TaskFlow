"use client";

// NextJS
import Image from "next/image";

// ReactJS
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

// Context
import { useLanguage } from "@contexts/LanguageContext";

// Flowbite
import { Dropdown } from "flowbite-react";

function ESIconLanguage() {
    return <Image
        alt="Language"
        className="rounded-[4px]"
        height={20}
        src="/es.svg"
        width={20}
    />;
}

function ENIconLanguage() {
    return <Image
        alt="Language"
        className="rounded-[4px]"
        height={20}
        src="/en.svg"
        width={20}
    />;
}

export default function Translate () {
    // Language
    const { changeLanguage, language } = useLanguage();

    // Translation
    const { t } = useTranslation();

    // State
    const [lngKey, setLngKey] = useState(language || "es");

    // Functions
    const handleLanguage = useCallback((language: string) => {
        setLngKey(language);
        changeLanguage(language);
    }, [changeLanguage]);

    return (
        <div className="relative z-[9999]">
            <Dropdown
                label={
                    <div className="p-2 bg-white border rounded-lg">
                        {lngKey === "es" && <ESIconLanguage />}
                        {lngKey === "en" && <ENIconLanguage />}
                    </div>
                }
                dismissOnClick={true}
                inline={true}
                theme={{
                    floating: {
                        target: "w-fit",
                        base: "absolute z-[9999] w-fit rounded divide-y divide-gray-100 shadow bg-white border border-gray-200",
                        animation: "transition-opacity",
                        hidden: "hidden",
                        style: {
                            dark: "bg-gray-900 divide-gray-600 border-gray-600",
                            light: "border border-gray-200 bg-white text-gray-900",
                        },
                        content: "py-1 text-sm text-gray-700 dark:text-gray-200",
                    }
                }}
            >
                <Dropdown.Item onClick={() => handleLanguage("es")} className="flex items-center gap-2 justify-between">
                    {t("Language.es")}
                    <ESIconLanguage />
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguage("en")} className="flex items-center gap-2 justify-between">
                    {t("Language.en")}
                    <ENIconLanguage />
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
}