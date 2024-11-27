import { Animation } from "@/components/ui/Animation";
import { DynamicBreadcrumb } from "@/components/ui/DinamicBread";
import { useTranslations } from "next-intl";
import ContentBlogPosts from "@/components/blog/ContentBlogPosts";

export default function BlogIndex({ params: { locale } }: { params: { locale: string } }) {
    const t = useTranslations('Blog');

    return (
        <>
            <Animation />
            <main className="mx-auto max-w-7xl px-4 xl:px-6 2xl:px-0">
                <DynamicBreadcrumb
                    items={[
                        { label: 'Home', href: `/${locale}` },
                        { label: 'Blog' },
                    ]}
                />
                <h1 className="text-xl md:text-2xl font-bold mt-2 mb-5">{t('title')}</h1>
                <div className="grid 2xl:grid-cols-4 gap-16 xl:gap-24">
                    <ContentBlogPosts locale={locale} />
                </div>
            </main>
        </>
    );
}
