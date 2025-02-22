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
        <Dropdown
            label={
                <div className="p-2 bg-white border rounded-lg">
                    {lngKey === "es" && <ESIconLanguage />}
                    {lngKey === "en" && <ENIconLanguage />}
                </div>
            }
            dismissOnClick={true}
            inline={true}
        >
            <Dropdown.Item onClick={() => handleLanguage("es")} className="flex items-center gap-4 justify-between">
                {t("Language.es")}
                <ESIconLanguage />
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguage("en")} className="flex items-center gap-4 justify-between">
                {t("Language.en")}
                <ENIconLanguage />
            </Dropdown.Item>
        </Dropdown>
    );
}