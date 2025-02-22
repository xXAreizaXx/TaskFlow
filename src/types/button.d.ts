type TBtnSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    icon?: TablerIcon;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    outline?: boolean;
    pill?: boolean;
    size?: TBtnSize;
}