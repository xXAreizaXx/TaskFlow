"use client";

// ReactJS
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Components
import { BtnPrimary } from "@components/Buttons";

// Services
import { getTasks } from "@services/tasks";

// UI - Task
import CardTask from "@ui/tasks/CardTask";

// External Dependencies
import { IconCirclePlus } from "@tabler/icons-react";

export default function TasksPage() {
    // Translations
    const { t } = useTranslation();

    // Contexts
    const { open, setOpen, setModule, setParams } = useSlideAction();

    // Query
    const { data: tasks, isLoading, refetch } = useQuery<TTask[]>({
        queryKey: ["tasks", open],
        queryFn: () => getTasks()
            .then((res) => res?.data)
            .catch(() => []),
    });

    // Functions
    const handleAdd = () => {
        setParams({ description: "Tasks.Create.Description", title: "Tasks.Create.Title" });
        setModule("task-create");
        setOpen(true);
    };

    if (isLoading) return null;

    return (
        <main className="flex flex-col gap-4 w-full h-full">
            <header className="flex items-center gap-2 justify-end">
                <BtnPrimary onClick={handleAdd} icon={IconCirclePlus}>{t("Constants.Add")}</BtnPrimary>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks?.sort((a, b) => {
                    if (a.status === "PENDING" && b.status === "COMPLETED") return -1;
                    if (a.status === "COMPLETED" && b.status === "PENDING") return 1;
                    return 0;
                }).map((task) => <CardTask key={task.id} task={task} refetch={refetch} />)}
            </div>
        </main>
    );
}
