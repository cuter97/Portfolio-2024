import { ButtonType } from "@/components/ui/Button-type"
import { Award, GraduationCap } from "lucide-react"

interface Props {
    type: 'certification' | 'university';
    link: string;
    establishment: string;
    carrer: string;
    time: string;
    tooltip?: string;
}

export const EducationLink = ({ type, link, establishment, carrer, time, tooltip }: Props) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <div className="flex items-center">
                    {type === 'certification' ?
                        <Award className="w-7 h-7 mr-2" />
                        :
                        <GraduationCap className="w-7 h-7 mr-2" />
                    }
                    <ButtonType type="link-card" variant="linkcolorless" name={establishment} link={link} tooltip={tooltip}/>
                </div>
                <p className="ml-9 text-muted-foreground text-md">{carrer}</p>
            </div>
            <span className="text-muted-foreground text-md">{time}</span>
        </div>
    )
}