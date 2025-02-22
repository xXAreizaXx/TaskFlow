interface ISlideAction {
    module: TModule;
    open: boolean;
    params: IParams;
    setModule: React.Dispatch<React.SetStateAction<TModule>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setParams: React.Dispatch<React.SetStateAction<IParams>>;
    slideComponent: React.ReactNode | null;
}

type IParams = {
    description?: string;
    extra?: number | string;
    id?: number | string;
    isDisabled?: boolean;
    title?: string;
};

type TModule = ""
