import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Folder } from "lucide-react"
import { CardSheetInfo } from "./CardSheetInfo"

export const CardSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="secondary" size="sm" className="text-primary ml-auto">Info</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="flex items-center text-xl">
                        <Folder className="mr-2 h-6 w-6" />
                        Portfolio
                    </SheetTitle>
                    <SheetDescription>
                        Este proyecto es una plataforma personalizada para mostrar mi trabajo, habilidades y experiencia en el desarrollo web. Diseñado con un enfoque moderno y minimalista, el portafolio ofrece una experiencia de usuario intuitiva y visualmente atractiva.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 text-md">
                    <CardSheetInfo />
                    <CardSheetInfo />
                    <CardSheetInfo />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Volver</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
