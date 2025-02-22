"use client";

// ReactJS
import { useTranslation } from "react-i18next";

// Flowbite
import { Dropdown } from "flowbite-react";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Icons
import { IconDotsCircleHorizontal, IconEdit, IconTrashX } from "@tabler/icons-react";

export default function TableActions({ module, params }: ITableActionsProps) {
    // Contexts
    const { setOpen, setModule, setParams } = useSlideAction();

    // Translations
    const { t } = useTranslation();

    // Functions
    const handleAction = (key: string) => {
        const moduleKey = `${module}-${key}`;

        const lngKey = module
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("") + `.${key.charAt(0).toUpperCase() + key.slice(1)}`; 

        const title = params?.title || `${lngKey}.Title`;

        const description = params?.description || `${lngKey}.Description`;

        setParams({ ...params, title, description });
        setModule(moduleKey as TModule);
        setOpen(true);
    };

    return (
        <Dropdown
            label={
                <div className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <IconDotsCircleHorizontal size={20} className="text-gray-500" />
                </div>
            }
            dismissOnClick={true}
            inline={true}
        >
            <Dropdown.Item onClick={() => handleAction("edit")} className="flex items-center gap-2">
                <IconEdit size={20} />
                {t("Constants.Edit")}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleAction("delete")} className="flex items-center gap-2">
                <IconTrashX size={20} />
                {t("Constants.Delete")}
            </Dropdown.Item>
        </Dropdown>
    );
}