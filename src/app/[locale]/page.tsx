import { HeaderContent } from "@/components/header/HeaderContent";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {

    return (
        <main className="grid grid-cols-6 gap-24 py-16">

            <HeaderContent className="col-span-2 flex flex-col"/>

            <div className="col-span-4 flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus sunt vitae magnam hic facilis ipsum! Ullam vero hic explicabo, corporis, veritatis vel neque facilis cumque tenetur necessitatibus, eaque expedita!
            </div>
            
            <Toaster />
        </main>
    )
}
