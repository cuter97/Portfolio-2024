import { ExperienceContainer } from "./experience/ExperienceContainer";
import { CardProject } from "./projects/CardProject";

interface Props {
    className: string;
}

export const MainContent = ({ className }: Props) => {
    return (
        <div className={className}>
            <ExperienceContainer />

            <h3 className="text-3xl mb-6">Projects</h3>

            <div className="grid grid-cols-4 gap-3">
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </div>

        </div>
    );
}
