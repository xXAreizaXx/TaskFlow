"use client";

// NextUI
import { joinClassNames } from "@utils/functions";

export function TitleH1({ children, className = "" }: ITypography) {
    return <h1 className={joinClassNames("text-xl font-semibold", className)}>
        {children}
    </h1>;
}

export function TitleH2({ children, className = "" }: ITypography) {
    return <h2 className={joinClassNames("text-lg font-semibold", className)}>
        {children}
    </h2>;
}

export function TitleH3({ children, className = "" }: ITypography) {
    return <h3 className={joinClassNames("text-md font-medium", className)}>
        {children}
    </h3>;
}

export function TextParagraph({ children, className = "" }: ITypography) {
    return <p className={joinClassNames("text-sm font-regular", className)}>
        {children}
    </p>;
}

export function TextSpan({ children, className = "" }: ITypography) {
    return <span className={joinClassNames("text-sm font-regular", className)}>
        {children}
    </span>;
}