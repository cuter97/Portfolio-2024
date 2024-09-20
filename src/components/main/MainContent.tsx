'use client'
import { useTranslations } from "next-intl";
import { CardExperience } from "./experience/CardExperience";

interface Props {
    className: string;
}
export const MainContent = ({ className }: Props) => {
    const t = useTranslations('Experience');


    return (
        <div className={className}>
            <h3 className="text-3xl mb-6">Experience</h3>
            <CardExperience />
            <CardExperience />
        </div>
    )
}
