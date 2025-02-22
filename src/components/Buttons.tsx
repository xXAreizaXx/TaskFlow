"use client";

// ReactJS
import { Button, Spinner } from "flowbite-react";
import { useTranslation } from "react-i18next";

// Utils
import { joinClassNames } from "@utils/functions";

export function BtnPrimary(props: IBtnProps) {
    // Props
    const { children, size = "md", isLoading = false, icon: Icon, iconPosition = "left", fullWidth = false, pill = false, disabled, className = "", type = "button", ...rest } = props;

    // Translations
    const { t } = useTranslation();

    const buttonContent = (
        <>
            {isLoading && (
                <Spinner
                    aria-label={t("Constants.Loading")}
                    className="mr-2"
                    size={size === "xs" ? "xs" : "sm"}
                />
            )}
            {!isLoading && Icon && iconPosition === "left" && (
                <Icon className={`${children ? "mr-2" : ""} h-5 w-5`} />
            )}
            {children}
            {!isLoading && Icon && iconPosition === "right" && (
                <Icon className={`${children ? "ml-2" : ""} h-5 w-5`} />
            )}
        </>
    );

    return (
        <Button
            {...rest}
            className={joinClassNames("bg-primary", className)}
            disabled={disabled || isLoading}
            fullSized={fullWidth}
            pill={pill}
            size={size}
            type={type}
        >
            {buttonContent}
        </Button>
    );
}

export function BtnSecondary(props: IBtnProps) {
    // Props
    const { children, size = "md", isLoading = false, icon: Icon, iconPosition = "left", fullWidth = false, pill = false, disabled, className = "", ...rest } = props;
    // Translations
    const { t } = useTranslation();

    const buttonContent = (
        <>
            {isLoading && (
                <Spinner
                    aria-label={t("Constants.Loading")}
                    className="mr-2"
                    size={size === "xs" ? "xs" : "sm"}
                />
            )}
            {!isLoading && Icon && iconPosition === "left" && (
                <Icon className={`${children ? "mr-2" : ""} h-5 w-5`} />
            )}
            {children}
            {!isLoading && Icon && iconPosition === "right" && (
                <Icon className={`${children ? "ml-2" : ""} h-5 w-5`} />
            )}
        </>
    );

    return (
        <Button
            {...rest}
            className={joinClassNames("bg-secondary", className)}
            disabled={disabled || isLoading}
            fullSized={fullWidth}
            pill={pill}
            size={size}
        >
            {buttonContent}
        </Button>
    );
}