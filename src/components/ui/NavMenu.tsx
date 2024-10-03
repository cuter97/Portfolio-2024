import { Menu } from "lucide-react"
import { Button } from "./button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./sheet"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

export const NavMenu = () => {

    const t = useTranslations();
    const locale = useLocale();

    const menuItems = [
        { href: `/${locale}/#home`, label: t("Header.home") },
        { href: `/${locale}/#experience`, label: t("Experience.h3") },
        { href: `/${locale}/#projects`, label: t("Projects.h3") },
        { href: `/${locale}/#skills`, label: t("Technologies.h3") },
        { href: `/${locale}/#education`, label: t("Education.h3") },
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="secondary"
                    size="sm"
                    className="text-primary p-2"
                    aria-label="Open menu"
                >
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={"top"} className="overflow-y-auto">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Menu for mobile</SheetDescription>
                <ul className="py-6">
                    {menuItems.map((item) => (
                        <li className="py-4 hover:text-orange-700" key={item.href}>
                            <SheetClose asChild>
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </SheetClose>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    )
}
