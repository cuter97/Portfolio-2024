import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

interface Props {
    link: string;
    establishment: string;
    carrer: string;
    time: string;
    tooltip?: string;
}

export const EducationCard = ({ link, establishment, carrer, time, tooltip }: Props) => {
    return (
        <Card className="max-w-[350px] flex flex-col text-sm">
            <CardContent className="pt-5 px-8 space-y-3 flex-grow flex flex-col">
                <span className="text-orange-600">{time}</span>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button asChild variant={"linkcolorless"} className="h-auto text-sm whitespace-normal">
                                <Link href={link} target="_blank" rel="noopener noreferrer">
                                    {carrer}
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{tooltip}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardContent>
            <CardFooter className="pb-5">
                <ul>
                    <li className="list-disc list-inside marker:text-orange-600 text-muted-foreground">{establishment}</li>
                </ul>
            </CardFooter>
        </Card>
    )
}
