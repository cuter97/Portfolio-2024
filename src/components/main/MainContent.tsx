import JsonData from "@/lib/jsonData";
import { EducationContainer } from "./education/EducationContainer";
import { ExperienceContainer } from "./experience/ExperienceContainer";
import { ProjectsContainer } from "./projects/ProjectsContainer";
import { SkillsContainer } from "./skills/SkillsContainer";

interface Props {
    className: string;
}

export const MainContent = async({ className }: Props) => {
    const dataGit = await JsonData('Projects.cards.githublink');
    const dataWeb = await JsonData('Projects.cards.weblink');
    const dataSkills = await JsonData('Technologies.skills');
    const dataExp = await JsonData('Experience.cards');
    
    return (
        <div className={className}>
            <ExperienceContainer exp={dataExp}/>
            <ProjectsContainer gitLinks={dataGit} webLinks={dataWeb}/>
            <EducationContainer />
            <SkillsContainer skills={dataSkills}/>
        </div>
    );
}
