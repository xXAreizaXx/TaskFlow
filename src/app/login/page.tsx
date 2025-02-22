"use client";

// NextJS
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// ReactJS
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Components
import { BtnPrimary } from "@components/Buttons";
import { TitleH2 } from "@components/Typographies";

// Utils
import { type TSignInSchema, signInSchema } from "@utils/schemas";

// External Dependencies
import { InputPassword, TextField } from "@components/TextFields";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
 
export default function LoginPage() {
    // Translations
    const { t } = useTranslation();

    // Navigation
    const { push } = useRouter();

    // Form
    const {
        control,
        formState: { errors },
        handleSubmit,
        register
    } = useForm<TSignInSchema>({
        resolver: zodResolver(signInSchema),
        mode: "all"
    });

    // Functions
    const onSubmit: SubmitHandler<TSignInSchema> = async (data) => {
        const response = signIn("credentials", {
            callbackUrl: "/home",
            email: data.email,
            password: data.password,
            redirect: false
        });
        
        toast.promise(response, {
            error: t("Toast.ErrorLogin"),
            loading: t("Constants.Loading"),
            success: () => {
                push("/");
                return t("Toast.SuccessLogin");
            }
        });
    }; 

    const onError: SubmitErrorHandler<TSignInSchema> = () => {
        toast.error(t("Toast.ErrorForm"));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <section className="flex flex-col gap-4 items-center w-full">
                <TitleH2>
                    {t("Login.SignIn")}
                </TitleH2>

                <TextField
                    control={control}
                    errors={errors}
                    label={t("Login.Email")}
                    name="email"
                    register={register}
                    type="email"
                />

                <InputPassword
                    control={control}
                    errors={errors}
                    label={t("Login.Password")}
                    name="password"
                    register={register}
                />

                <footer className="flex gap-4 items-center justify-between">
                    <BtnPrimary type="submit">
                        {t("Login.SignIn")}
                    </BtnPrimary>

                    <BtnPrimary onClick={() => push("/register")} outline>
                        {t("Login.SignUp")}
                    </BtnPrimary> 
                </footer>
            </section>
        </form>
    );
}