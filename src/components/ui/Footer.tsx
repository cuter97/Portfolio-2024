import { useTranslations } from "next-intl"
import { Badge } from "./badge"

export const Footer = () => {
    const t = useTranslations('Footer')
    return (
        <footer className="h-auto bg-orange-700 w-full flex flex-col xl:flex-row items-center justify-evenly p-4 xl:h-12">
            <div className="flex items-center mb-2 xl:mb-0">
                <h3 className="mr-2 text-base xl:text-lg">{t('h3')}</h3>
                <Badge variant="default" className="h-6 text-sm">{t('mail')}</Badge>
            </div>
            <p className="text-sm xl:text-base">{t('copyright')}</p>
        </footer>

    )
}