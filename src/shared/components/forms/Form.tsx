import clsx from "clsx";
import { FormHTMLAttributes, PropsWithChildren } from "react";

type Props = FormHTMLAttributes<HTMLFormElement>

export const Form = ({
    className,
    children,
    ...props
}: Props
) =>
    <form
        {...props}
        className={clsx("mt-10 space-y-3", className)}
    >
        {children}
    </form>