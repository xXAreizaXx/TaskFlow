// NextJS
import type { Metadata } from "next";

// Layout
import RegisterLayout from "@layouts/RegisterLayout";

// Metadata
export const metadata: Metadata = {
    description: "",
    title: "TaskFlow | Register",
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
    return <RegisterLayout>
        {children}
    </RegisterLayout>;
}
