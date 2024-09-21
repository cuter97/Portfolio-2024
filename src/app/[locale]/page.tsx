import { HeaderContent } from "@/components/header/HeaderContent";
import { MainContent } from "@/components/main/MainContent";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {

    return (
        <main className="grid md:grid-cols-6 gap-24 py-16 md:px-0 px-4">
            <div className="md:col-span-2 col-span-1 flex flex-col relative">
                <HeaderContent className="sticky top-16" />
            </div>
            <MainContent className="md:col-span-4 flex flex-col" />
            <Toaster />
        </main>
    )
}
