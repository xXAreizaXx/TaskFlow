"use client";

// ReactJS
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { type SubmitErrorHandler, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Components
import { BtnPrimary, BtnSecondary } from "@components/Buttons";
import { InputDate, TextField } from "@components/TextFields";
import { TitleH3 } from "@components/Typographies";

// Services
import { getOneTask, updateTask } from "@services/tasks";

// Utils
import { type TTaskSchema, taskSchema } from "@utils/schemas";

// External Dependencies
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCalendarCheck, IconInfoCircle } from "@tabler/icons-react";
import { toast } from "sonner";

export default function TaskEdit() {
    // Translations
    const { t } = useTranslation();

    // Contexts
    const { setOpen, params } = useSlideAction();

    // Query
    const { data: task, isLoading } = useQuery<TTask>({
        queryKey: ["task", params?.id],
        queryFn: () => getOneTask(params?.id as string ?? "")
            .then((res) => res?.data)
            .catch(() => []),
        enabled: !!params?.id
    });

    // Mutation
    const mutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: DtoTask }) => updateTask(id, data),
        onSuccess: () => {
            toast.success(t("Toast.Tasks.Success.Edit"));
            setOpen(false);
        },
        onError: () => {
            toast.error(t("Toast.Tasks.Errors.Edit"));
        }
    });

    // Form
    const {
        control,
        formState: { errors, isValid },
        reset,
        handleSubmit,
        register
    } = useForm<TTaskSchema>({
        resolver: zodResolver(taskSchema),
        mode: "all"
    });

    // Functions
    const onSubmit: SubmitHandler<TTaskSchema> = async (data) => {
        mutation.mutate({ id: params?.id as string, data });
    }; 

    const onError: SubmitErrorHandler<TTaskSchema> = () => {
        toast.error(t("Toast.ErrorForm"));
    };

    const handleClose = () => {
        setOpen(false);
        reset();
    };

    // Effects
    useEffect(() => {
        if (!task) return;

        reset(task);
    }, [task]);

    if (isLoading) return null;

    return (
        <form
            className="flex flex-col justify-between gap-4 h-full"
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <section className="flex flex-col gap-4">
                <TitleH3 className="flex items-center gap-2 text-primary">
                    <IconInfoCircle size={24} />
                    {t("Tasks.Info")}
                </TitleH3>

                <TextField
                    control={control}
                    errors={errors}
                    label={t("Tasks.Title")}
                    name="title"
                    register={register}
                    type="text"
                />

                <TextField
                    control={control}
                    errors={errors}
                    label={t("Tasks.Description")}
                    name="description"
                    register={register}
                    type="text"
                />

                <TitleH3 className="flex items-center gap-2 text-primary">
                    <IconCalendarCheck size={24} />
                    {t("Tasks.Date")}
                </TitleH3>

                <InputDate
                    control={control}
                    errors={errors}
                    label={t("Tasks.DueDate")}
                    minDate={new Date().toISOString().split("T")[0]}
                    name="dueDate"
                    register={register}
                    type="date"
                />
            </section>

            <footer className="flex gap-4 items-center justify-end">
                <BtnSecondary onClick={handleClose}>
                    {t("Constants.Cancel")}
                </BtnSecondary>

                <BtnPrimary type="submit" isLoading={mutation?.isPending} disabled={!isValid}>
                    {t("Constants.Edit")}
                </BtnPrimary>
            </footer>
        </form>
    );
}
