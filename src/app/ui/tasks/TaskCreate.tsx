"use client";

// ReactJS
import { useMutation } from "@tanstack/react-query";
import { type SubmitErrorHandler, type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Components
import { BtnPrimary, BtnSecondary } from "@components/Buttons";
import { InputDate, TextField } from "@components/TextFields";
import { TitleH3 } from "@components/Typographies";

// Services
import { createTask } from "@services/tasks";

// Utils
import { type TTaskSchema, taskSchema } from "@utils/schemas";

// External Dependencies
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCalendarCheck, IconInfoCircle } from "@tabler/icons-react";
import { toast } from "sonner";

export default function TaskCreate() {
    // Translations
    const { t } = useTranslation();

    // Contexts
    const { setOpen } = useSlideAction();

    // Mutation
    const mutation = useMutation({
        mutationFn: (data: DtoTask) => createTask(data),
        onSuccess: () => {
            toast.success(t("Toast.Tasks.Success.Create"));
            setOpen(false);
        },
        onError: () => {
            toast.error(t("Toast.Tasks.Errors.Create"));
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
        defaultValues: {
            status: "PENDING",
            dueDate: new Date().toISOString().split("T")[0]
        },
        resolver: zodResolver(taskSchema),
        mode: "all"
    });

    // Functions
    const onSubmit: SubmitHandler<TTaskSchema> = async (data) => {
        mutation.mutate(data);
    }; 

    const onError: SubmitErrorHandler<TTaskSchema> = () => {
        toast.error(t("Toast.ErrorForm"));
    };

    const handleClose = () => {
        setOpen(false);
        reset();
    };

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
                    {t("Constants.Save")}
                </BtnPrimary>
            </footer>
        </form>
    );
}