
// ReactJS
import { useMutation } from "@tanstack/react-query";
import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

// Services
import { deleteTask } from "@services/tasks";

// External Dependencies
import { IconAlertCircle } from "@tabler/icons-react";
import { toast } from "sonner";

interface IModalDeleteProps {
    openModal: boolean;
    refetch: VoidFunction;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    task: TTask;
}

export function ModalDelete(props: IModalDeleteProps) {
    // Props
    const { openModal, refetch, setOpenModal, task } = props;

    // Translation
    const { t } = useTranslation();

    // Mutation
    const mutation = useMutation({
        mutationFn: (id: string) => deleteTask(id),
        onSuccess: () => {
            toast.success(t("Toast.Tasks.Success.Delete"));
            setOpenModal(false);
            refetch();
        },
        onError: () => {
            toast.error(t("Toast.Tasks.Errors.Delete"));
            setOpenModal(false);
        }
    });

    // Functions
    const handleDelete = () => {
        mutation.mutate(task.id);
    };

    return (
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="flex flex-col items-center text-center">
                    <IconAlertCircle size={50} color="#ef4444" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {t("Tasks.ModalDelete.Title", { name: task.title })}
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={handleDelete}>
                            {t("Tasks.ModalDelete.Yes")}
                        </Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            {t("Tasks.ModalDelete.No")}
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
