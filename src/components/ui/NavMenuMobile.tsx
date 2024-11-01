import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./sheet"
import { Button } from "./button"
import { BrainCircuit as Icons, Menu } from "lucide-react"

export const NavMenuMobile = () => {

    const t = useTranslations('Nav');
    const locale = useLocale();

    const menuItems = [
        { href: `/${locale}/#experience`, label: t("experience.title"), text: t("experience.subtitle") },
        { href: `/${locale}/#projects`, label: t("projects.title"), text: t("projects.subtitle") },
        { href: `/${locale}/#skills`, label: t("skills.title"), text: t("skills.subtitle") },
        { href: `/${locale}/#education`, label: t("education.title"), text: t("education.subtitle") },
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="secondary"
                    size="sm"
                    className="text-primary p-2 flex md:hidden"
                    aria-label="Open menu"
                >
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={"top"} className="overflow-y-auto px-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Menu mobile</SheetDescription>
                <ul className="grid gap-2 pt-4 lg:w-[400px] md:w-[500px] md:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                        <SheetClose asChild>
                            <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-orange-700 from-muted/50 to-muted py-6 px-3 no-underline outline-none focus:shadow-md"
                                href={`/${locale}`}
                            >
                                <Icons className="h-auto w-auto" />
                                <div className="mb-2 mt-4 text-lg font-medium">{t("home.title")}</div>
                                <p className="text-sm leading-tight text-muted">{t("home.subtitle")}</p>
                            </Link>
                        </SheetClose>
                    </li>
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <SheetClose asChild>
                                <Link
                                    className="block select-none space-y-1 rounded-md py-3 px-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    href={item.href}
                                >
                                    <div className="text-sm font-medium leading-none">{item.label}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.text}</p>
                                </Link>
                            </SheetClose>
                        </li>
                    ))}
                    <li className="row-span-5 col-span-2">
                        <SheetClose asChild>
                            <Link
                                className="block select-none space-y-1 rounded-md py-3 px-2 leading-none no-underline outline-none transition-colors hover:bg-card bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={`/${locale}/blog`}
                            >
                                <div className="text-sm font-medium leading-none">{t("blog.title")}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{t("blog.subtitle")}</p>
                            </Link>
                        </SheetClose>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    )
}
