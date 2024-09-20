'use client'

import { useEffect, useRef, useState } from "react"
import { TimeLine } from "./TimeLine"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { ButtonType } from "@/components/ui/Button-type"

export const CardExperience = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [maxHeight, setMaxHeight] = useState("3em")
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (contentRef.current)
            setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "3em")

    }, [isExpanded])
    return (
        <TimeLine date="2022 - Present">
            <div className="w-auto rounded-md bg-background pl-6 pb-6">
                <h3 className="text-lg font-medium">Junior Web Developer
                    @<ButtonType tooltip="Ver Tech Startup" name="Tech Startup" type="link-card" link="https://google.com" Icon={<ArrowUpRight className="h-4 w-4 ml-1" />} />
                </h3>
                <p className="text-sm text-muted-foreground">Auckland, New Zealand - On site</p>

                <div className="mt-2">
                    <h3 className="text-sm font-normal mb-1">Summary:</h3>
                    <p className="text-sm text-muted-foreground">
                        Developing and maintaining web applications using JavaScript, HTML, and CSS. Collaborating with the team to implement new features and fix bugs.
                    </p>
                </div>

                <div className="mt-2 relative">
                    <h3 className="text-sm font-normal mb-1">Responsibilities:</h3>

                    <div
                        ref={contentRef}
                        className={`relative overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                        style={{ maxHeight }}
                    >
                        <ul className="list-disc list-inside text-sm pl-4 space-y-1 marker:text-orange-600 text-muted-foreground">
                            <li>Collaborated with senior developers to design and implement web applications using modern JavaScript frameworks</li>
                            <li>Wrote clean, maintainable, and efficient code</li>
                            <li>Troubleshot and debugged issues in existing applications</li>
                            <li>Participated in code reviews and team meetings</li>
                        </ul>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t dark:from-[#121212] from-[#ffffff] transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
                </div>

                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 w-auto text-primary"
                >
                    {isExpanded ? (
                        <>
                            <ChevronUp className="h-4 w-4 mr-2" />
                            Show less
                        </>
                    ) : (
                        <>
                            <ChevronDown className="h-4 w-4 mr-2" />
                            Show more
                        </>
                    )}
                </Button>
            </div>
        </TimeLine>
    )
}
