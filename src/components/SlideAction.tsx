"use client";

// ReactJS
import { Dialog } from "@headlessui/react";
import { useTranslation } from "react-i18next";

// Components
import { TextParagraph, TitleH1 } from "./Typographies";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Icons
import { IconX } from "@tabler/icons-react";

export default function SlideAction({ children }: { children: React.ReactNode }) {
    // Contexts
    const { params, setOpen } = useSlideAction();

    // Translations
    const { t } = useTranslation();

    return (
        <div className="flex h-full flex-col bg-white shadow-md">
            <div className="flex flex-col bg-primary p-4 gap-4">
                <div className="flex items-center justify-between">
                    <Dialog.Title className="text-lg font-semibold text-white" as={TitleH1}>
                        {t(params?.title ?? "") || params?.title}
                    </Dialog.Title>

                    <button onClick={() => setOpen(false)} type="button">
                        <IconX size={20} color="white" />
                    </button>
                </div>
                
                <TextParagraph className="text-white">
                    {t(params?.description ?? "") || params?.description}
                </TextParagraph>
            </div>
                                        
            <div className="relative flex flex-col p-4 overflow-y-auto h-full">
                {children}
            </div>
        </div>
    );
}
