"use client";

// NextJS
import { useRouter } from "next/navigation";

// ReactJS
import { useTranslation } from "react-i18next";

// Components
import { BtnPrimary } from "@components/Buttons";
import { TextParagraph, TitleH1 } from "@components/Typographies";

// Icons
import { IconArrowLeft } from "@tabler/icons-react";
 
export default function NotFound() {
    // Translation
    const { t } = useTranslation();

    // Navigation
    const { push } = useRouter();

    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex flex-col items-center space-y-6">
                <TextParagraph className="text-base font-semibold text-primary">404</TextParagraph>
                <TitleH1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                    {t("NotFound.Title")}
                </TitleH1>
                <TextParagraph className="text-base leading-7">
                    {t("NotFound.Description")}
                </TextParagraph>

                <div className="flex items-center gap-4">
                    <BtnPrimary onClick={() => push("/")} icon={IconArrowLeft}>
                        {t("NotFound.GoHome")}
                    </BtnPrimary>
                    {/*  <Translate /> */}
                </div>
            </div>
        </main>
    );
}