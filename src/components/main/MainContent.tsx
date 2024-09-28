import JsonData from "@/lib/jsonData";
import { EducationContainer } from "./education/EducationContainer";
import { ExperienceContainer } from "./experience/ExperienceContainer";
import { ProjectsContainer } from "./projects/ProjectsContainer";
import { SkillsContainer } from "./skills/SkillsContainer";

interface Props {
    className: string;
}

export const MainContent = async ({ className }: Props) => {
    const [dataGit, dataWeb, dataSkills, dataExp, uni, cert] = await Promise.all([
        JsonData('Projects.cards.githublink'),
        JsonData('Projects.cards.weblink'),
        JsonData('Technologies.skills'),
        JsonData('Experience.cards'),
        JsonData('Education.university'),
        JsonData('Education.certification'),
    ]);

    return (
        <div className={className}>
            <ExperienceContainer exp={dataExp} />
            <ProjectsContainer gitLinks={dataGit} webLinks={dataWeb} />
            <SkillsContainer skills={dataSkills} />
            <EducationContainer certification={cert} university={uni} />
        </div>
    );
}
