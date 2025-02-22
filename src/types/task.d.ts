type TTask = {
    id: string;
    title: string;
    description: string;
    status: "PENDING" | "COMPLETED";
    dueDate: string;
}

type DtoTask = Omit<TTask, "id">;

type TFilters = {
    title: string;
    status: string;
    dueDate: string;
    sortOrder: "asc" | "desc";
};