import clsx from "clsx"

type Level = 1 | 2 | 3 | 4 | 5 | 6

type Props = {
    level?: Level
    className?: string,
}

export default function Heading({
    level = 1,
    children,
    className,
}: React.PropsWithChildren<Props>
) {

    const Tag: React.ElementType = `h${level}`

    const sizeMap: Record<Level, string> = {
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-2xl',
        4: 'text-xl',
        5: 'text-lg',
        6: 'text-sm',
    }

    return (
        <Tag className={clsx("font-black uppercase text-4xl", sizeMap[level], className)}>
            {children}
        </Tag>
    )
}
