// NextJS
import Image from "next/image";

// Components

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="grid place-items-center h-screen grid-cols-1 bg-white md:grid-cols-2 p-3">
            <aside className="flex flex-col w-full h-full bg-white justify-center gap-8 p-16">
                {children}
            </aside>
            
            <aside className="flex-col w-full h-full bg-secondary gap-8 p-16 md:flex hidden rounded-lg items-center justify-center">
                <Image
                    alt="Logo"
                    height={150}
                    src="/logo.svg"
                    width={300}
                />
            </aside>
        </section>
    );
}