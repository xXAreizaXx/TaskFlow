"use client";

// ReactJS
import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Hooks
import useLocalStorage from "@hooks/useLocalStorage";

// Constants
import { slideModules } from "@constants/slideModules";

const SlideActionContext = createContext<ISlideAction>({
    module: "",
    open: false,
    params: { description: "", id: 0, title: "" },
    setModule: () => {},
    setOpen: () => {},
    setParams: () => {},
    slideComponent: null
});

export const useSlideAction = () => useContext(SlideActionContext);

export const SlideActionProvider = ({ children }: { children: React.ReactNode }) => {
    // Local Storgage
    const [item, _] = useLocalStorage("params", JSON?.stringify({ description: "", id: 0, title: "" }));
    
    // State
    const [open, setOpen] = useState(false);
    
    const [module, setModule] = useState<TModule>("");
    
    const [params, setParams] = useState<IParams>(item as IParams);

    const [slideComponent, setSlideComponent] = useState<React.ReactNode | null>(null);

    // Effects
    useEffect(() => {
        if (!module) return;
        
        setSlideComponent(slideModules[module]);
    }, [module]);
    
    // Memo
    const value = useMemo(() => ({
        module,
        open,
        params,
        setModule,
        setOpen,
        setParams,
        slideComponent
    }), [open, module, params, slideComponent]);

    return (
        <SlideActionContext.Provider value={value}>
            {children}
        </SlideActionContext.Provider>
    );
};
