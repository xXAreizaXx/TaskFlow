// ReactJS
import { ReactElement } from "react";

// Utils
import { joinClassNames } from "@utils/functions";

function Skeleton({ children, className }: { children: ReactElement; className?: string }) {
    return <div className={joinClassNames("h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4", className as string)}>{children}</div>;   
}

export function SlideSkeleton() {
    return (
        <section className="flex flex-col gap-4">
            <Skeleton className="w-full rounded-lg">  
                <div className="h-3 w-full rounded-lg bg-default-300"></div>
            </Skeleton>

            <Skeleton className="w-full rounded-lg">  
                <div className="h-3 w-full rounded-lg bg-default-300"></div>
            </Skeleton>

            <Skeleton className="w-full rounded-lg">  
                <div className="h-3 w-full rounded-lg bg-default-300"></div>
            </Skeleton>
        </section>
    );
}

export function ConnectionsSkeleton() {
    return (
        <section className="flex flex-col gap-8 overflow-y-auto h-full">
            <div className="flex flex-col gap-3">
                <Skeleton className="w-1/4 rounded-lg">  
                    <div className="h-6 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                </section>
            </div>

            <div className="flex flex-col gap-3">
                <Skeleton className="w-1/4 rounded-lg">  
                    <div className="h-6 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                </section>
            </div>
        </section>
    );
}

export function ShipmentsSkeleton() {
    return (
        <section className="flex flex-col w-full gap-4 h-full">
            <header className="flex items-center justify-between w-full">
                <Skeleton className="w-1/4 rounded-lg">  
                    <div className="h-6 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-1/6 rounded-lg">  
                    <div className="h-6 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-full overflow-y-auto">
                <aside className="flex flex-col gap-6 bg-gray-50 border border-gray-200 rounded-md p-4 col-span-1 md:col-span-1">
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-10 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-10 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-10 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                </aside>

                <aside className="flex flex-col gap-6 bg-gray-50 border border-gray-200 rounded-md p-4 col-span-1 md:col-span-3 h-full">
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">  
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                </aside>
            </section>
        </section>
    );
}

export function ViewShipmentSkeleton() {
    return (
        <main className="flex flex-col w-full gap-4 h-full">
            <header className="flex items-center justify-between w-full flex-wrap gap-4">
                <div className="flex items-center gap-4">
                    <Skeleton className="rounded-lg">
                        <div className="h-8 w-8 rounded-full bg-default-300"></div>
                    </Skeleton>
                    <div className="flex flex-col">
                        <Skeleton className="w-1/2 rounded-lg">
                            <div className="h-6 w-full rounded-lg bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="w-1/4 rounded-lg">
                            <div className="h-4 w-full rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </div>

                <Skeleton className="w-1/4 rounded-lg">
                    <div className="h-8 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto md:h-full overflow-y-auto">
                <aside className="flex flex-col gap-12 bg-gray-50 border border-gray-200 rounded-md p-4 col-span-1 lg:col-span-2">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex flex-col gap-4">
                            <Skeleton className="w-1/4 rounded-lg">
                                <div className="h-6 w-full rounded-lg bg-default-300"></div>
                            </Skeleton>
                            <div className="grid grid-cols-2 gap-4">
                                {Array(8).fill(null).map((_, index) => (
                                    <Skeleton key={index} className="w-full rounded-lg">
                                        <div className="h-8 w-full rounded-lg bg-default-300"></div>
                                    </Skeleton>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-32 w-full rounded-lg bg-default-300"></div>
                        </Skeleton>
                        <Skeleton className="w-full rounded-lg">
                            <div className="h-32 w-full rounded-lg bg-default-300"></div>
                        </Skeleton>
                    </div>
                </aside>

                <aside className="flex flex-col gap-6 bg-gray-50 border border-gray-200 rounded-md p-4 col-span-1 lg:col-span-1 h-full">
                    <Skeleton className="w-full rounded-lg">
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">
                        <div className="h-20 w-full rounded-lg bg-default-300"></div>
                    </Skeleton>
                </aside>
            </section>
        </main>
    );
}
