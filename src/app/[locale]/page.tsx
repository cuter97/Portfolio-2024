import { HeaderContent } from "@/components/header/HeaderContent";
import { MainContent } from "@/components/main/MainContent";
import { Animation } from "@/components/ui/Animation";
import { ButtonMode } from "@/components/ui/Button-mode";
import { ButtonLen } from "@/components/ui/ButtonLen";
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
            <main className="grid 2xl:grid-cols-6 gap-16 xl:gap-24 pt-16 mx-auto max-w-7xl px-4 xl:px-6 2xl:px-0">
                <div className="hidden 2xl:flex space-x-6 absolute top-0 right-0 p-8">
                    <ButtonMode />
                    <ButtonLen />
                </div>
                <div id='home' className="relative col-span-1 2xl:col-span-2 scroll-mt-32">
                    <HeaderContent className="sticky top-20 flex flex-col items-center 2xl:items-start" />
                </div>
                <MainContent locale={locale} className="flex flex-col 2xl:col-span-4" />
            </main>
            <Footer />
            <Toaster />
        </>
    )
}