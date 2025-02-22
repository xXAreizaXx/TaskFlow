"use client";

// NextJS
import { useRouter } from "next/navigation";

// ReactJS
import { useMutation } from "@tanstack/react-query";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Components
import { BtnSecondary } from "@components/Buttons";
import { TitleH2 } from "@components/Typographies";

// Utils
import { type TSignUpSchema, signUpSchema } from "@utils/schemas";

// Services
import { signUp } from "@services/auth";

// External Dependencies
import { InputPassword, TextField } from "@components/TextFields";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
 
export default function RegisterPage() {
    // Translations
    const { t } = useTranslation();

    // Navigation
    const { back } = useRouter();

    // Mutation
    const mutation = useMutation({
        mutationFn: (data: DtoSignUp) => signUp(data),
        onSuccess: () => {
            toast.success(t("Toast.Register.Success.Create"));
            back();
        },
        onError: (err) => {
            const error = err?.message;

            toast.error(t("Toast.Register.Errors.Create") || error);
        }
    });

    // Form
    const {
        control,
        formState: { errors },
        handleSubmit,
        register
    } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
        mode: "all"
    });

    // Functions
    const onSubmit: SubmitHandler<TSignUpSchema> = async (data) => {
        const refactoredData: DtoSignUp = {
            email: data?.email,
            name: data?.fullName,
            password: data?.password
        };

        mutation.mutate(refactoredData);
    }; 

    const onError: SubmitErrorHandler<TSignUpSchema> = () => {
        toast.error(t("Toast.ErrorForm"));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <section className="flex flex-col gap-4 items-center w-full">
                <TitleH2>
                    {t("Register.SignUp")}
                </TitleH2>

                <TextField
                    control={control}
                    errors={errors}
                    label={t("Register.FullName")}
                    name="fullName"
                    register={register}
                />

                <TextField
                    control={control}
                    errors={errors}
                    label={t("Register.Email")}
                    name="email"
                    register={register}
                    type="email"
                />

                <InputPassword
                    control={control}
                    errors={errors}
                    label={t("Register.Password")}
                    name="password"
                    register={register}
                />

                <footer className="flex gap-4 items-center justify-between">
                    <BtnSecondary onClick={back} outline>
                        {t("Constants.Back")}
                    </BtnSecondary>

                    <BtnSecondary type="submit">
                        {t("Register.SignUp")}
                    </BtnSecondary>
                </footer>
            </section>
        </form>
    );
}