import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import { ButtonType } from "@/components/ui/Button-type"
import { BadgeCardHover } from "@/components/ui/BadgeCardHover"
import { CardSheetInfo } from "./CardSheetInfo"

import { Link, Folder } from "lucide-react"
import { useTranslations } from "next-intl"

interface Props {
    i18nKey: string;
}

export const CardSheet = ({ i18nKey }: Props) => {
    const t = useTranslations(`Projects.cards.${i18nKey}`);
    const card = useTranslations('Projects.cardProject');
    const techList = t('info.technologies').split('::').map(item => item.trim());
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="secondary" size="sm" className="text-primary ml-auto">{card('btnInfo')}</Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="flex items-center text-2xl">
                        <Folder className="mr-2 h-6 w-6" />
                        {t('title')}
                    </SheetTitle>
                    <SheetDescription className="text-start">{t('info.description')}</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 text-md">
                    {(t('info.challengesAndSolution') !== '') && <CardSheetInfo title={card('challenge')} description={t('info.challengesAndSolution')} />}
                    {(t('info.features') !== '') && <CardSheetInfo title={card('features')} description={t('info.features')} />}
                    {(t('info.futureImprovements') !== '') && <CardSheetInfo title={card('futureImprovements')} description={t('info.futureImprovements')} />}
                </div>
                <div className="mb-4">
                    {t('links.git') !== '' &&
                        <div className="flex items-center">
                            <p className="text-pretty mr-2">GitHub:</p>
                            <ButtonType
                                tooltip={card('tooltipgit')}
                                name={card('tooltipgit')}
                                type="link-card"
                                link={t('links.git')}
                            />
                            <Link className="h-4 w-4 ml-1" />
                        </div>}
                    {(t('links.web') !== '') &&
                        <div className="flex items-center">
                            <p className="text-pretty mr-2">Web:</p>
                            <ButtonType
                                tooltip={card('tooltiplink')}
                                name={card('tooltiplink')}
                                type="link-card"
                                link={t('links.web')}
                            />
                            <Link className="h-4 w-4 ml-1" />
                        </div>}
                </div>
                <div className="space-y-4 mb-6">
                    <p className="text-pretty">{card('technologies')}</p>
                    <div className='grid grid-cols-2 xl:grid-cols-6 gap-4'>
                        {techList.map((skill) => (
                            <BadgeCardHover key={skill} tecnology={skill} type="skill" />
                        ))}
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="button">{card('btnBack')}</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
