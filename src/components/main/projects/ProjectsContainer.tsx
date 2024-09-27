import { useTranslations } from "next-intl";
import { CardProject } from "./CardProject"

interface Props {
    gitLinks: string[];
    webLinks: string[];
}

export const ProjectsContainer = ({ gitLinks, webLinks }: Props) => {
    const t = useTranslations('Projects');
    return (
        <>
            <h3 className="text-3xl mb-6">Projects</h3>

            <div className="grid grid-cols-4 gap-3 mb-16">
                {gitLinks.map((key) => (
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
                {webLinks.map((key) => (
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
            </div>
        </>
    )
}
