// NextJS
import type { Metadata } from "next";

// Layout
import AppLayout from "@layouts/AppLayout";

// Metadata
export const metadata: Metadata = {
    description: "",
    title: "TaskFlow | Home",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return <AppLayout>
        {children}
    </AppLayout>;
}
