import JsonData from "@/lib/jsonData";
import { EducationContainer } from "./education/EducationContainer";
import { ExperienceContainer } from "./experience/ExperienceContainer";
import { ProjectsContainer } from "./projects/ProjectsContainer";
import { SkillsContainer } from "./skills/SkillsContainer";

interface Props {
    className: string;
}

export const MainContent = async ({ className }: Props) => {
    const [dataSkills, dataExp, uni, cert] = await Promise.all([
        JsonData('Technologies.skills'),
        JsonData('Experience.cards'),
        JsonData('Education.university'),
        JsonData('Education.certification'),
    ]);

    return (
        <div className={className}>
            <ExperienceContainer exp={dataExp} />
            <ProjectsContainer />
            <SkillsContainer skills={dataSkills} />
            <EducationContainer certification={cert} university={uni} />
        </div>
    );
}
