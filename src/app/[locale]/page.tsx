import { HeaderContent } from "@/components/header/HeaderContent";
import { MainContent } from "@/components/main/MainContent";
import { Animation } from "@/components/ui/Animation";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { useLocale } from "next-intl";

export default function Home() {
    const locale = useLocale()
    return (
        <>
            <Animation />
            <Navbar />
            <main className="grid xl:grid-cols-6 gap-16 xl:gap-24 pt-16 mx-auto max-w-7xl px-4 xl:px-6 2xl:px-0">
                <div id='home' className="relative col-span-1 xl:col-span-2 scroll-mt-32">
                    <HeaderContent className="sticky top-20 flex flex-col items-center xl:items-start" />
                </div>
                <MainContent locale={locale} className="flex flex-col xl:col-span-4" />
            </main>
            <Footer />
            <Toaster />
        </>
    )
}