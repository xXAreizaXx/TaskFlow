type TTask = {
    id: string;
    title: string;
    description: string;
    status: "PENDING" | "COMPLETED";
    dueDate: string;
}

type DtoTask = Omit<TTask, "id">;