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
        <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
                <div className="flex flex-col">
                    <div className="flex items-center">
                        {type === 'certification' ? (
                            <Award className="w-6 h-6 mr-2 md:w-7 md:h-7" />
                        ) : (
                            <GraduationCap className="w-6 h-6 mr-2 md:w-7 md:h-7" />
                        )}
                        <ButtonType
                            type="link-card"
                            variant="linkcolorless"
                            name={establishment}
                            link={link}
                            tooltip={tooltip}
                        />
                    </div>
                </div>
                <p className="ml-6 md:ml-9 mt-2 md:mt-0 text-muted-foreground text-sm md:text-md">{carrer}</p>
            </div>
            <span className="text-muted-foreground text-sm md:text-md mt-2 md:mt-0">{time}</span>
        </div>
    )
}