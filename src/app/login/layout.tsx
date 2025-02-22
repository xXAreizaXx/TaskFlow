// NextJS
import type { Metadata } from "next";

// Layout
import LoginLayout from "@layouts/LoginLayout";

// Metadata
export const metadata: Metadata = {
    description: "",
    title: "TaskFlow | Login",
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
    return <LoginLayout>
        {children}
    </LoginLayout>;
}
