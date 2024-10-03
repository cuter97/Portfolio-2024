import { useTranslations } from "next-intl";
import { CardExperience } from "./CardExperience";

interface Props {
    exp: string[];
}

export const ExperienceContainer = ({ exp }: Props) => {
    const t = useTranslations('Experience');
    return (
        <>
            <h3 id="experience" className="md:text-3xl text-2xl mb-6 scroll-mt-20">{t('h3')}</h3>
            <ul className="mb-16">
                {exp.map((key) => (
                    <CardExperience
                        key={key}
                        title={t(`cards.${key}.title`)}
                        company={t(`cards.${key}.company`)}
                        linkCompany={t(`cards.${key}.linkCompany`)}
                        date={t(`cards.${key}.date`)}
                        site={t(`cards.${key}.site`)}
                        summary={t(`cards.${key}.summary`)}
                        responsibilities={t(`cards.${key}.responsibilities`)}
                        achievements={t(`cards.${key}.achievements`)}
                    />
                ))}
            </ul>
        </>
    )
}
