import { BadgeCardHover } from "@/components/ui/BadgeCardHover"
import { Button } from "@/components/ui/button"
import { ButtonType } from "@/components/ui/Button-type";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowUpRight, GitPullRequestIcon } from "lucide-react"
import { useTranslations } from "next-intl";
import { CardSheet } from "./CardSheet";

interface Props {
    type: 'gitlink' | 'weblink';
    title: string;
    link: string;
    summary: string;
    content: string;
    badgets: string;
}

export const CardProject = ({ type, title, link, summary, content, badgets }: Props) => {
    const t = useTranslations('Projects.cardProject');

    const contentList = content.split('::').map(item => item.trim());
    const badgetList = badgets.split('::').map(item => item.trim());

    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    {type !== 'weblink' ? title :
                        <ButtonType
                            tooltip={t('tooltiplink')}
                            variant="linkcolor"
                            name={title}
                            type="link-card"
                            link={link}
                            Icon={<ArrowUpRight className="h-4 w-4 ml-1 text-orange-600" />}
                        />}
                    {type === 'gitlink' &&
                        <ButtonType
                            name={t('tooltipgit')}
                            type="link"
                            link={link}
                            Icon={<GitPullRequestIcon className="w-4 h-4" />}
                        />}

                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-2">{summary}</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                    {contentList.map((cont, index) => (
                        <li key={index}>{cont}</li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <div className="flex space-x-2">
                    {badgetList.map((badget, index) => (
                        <BadgeCardHover type="badge" key={index} tecnology={badget} />
                    ))}
                </div>
                <CardSheet />
            </CardFooter>
        </Card>
    )
}
