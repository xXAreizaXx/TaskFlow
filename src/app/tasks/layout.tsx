// NextJS
import type { Metadata } from "next";

// Layout
import AppLayout from "@layouts/AppLayout";

// Metadata
export const metadata: Metadata = {
    description: "",
    title: "TaskFlow | Tasks",
};

export default function TasksLayout({ children }: { children: React.ReactNode }) {
    return <AppLayout>
        {children}
    </AppLayout>;
}
