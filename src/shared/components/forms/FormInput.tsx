import clsx from "clsx"
import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export const FormInput = ({
  children,
  className,
  ...props
}: Props ) =>
  <input 
      {...props}
      className={clsx("border border-slate-200 w-full p-2", className)}
  />
