"use client";

// NextJS
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

// Components
import { TitleH2 } from "./Typographies";

// Constants
import { routes } from "@constants/routes";

// Icons
import { IconMenu2, type TablerIcon } from "@tabler/icons-react";
import Translate from "./Translate";

interface NavHeaderProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IRoute {
    icon: TablerIcon;
    isViewable: boolean;
    key: string;
    name: string;
    path: string;
}

export default function NavHeader ({ setOpen, setExpanded }: NavHeaderProps) {
    // Session
    const { data: session } = useSession();

    // Translations
    const { t } = useTranslation();
    
    // Pathname
    const pathname = usePathname();
    const newPathname = pathname.split("/").slice(0, 2).join("/");
    
    // Constants
    const route = routes.find((route: IRoute) => route.path === newPathname);

    if (!route) return;

    return (
        <header className="sticky flex px-6 py-4 gap-6 items-center">
            <button
                type="button"
                className="flex items-center justify-center text-white sm:hidden"
                onClick={() => {
                    setOpen(true);
                    setExpanded(true);
                }}
            >
                <IconMenu2 size={25} color="#6B7280" />
            </button>

            <div className="flex items-center justify-between w-full">
                <TitleH2 className="flex items-center gap-3 text-gray-500 truncate">
                    <route.icon size={25} />
                    {t(route?.key) || route?.name}
                </TitleH2>

                <div className="flex gap-4 items-center">
                    <Translate />
                </div>
            </div>
        </header>
    );
}