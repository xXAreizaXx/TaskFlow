"use client";

// ReactJS
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Components
import { BtnPrimary } from "@components/Buttons";

// Services
import { getTasks } from "@services/tasks";

// UI - Task
import CardTask from "@ui/tasks/CardTask";
import TaskFilters from "@ui/tasks/TaskFilters";

// External Dependencies
import { IconCirclePlus } from "@tabler/icons-react";

export default function TasksPage() {
    // Translations
    const { t } = useTranslation();

    // Contexts
    const { open, setOpen, setModule, setParams } = useSlideAction();

    // States
    const [filters, setFilters] = useState<TFilters>({
        title: "",
        status: "",
        dueDate: "",
        sortOrder: "asc"
    });

    // Query
    const { data: tasks, isLoading, refetch } = useQuery<TTask[]>({
        queryKey: ["tasks", open],
        queryFn: () => getTasks()
            .then((res) => res?.data)
            .catch(() => []),
    });

    // Filtered Tasks
    const filteredTasks = useMemo(() => {
        if (!tasks) return [];
        
        return tasks.filter(task => {
            const matchTitle = task.title.toLowerCase().includes(filters.title.toLowerCase());
            const matchStatus = !filters.status || task.status === filters.status;
            const matchDueDate = !filters.dueDate || new Date(task.dueDate).toISOString().split("T")[0] === filters.dueDate;
            
            return matchTitle && matchStatus && matchDueDate;
        }).sort((a, b) => {
            if (filters.sortOrder === "asc") {
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            }
            return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        });
    }, [tasks, filters]);

    // Functions
    const handleAdd = () => {
        setParams({ description: "Tasks.Create.Description", title: "Tasks.Create.Title" });
        setModule("task-create");
        setOpen(true);
    };

    if (isLoading) return null;

    return (
        <main className="flex flex-col gap-4 w-full h-full">
            <header className="flex flex-col gap-4">
                <div className="flex items-center gap-2 justify-end">
                    <BtnPrimary onClick={handleAdd} icon={IconCirclePlus}>{t("Constants.Add")}</BtnPrimary>
                </div>
                
                <TaskFilters filters={filters} setFilters={setFilters} />
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.map((task) => (
                    <CardTask key={task.id} task={task} refetch={refetch} />
                ))}
            </div>
        </main>
    );
}
