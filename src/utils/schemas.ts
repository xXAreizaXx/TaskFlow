// Zod
import { z } from "zod";

// Login Schema
export const signInSchema = z.object({
    email: z
        .string({
            message: "Schema.Email",
        })
        .email({
            message: "Schema.Email",
        }),
    password: z.string({
        message: "Schema.Password",
    }),
});

export type TSignInSchema = z.infer<typeof signInSchema>;


// Register Schema
export const signUpSchema = z.object({
    email: z
        .string({
            message: "Schema.Email",
        })
        .email({
            message: "Schema.Email",
        }),
    fullName: z
        .string({
            message: "Schema.FullName",
        })
        .min(3, {
            message: "Schema.FullNameMin",
        })
        .max(14, {
            message: "Schema.FullNameMax",
        }),
    password: z
        .string({
            message: "Schema.Password",
        })
        .min(8, {
            message: "Schema.PasswordMin",
        })
        .regex(/[A-Z]/, {
            message: "Schema.PasswordUppercase",
        })
        .regex(/[a-z]/, {
            message: "Schema.PasswordLowercase",
        })
        .regex(/[0-9]/, {
            message: "Schema.PasswordNumber",
        })
        .regex(/[^A-Za-z0-9]/, {
            message: "Schema.PasswordSpecial",
        }),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;

// Task Schema
export const taskSchema = z.object({
    title: z
        .string({
            message: "Schema.Title",
        })
        .min(3, {
            message: "Schema.TitleMin",
        })
        .max(14, {
            message: "Schema.TitleMax",
        }),
    description: z
        .string({
            message: "Schema.Description",
        })
        .min(3, {
            message: "Schema.DescriptionMin",
        })
        .max(100, {
            message: "Schema.DescriptionMax",
        }),
    dueDate: z
        .string({
            message: "Schema.DueDate",
        }),
    status: z.enum(["PENDING", "COMPLETED"], {
        message: "Schema.Status",
    })
});

export type TTaskSchema = z.infer<typeof taskSchema>;