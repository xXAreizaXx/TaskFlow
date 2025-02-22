"use client";

// ReactJS
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Components
import { BtnPrimary } from "@components/Buttons";
import { TextParagraph, TitleH1 } from "@components/Typographies";

// Services
import { getTasks } from "@services/tasks";

// External Dependencies
import { IconCirclePlus } from "@tabler/icons-react";

export default function TasksPage() {
    // Translations
    const { t } = useTranslation();

    // Contexts
    const { open, setOpen, setModule, setParams } = useSlideAction();

    // Query
    const { data: tasks, isLoading } = useQuery<TTask[]>({
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

    const handleEdit = (task: TTask) => {
        setParams({ description: "Tasks.Edit.Description", id: task.id, title: "Tasks.Edit.Title" });
        setModule("task-edit");
        setOpen(true);
    };

    if (isLoading) return null;

    return (
        <main className="flex flex-col gap-4 w-full h-full">
            <header className="flex items-center gap-2 justify-end">
                <BtnPrimary onClick={handleAdd} icon={IconCirclePlus}>{t("Constants.Add")}</BtnPrimary>
            </header>

            <div className="flex flex-col gap-4">
                {tasks?.map((task) => (
                    <div key={task.id} className="flex flex-col gap-2" onClick={() => handleEdit(task)}>
                        <TitleH1>{task.title}</TitleH1>
                        <TextParagraph>{task.description}</TextParagraph>
                    </div>
                ))}
            </div>
        </main>
    );
}
