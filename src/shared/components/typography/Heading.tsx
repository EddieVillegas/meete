type Props = {
    children?: Readonly<React.ReactNode>
}

export default function Heading({
    children
}: Props
){
  return (
    <>
        <h1 className="text-black uppercase text-4xl">
            {children}
        </h1>
    </>
  )
}
