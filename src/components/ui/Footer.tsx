import { useTranslations } from "next-intl"
import { Badge } from "./badge"

export const Footer = () => {
    const t = useTranslations('Footer')
    return (
        <footer className="h-12 bg-orange-600 w-auto flex items-center justify-evenly">
            <div className="flex">
                <h3 className="mr-2">{t('h3')}</h3>
                <Badge variant="default" className="h-6">{t('mail')}</Badge>
            </div>
            <p className="ml-2 text-sm font-bold">{t('copyright')}</p>
        </footer>
    )
}