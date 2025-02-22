"use client";

// ReactJS
import { ThemeModeScript } from "flowbite-react";

// Providers
import { LanguageProvider } from "@contexts/LanguageContext";
import { SlideActionProvider } from "@contexts/SlideActionContext";
import AuthProvider from "./AuthProvider";
import { ReactQueryClientProvider } from "./ReactQueryProvider";

// External Dependencies
import { Toaster } from "sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <SlideActionProvider>
                <LanguageProvider>
                    <ReactQueryClientProvider>
                        <ThemeModeScript />
                        <Toaster richColors closeButton position="top-center" />
                        {children}
                    </ReactQueryClientProvider>
                </LanguageProvider>
            </SlideActionProvider>
        </AuthProvider>
    );
}
