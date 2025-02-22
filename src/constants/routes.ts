// Icons
import {
    IconAffiliate,
    IconHome,
    IconSettings,
    IconTruckDelivery,
    IconUsersPlus,
    IconWallet,
    type TablerIcon,
} from "@tabler/icons-react";

interface IRoute {
    icon: TablerIcon;
    isViewable: boolean;
    key: string;
    name: string;
    path: string;
}

export const routes: IRoute[] = [
    {
        icon: IconHome,
        isViewable: true,
        key: "Routes.Home",
        name: "Home",
        path: "/home",
    },
    {
        icon: IconTruckDelivery,
        isViewable: true,
        key: "Routes.Shipments",
        name: "Shipments",
        path: "/shipments",
    },
    {
        icon: IconWallet,
        isViewable: true,
        key: "Routes.Wallet",
        name: "Wallet",
        path: "/wallet",
    },
    {
        icon: IconAffiliate,
        isViewable: true,
        key: "Routes.Connections",
        name: "Connections",
        path: "/connections",
    },
    {
        icon: IconUsersPlus,
        isViewable: true,
        key: "Routes.Users",
        name: "Users",
        path: "/users",
    },
    {
        icon: IconSettings,
        isViewable: true,
        key: "Routes.Configurations",
        name: "Configurations",
        path: "/configurations",
    },
];
