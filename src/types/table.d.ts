interface ITableLayoutProps {
    children: RowElement | RowElement[];
    emptyContent?: React.ReactNode;
    isLoading?: boolean;
    onSelectionChange?: (keys: never) => void;
    selectedKeys?: "all" | Iterable<Key>;
    selectionMode?: "single" | "multiple";
    setTablePage?: React.Dispatch<React.SetStateAction<number>>;
    setTableRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
    tablePage?: number;
    tableRowsPerPage?: number;
    tHeaders: string[];
    topContent?: React.ReactNode | React.ReactNode[] | null;
    totalData?: number;
    totalPages?: number;
}

interface ITableHeaderProps {
    isBack?: boolean;
    module:
        | "banks"
        | "catalogs"
        | "categories"
        | "connections"
        | "customer-groups"
        | "customers"
        | "orders"
        | "price-lists"
        | "shipments"
        | "users"
        | "wallet"
        | "warehouses";
}

interface ITableActionsProps {
    module:
        | "banks"
        | "catalogs"
        | "categories"
        | "connections"
        | "customer-groups"
        | "customers"
        | "orders"
        | "price-lists"
        | "shipments"
        | "users"
        | "wallet"
        | "warehouses";
    params: IParams;
}
