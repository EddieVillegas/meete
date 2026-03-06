import clsx from "clsx"
import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export default function FormInput({
  children,
  className,
  ...props
}: Props ) {
  return (
    <input 
        {...props}
        className={clsx("border border-slate-200 w-full p-2", className)}
    />
  )
}
