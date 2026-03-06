import clsx from "clsx"
import { LabelHTMLAttributes } from "react"

type Props = LabelHTMLAttributes<HTMLLabelElement>

export default function FormLabel({
  children,
  className,
  ...props
}: Props ) {
  return (
    <label className={clsx("block", className)} {...props}>{children}</label>
  )
}
