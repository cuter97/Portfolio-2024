'use client'

import { useTranslations } from "next-intl";
import { EducationLink } from "./EducationLink"
import { ButtonType } from "@/components/ui/Button-type";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { EducationCard } from "./EducationCard";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
    university: string[];
    certification: string[];
}

export const EducationContainer = ({ university, certification }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [maxHeight, setMaxHeight] = useState("30em")
    const contentRef = useRef<HTMLDivElement>(null)
    const t = useTranslations('Education');
    const b = useTranslations('Experience.cardExperience');

    useEffect(() => {
        if (contentRef.current)
            setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "30em")

    }, [isExpanded])

    return (
        <>
            <div className="mb-16 space-y-8">
                <h3 id="education" className="md:text-3xl text-2xl mb-6 scroll-mt-20">{t('h3')}</h3>
                {university.map((key) => (
                    <EducationLink
                        key={key}
                        establishment={t(`university.${key}.establishment`)}
                        carrer={t(`university.${key}.carrer`)}
                        time={t(`university.${key}.time`)}
                        link={t(`university.${key}.link`)}
                        type="university"
                        tooltip={t(`tooltipUniversity`)}
                    />
                ))}
                <h4 className="md:text-xl text-lg font-medium mb-2">{t('h4')}</h4>
                <div className="relative flex justify-center items-center">
                    <div
                        className="overflow-hidden transition-[max-height] duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 gap-3"
                        ref={contentRef}
                        style={{ maxHeight }}
                    >
                        {certification.map((key) => (
                            <EducationCard
                                key={key}
                                establishment={t(`certification.${key}.establishment`)}
                                carrer={t(`certification.${key}.carrer`)}
                                time={t(`certification.${key}.time`)}
                                link={t(`certification.${key}.link`)}
                                tooltip={t(`tooltipCourse`)}
                            />
                        ))}
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
                            {b('btnLess')}
                        </>
                    ) : (
                        <>
                            <ChevronDown className="h-4 w-4 mr-2" />
                            {b('btnMore')}
                        </>
                    )}
                </Button>

                <h5 className="text-md lg:text-lg">
                    {t('h5')} {' '}
                    <ButtonType
                        tooltip={t('tooltipDrive')}
                        type="link-card"
                        name="Google Drive"
                        link={t('driveLink')}
                        Icon={<ArrowUpRight className="h-4 w-4 ml-1" />}
                    />
                </h5>
            </div>
        </>
    )
}
