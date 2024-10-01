import { BadgeCardHover } from "@/components/ui/BadgeCardHover"
import { ButtonType } from "@/components/ui/Button-type";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowUpRight, GitPullRequestIcon } from "lucide-react"
import { useTranslations } from "next-intl";
import { CardSheet } from "./CardSheet";

interface Props {
    data: string;
}

export const CardProject = ({ data }: Props) => {
    const t = useTranslations(`Projects.cards.${data}`);
    const card = useTranslations('Projects.cardProject');

    const contentList = t('content').split('::').map(item => item.trim());
    const badgetList = t('badgets').split('::').map(item => item.trim());

    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    {t('links.web') === '' ? t('title') :
                        <ButtonType
                            tooltip={card('tooltiplink')}
                            variant="linkcolorless"
                            name={t('title')}
                            type="link-card"
                            link={t('links.web')}
                            Icon={<ArrowUpRight className="h-4 w-4 ml-1 text-orange-600" />}
                        />}
                    {t('links.git') !== '' &&
                        <ButtonType
                            name={card('tooltipgit')}
                            type="link"
                            link={t('links.git')}
                            Icon={<GitPullRequestIcon className="w-4 h-4" />}
                        />}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-2">{t('summary')}</p>
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
                <CardSheet i18nKey={data}/>
            </CardFooter>
        </Card>
    )
}
