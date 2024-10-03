interface TimelineProps {
    date: string
    children: React.ReactNode
}

export const TimeLine = ({ date, children }: TimelineProps) => {
    return (
        <li className="md:flex">
            <div className="w-24 flex-shrink-0 text-sm text-gray-500 relative">
                <div className="pt-2">
                    {date}
                </div>
                <div className="absolute top-[14px] right-[-3px] w-2 h-2 md:bg-gray-300 rounded-full"></div>
                <div className="absolute top-9 right-0 bottom-0 md:border bg-gray-200"></div>
            </div>

            {children}
        </li>
    )
}