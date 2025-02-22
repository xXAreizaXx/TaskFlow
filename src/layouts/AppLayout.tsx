"use client";

// ReactJS
import { Fragment, useEffect, useState } from "react";

// HeadlessUI
import { Dialog, Transition } from "@headlessui/react";

// Contexts
import { useSlideAction } from "@contexts/SlideActionContext";

// Hooks
import useLocalStorage from "@hooks/useLocalStorage";

// Components
import NavHeader from "@components/NavHeader";
import SlideAction from "@components/SlideAction";
import SliderBar from "@components/SliderBar";

// Icons
import { IconSquareRoundedX } from "@tabler/icons-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    // Contexts
    const { open: slideOpen, setOpen: setSlideOpen, slideComponent } = useSlideAction();

    // Local state
    const [isClient, setIsClient] = useState(false);
    const [initialExpanded, setInitialExpanded] = useState(true);
 
    // Local Storage
    const [expanded, setExpanded] = useLocalStorage("expanded", initialExpanded);
 
    // States
    const [open, setOpen] = useState(false);
 
    // Functions
    const handleResize = () => {
        if (typeof window !== "undefined") {
            setExpanded(window.innerWidth > 1024 ? expanded : false);
        }
    };
 
    // Effects
    useEffect(() => {
        setIsClient(true);
        setInitialExpanded(window.innerWidth > 1024);
    }, []);
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            handleResize();
        }
 
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);
 
    if (!isClient) return;

    return (
        <main className="flex h-auto w-full min-h-screen lg:h-screen lg:overflow-y-hidden bg-layout bg-opacity-30">
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-60 top-0 flex w-16 justify-center pt-4">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setOpen(false)}>
                                            <IconSquareRoundedX color="white" size={25} />
                                        </button>
                                    </div>
                                </Transition.Child>
                                
                                <SliderBar expanded={expanded} setExpanded={setExpanded} />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <Transition.Root show={slideOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setSlideOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-[400ms]"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-[400ms]"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-[400ms]"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-[400ms]"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">                                        
                                        <SlideAction>
                                            {slideComponent}
                                        </SlideAction>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            
            <aside className="hidden sm:block sm:z-50">
                <SliderBar expanded={expanded} setExpanded={setExpanded} />
            </aside>

            <aside className="flex flex-1 flex-col">
                <NavHeader setOpen={setOpen} setExpanded={setExpanded} />

                <section className="flex flex-col w-full h-[calc(100dvh-4.5rem)] pt-2 p-6 gap-6">
                    {children}
                </section>
            </aside>
        </main>
    );
}