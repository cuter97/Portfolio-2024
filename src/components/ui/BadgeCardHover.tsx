import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { CalendarDays } from "lucide-react"

interface Props {
    tecnology: string;
}

export const BadgeCardHover = ({ tecnology }: Props) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Badge variant="linkTwo">{tecnology}</Badge>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework - created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 text-muted" />{" "}
                            <span className="text-xs text-muted">
                                Joined December 2021
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}