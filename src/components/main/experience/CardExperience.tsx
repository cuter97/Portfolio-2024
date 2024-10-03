'use client'

import { useEffect, useRef, useState } from "react"
import { TimeLine } from "./TimeLine"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { ButtonType } from "@/components/ui/Button-type"
import { useTranslations } from "next-intl"

interface CardExperienceProps {
    title: string;
    company: string;
    linkCompany: string;
    date: string;
    site: string;
    summary: string;
    responsibilities: string;
    achievements: string;
}

export const CardExperience = ({ title, company, linkCompany, date, site, summary, responsibilities, achievements }: CardExperienceProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [maxHeight, setMaxHeight] = useState("3em")
    const contentRef = useRef<HTMLDivElement>(null)
    const t = useTranslations('Experience.cardExperience');

    useEffect(() => {
        if (contentRef.current)
            setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "3em")

    }, [isExpanded])

    const responsibilitiesList = responsibilities.split('::').map(item => item.trim());
    const achievementsList = achievements.split('::').map(item => item.trim());
    return (
        <TimeLine date={date}>
            <div className="w-auto rounded-md bg-background md:pl-6 pb-6">
                <h3 className="text-lg font-medium">{title}
                    <span className="mx-1">@</span>
                    <ButtonType
                        tooltip={`Ver ${company}`}
                        name={company}
                        type="link-card"
                        link={linkCompany}
                        Icon={<ArrowUpRight className="h-4 w-4 ml-1" />}
                    />
                </h3>
                <p className="text-sm text-muted-foreground">{site}</p>

                <div className="mt-2">
                    <h3 className="text-sm font-normal mb-1">{t('summary')}:</h3>
                    <p className="text-sm text-muted-foreground">{summary}</p>
                </div>

                <div className="mt-2 relative mb-2">
                    <h3 className="text-sm font-normal mb-1">{t('responsibilities')}:</h3>

                    <div
                        ref={contentRef}
                        className={`relative overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                        style={{ maxHeight }}
                    >
                        <div>

                            <ul className="list-disc list-inside text-sm pl-4 space-y-1 marker:text-orange-600 text-muted-foreground">
                                {responsibilitiesList.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>

                            <h3 className="text-sm font-normal mb-1 mt-2">{t('achievements')}:</h3>

                            <ul className="list-disc list-inside text-sm pl-4 space-y-1 marker:text-orange-600 text-muted-foreground">
                                {achievementsList.map((arch, index) => (
                                    <li key={index}>{arch}</li>
                                ))}
                            </ul>
                        </div>
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
                            {t('btnLess')}
                        </>
                    ) : (
                        <>
                            <ChevronDown className="h-4 w-4 mr-2" />
                            {t('btnMore')}
                        </>
                    )}
                </Button>
            </div>
        </TimeLine>
    )
}
