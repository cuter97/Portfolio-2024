import { Animation } from "@/components/ui/Animation";
import { useTranslations } from "next-intl";

export default function BlogPage() {
    const t = useTranslations('Experience.cardExperience')
    return (
        <div>
            <Animation />
            <h1>{t('btnMore')}</h1>
        </div>
    );
}