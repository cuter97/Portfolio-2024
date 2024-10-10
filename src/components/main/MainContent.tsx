
import JsonData from "@/lib/jsonData";
import { EducationContainer } from "./education/EducationContainer";
import { ExperienceContainer } from "./experience/ExperienceContainer";
import { ProjectsContainer } from "./projects/ProjectsContainer";
import { SkillsContainer } from "./skills/SkillsContainer";

interface Props {
    className: string;
    locale: string;
}

export const MainContent = async ({ className, locale }: Props) => {
    const [dataExp, uni, cert] = await Promise.all([
        JsonData(locale, 'Experience.cards'),
        JsonData(locale, 'Education.university'),
        JsonData(locale, 'Education.certification'),
    ]);

    return (
        <div className={className}>
            <ExperienceContainer exp={dataExp} />
            <ProjectsContainer locale={locale}/>
            <SkillsContainer />
            <EducationContainer certification={cert} university={uni} />
        </div>
    );
}
