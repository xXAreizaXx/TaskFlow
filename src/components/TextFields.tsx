/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// ReactJS
import { useState } from "react";
import { Control, Controller, type FieldErrors, type UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Flowbite
import { FloatingLabel } from "flowbite-react";

// Icons

interface IInput {
    className?: string;
    control: Control<any>;
    errors: FieldErrors;
    isDisabled?: boolean;
    label: string;
    name: string;
    register: UseFormRegister<any>;
    type?: string;
}

export function TextField(props: IInput) {
    // Props
    const { className, control, errors, isDisabled, label, name, register, type = "text" } = props;

    // Translations
    const { t } = useTranslation();

    // Errors
    const error = t(errors?.[name]?.message as string) ?? errors?.[name]?.message;
    
    return (
        <Controller
            {...register(name)}
            control={control}
            name={name}
            render={({ field }) => <FloatingLabel
                {...field}
                className={className}
                color={error ? "error" : undefined}
                disabled={isDisabled}
                helperText={error}
                label={label}
                type={type}
                variant="outlined"
            />}
        />
    );
}

export function InputPassword(props: IInput) {
    // Props
    const { className, control, errors, isDisabled, label, name, register } = props;

    // Translations
    const { t } = useTranslation();

    // States
    const [visible, setVisible] = useState(false);

    // Errors
    const error = t(errors?.[name]?.message as string) ?? errors?.[name]?.message;

    return (
        <Controller
            {...register(name)}
            control={control}
            name={name}
            render={({ field }) => <FloatingLabel
                {...field}
                className={className}
                color={error ? "error" : undefined}
                disabled={isDisabled}
                helperText={error}
                label={label}
                type={visible ? "text" : "password"}
                variant="outlined"
            />
            }
        />
    );
}