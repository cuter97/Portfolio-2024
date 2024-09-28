import { useTranslations } from "next-intl";
import { EducationLink } from "./EducationLink"

interface Props {
    university: string[];
    certification: string[];
}

export const EducationContainer = ({ university, certification }: Props) => {
    const t = useTranslations('Education');
    return (
        <div className="mb-16 space-y-8">
            <h3 className="text-3xl mb-6">{t('h3')}</h3>
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
            <h4 className="text-xl font-medium mb-2">{t('h4')}</h4>
            {certification.map((key) => (
                <EducationLink
                    key={key}
                    establishment={t(`certification.${key}.establishment`)}
                    carrer={t(`certification.${key}.carrer`)}
                    time={t(`certification.${key}.time`)}
                    link={t(`certification.${key}.link`)}
                    type="certification"
                    tooltip={t(`tooltipCourse`)}
                />
            ))}
        </div>
    )
}
