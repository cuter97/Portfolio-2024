import { ExperienceContainer } from "./experience/ExperienceContainer";
import { ProjectsContainer } from "./projects/ProjectsContainer";
import { SkillsContainer } from "./skills/SkillsContainer";

interface Props {
    className: string;
}

export const MainContent = ({ className }: Props) => {
    return (
        <div className={className}>
            <ExperienceContainer />
            <ProjectsContainer />
            <SkillsContainer />
        </div>
    );
}
