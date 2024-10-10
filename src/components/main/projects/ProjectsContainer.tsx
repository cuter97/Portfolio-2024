import { useTranslations } from "next-intl";
import { CardProject } from "./CardProject"
import JsonData from "@/lib/jsonData";

export const ProjectsContainer = async ({ locale }: { locale: string }) => {
    const t = useTranslations('Projects');
    const dataCards = await JsonData(locale, 'Projects.cards')
    return (
        <>
            <h3 id="projects" className="md:text-3xl text-2xl mb-6 scroll-mt-20">{t('h3')}</h3>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-16">
                {dataCards.map((key) => (
                    <CardProject
                        key={key}
                        data={key}
                    />
                ))}
            </div>
        </>
    )
}
