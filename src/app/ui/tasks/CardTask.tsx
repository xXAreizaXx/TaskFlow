// ReactJS
import { useMutation } from "@tanstack/react-query";
import { Badge, Checkbox } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Components
import { TextParagraph, TitleH2 } from "@components/Typographies";

// Services
import { updateTask } from "@services/tasks";

// UI - Tasks
import { ModalDelete } from "./ModalDelete";

// Utils
import { formatterLongDate, joinClassNames } from "@utils/functions";

// Icons
import { IconAlignJustified, IconCalendar, IconTrash } from "@tabler/icons-react";
import { toast } from "sonner";

export default function CardTask({ task, refetch }: { task: TTask; refetch: VoidFunction }) {
    // Translations
    const { t } = useTranslation();

    // Contexts
    const { setOpen, setModule, setParams } = useSlideAction();

    // State
    const [openModal, setOpenModal] = useState(false);

    // Mutation
    const mutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: DtoTask }) => updateTask(id, data),
        onSuccess: () => {
            toast.success(t("Toast.Tasks.Success.Edit"));
            refetch();
        },
        onError: () => {
            toast.error(t("Toast.Tasks.Errors.Edit"));
        }
    });

    // Functions
    const handleEdit = (task: TTask) => {
        if (task.status === "COMPLETED") return;

        setParams({ description: "Tasks.Edit.Description", id: task.id, title: "Tasks.Edit.Title" });
        setModule("task-edit");
        setOpen(true);
    };

    const handleComplete = (task: TTask) => {
        if (task.status === "COMPLETED") return;

        const refactoredTask: DtoTask = { ...task, status: "COMPLETED" };

        mutation.mutate({ id: task.id, data: refactoredTask });
    };

    const handleDelete = (task: TTask) => {
        if (task.status === "COMPLETED") return;

        setOpenModal(true);
    };

    const isExpired = () => {
        const date = new Date(task.dueDate);
        const now = new Date();
        return date < now;
    };

    // Constants
    const formatDate = formatterLongDate(new Date(task.dueDate));

    return (
        <div className={joinClassNames(
            "flex gap-4 border border-gray-200 rounded-md p-4 hover:bg-gray-50 shadow-md w-full",
            task.status === "COMPLETED" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}>
            <Checkbox className="mt-1" checked={task.status === "COMPLETED"} disabled={task.status === "COMPLETED"} onChange={() => handleComplete(task)}/>

            <div className="flex flex-col gap-2 w-full" onClick={() => handleEdit(task)}>
                <TitleH2>
                    {task.title}
                </TitleH2>
                <header className="flex items-center gap-2">
                    <Badge color={task.status === "COMPLETED" ? "success" : "purple"}>
                        {task.status}
                    </Badge>
                    {isExpired() && <Badge color="failure">EXPIRED</Badge>}
                </header>
                <TextParagraph className="flex items-center gap-2">
                    <IconAlignJustified size={18} />
                    {task.description}
                </TextParagraph>
                <TextParagraph className="flex items-center gap-2 text-gray-500">
                    <IconCalendar size={18} />
                    {formatDate}
                </TextParagraph>
            </div>

            {task.status !== "COMPLETED" && <IconTrash size={25} color="red" onClick={() => handleDelete(task)}/>}

            <ModalDelete openModal={openModal} refetch={refetch} setOpenModal={setOpenModal} task={task} />
        </div>
    );
}