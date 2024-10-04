import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { BadgeCardSkill } from "./BadgeCardSkill";

import { technologies } from "@/config/technologies";
import { CalendarDays } from "lucide-react"

interface Props {
    type: 'skill' | 'badge'
    tecnology: keyof typeof technologies
}

export const BadgeCardHover = ({ tecnology, type }: Props) => {
    const t = useTranslations('Technologies.skills');

    const formattedTechnology = tecnology.trim().toLowerCase();
    const techConfig = technologies[formattedTechnology];

    if (!techConfig)
        return null;

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {type === 'badge' ?
                    <Badge variant="destructive">@{t(`${formattedTechnology}.name`)}</Badge>
                    :
                    <BadgeCardSkill tecnology={t(`${formattedTechnology}.name`)} Icon={techConfig.icon} color={techConfig.color} />
                }
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar className="w-12 h-12">
                        <techConfig.icon className='w-12 h-12' />
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{t(`${formattedTechnology}.@name`)}</h4>
                        <p className="text-sm">
                            {t(`${formattedTechnology}.description`)}
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 text-muted" />{" "}
                            <span className="text-xs text-muted">
                                {t(`${formattedTechnology}.joined`)}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}