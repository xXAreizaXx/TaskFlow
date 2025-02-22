// NextJS
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ReactJS
import { Tooltip } from "flowbite-react";
import { ReactNode, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";


// Constants
import { routes } from "@constants/routes";

// Utils
import { joinClassNames } from "@utils/functions";

// Icons
import { IconMenu2, type TablerIcon } from "@tabler/icons-react";

interface SideBarProps {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}

interface IRoute {
    icon: TablerIcon;
    isViewable: boolean;
    key: string;
    name: string;
    path: string;
}

export function AlertTooltip ({ name, expanded, children }: { name: string, expanded: boolean, children: ReactNode }) {
    if (expanded) return children;

    return (
        <Tooltip content={name} placement='right'>
            {children}
        </Tooltip>
    );
}

export function NavList ({ expanded }: { expanded: boolean }) {
    // Translation
    const { t } = useTranslation();

    // Pathname
    const pathname = usePathname(); 

    // Constants
    const viewableRoutes = routes?.filter((route) => route?.isViewable);

    return (
        <nav className={joinClassNames(
            "flex flex-col h-full justify-between",
            expanded ? "overflow-y-auto overflow-x-hidden scrollbar-sidebar pl-0.5" : "items-center"
        )}>
            <ul className="flex flex-col gap-y-1">
                {viewableRoutes?.map((route: IRoute, index: number) => {
                    const isActive = route?.path === `/${pathname?.split("/")?.[1]}`;
                
                    return (
                        <AlertTooltip key={index} name={t(route?.key) || route?.name} expanded={expanded}>
                            <Link
                                className={joinClassNames(
                                    "relative flex items-center font-regular rounded-xl cursor-pointer transition-colors group",
                                    expanded ? "p-2 h-10 gap-4" : "p-0 justify-center h-10 w-10",
                                    isActive ? "bg-sky-100 text-primary hover:text-sky-400 hover:bg-sky-100" : "text-gray-600 hover:bg-sky-50 hover:text-white"
                                )}
                                href={route?.path}
                            >
                                <route.icon size={25} className={joinClassNames(isActive ? "text-primary" : "text-gray-400 group-hover:text-sky-400 transition-colors")} />

                                <span className={joinClassNames(
                                    "overflow-hidden transition-colors",
                                    isActive ? "text-primary" : "text-gray-600 group-hover:text-sky-400",
                                    expanded ? "w-40" : "w-0"
                                )}>
                                    {t(route?.key) || route?.name}
                                </span>
                            </Link>
                        </AlertTooltip>
                    );
                })}
            </ul>
        </nav>
    );
}

export default function SliderBar ({ expanded, setExpanded }: SideBarProps) {    
    return (
        <aside className="group/top h-screen bg-white px-2 py-4 gap-2 flex flex-col items-center overflow-y-auto overflow-x-hidden scrollbar-sidebar scroll-mr-0.5 shadow-md">
            <picture className={joinClassNames(
                "sm:hidden lg:flex items-center gap-4 w-full",
                !expanded ? "justify-center" : "justify-between"
            )}
            >
                <Image
                    alt="Logo"
                    className={joinClassNames(
                        "ml-2",
                        !expanded ? "hidden" : ""
                    )}
                    height={30}
                    src="/logo-positivo.svg"
                    width={100}
                />

                <button onClick={() => setExpanded(!expanded)} className="items-center justify-center hidden lg:flex rounded-md cursor-pointer transition-colors group">
                    <IconMenu2 size={25} color="#6B7280" />
                </button>
            </picture>

            <NavList expanded={expanded} />
        </aside>
    );
}