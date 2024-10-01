import { useTranslations } from "next-intl";
import { CardProject } from "./CardProject"
import JsonData from "@/lib/jsonData";

export const ProjectsContainer = async () => {
    const t = useTranslations('Projects');
    const dataCards = await JsonData('Projects.cards')
    return (
        <>
            <h3 className="text-3xl mb-6">{t('h3')}</h3>

            <div className="grid grid-cols-4 gap-3 mb-16">
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
