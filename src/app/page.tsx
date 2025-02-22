"use client";

// NextJS
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

// Components
import Loader from "@components/Loader";

export default function RootPage() {
    // Navigation
    const router = useRouter();

    // Session
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/login");
        },
    });

    if (status === "loading") return <Loader />;

    redirect("/tasks");
}
