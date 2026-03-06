import clsx from "clsx"
import { LabelHTMLAttributes } from "react"

type Props = LabelHTMLAttributes<HTMLLabelElement>

export const FormLabel = ({
  children,
  className,
  ...props
}: Props ) =>
  <label 
    className={clsx("block", className)} {...props}>
      {children}
  </label>