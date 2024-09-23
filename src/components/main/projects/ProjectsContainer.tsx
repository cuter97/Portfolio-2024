import { useTranslations } from "next-intl";
import { CardProject } from "./CardProject"

export const ProjectsContainer = () => {
    const t = useTranslations('Projects');
    const keys = ['cardOne', 'cardTwo'] as const;
    return (
        <>
            <h3 className="text-3xl mb-6">Projects</h3>

            <ol className="grid grid-cols-4 gap-3">
                {keys.map((key) => (
                    <CardProject
                        key={key}
                        type="gitlink"
                        title={t(`cards.githublink.${key}.title`)}
                        link={t(`cards.githublink.${key}.githubLink`)}
                        summary={t(`cards.githublink.${key}.summary`)}
                        content={t(`cards.githublink.${key}.content`)}
                        badgets={t(`cards.githublink.${key}.badgets`)}
                    />
                ))}
                {keys.map((key) => (
                    <CardProject
                        key={key}
                        type="weblink"
                        title={t(`cards.weblink.${key}.title`)}
                        link={t(`cards.weblink.${key}.websiteLink`)}
                        summary={t(`cards.weblink.${key}.summary`)}
                        content={t(`cards.weblink.${key}.content`)}
                        badgets={t(`cards.weblink.${key}.badgets`)}
                    />
                ))}
            </ol>
        </>
    )
}
