import { PropsWithChildren } from "react";

export default function Form({
    children
}: PropsWithChildren
) {
  return (
    <form
        className="mt-10 space-y-3"
    >
        {children}
    </form>
  )
}
