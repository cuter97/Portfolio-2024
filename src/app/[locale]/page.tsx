import { HeaderContent } from "@/components/header/HeaderContent";
import { MainContent } from "@/components/main/MainContent";
import { Animation } from "@/components/ui/Animation";
import { Footer } from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useLocale } from "next-intl";

export default function Home() {
    const locale = useLocale()
    return (
        <>
            <Animation />
            <main className="grid 2xl:grid-cols-6 gap-16 xl:gap-24 pt-10 mx-auto max-w-7xl px-4 xl:px-6 2xl:px-0">
                <div id='home' className="relative col-span-1 2xl:col-span-2 scroll-mt-32">
                    <HeaderContent className="sticky top-28 flex flex-col items-center 2xl:items-start" />
                </div>
                <MainContent locale={locale} className="flex flex-col 2xl:col-span-4" />
            </main>
            <Footer />
            <Toaster />
        </>
    )
}