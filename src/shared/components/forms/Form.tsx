import clsx from "clsx";
import { FormHTMLAttributes, PropsWithChildren } from "react";

type Props = FormHTMLAttributes<HTMLFormElement>

export const Form = ({
    className,
    ...props
}: Props
) =>
    <form
        {...props}
        className={clsx("mt-10 space-y-3", className)}
    >
        {props.children}
    </form>