// Icons
import { IconCheckbox, type TablerIcon } from "@tabler/icons-react";

interface IRoute {
    icon: TablerIcon;
    isViewable: boolean;
    key: string;
    name: string;
    path: string;
}

export const routes: IRoute[] = [
    {
        icon: IconCheckbox,
        isViewable: true,
        key: "Routes.Tasks",
        name: "Tasks",
        path: "/tasks",
    }
];
