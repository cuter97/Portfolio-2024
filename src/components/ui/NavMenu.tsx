import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { BrainCircuit as Icons } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

export function NavMenu() {
    const t = useTranslations('Nav');
    const locale = useLocale();

    const menuItems = [
        { href: `/${locale}/#experience`, label: t("experience.title"), text: t("experience.subtitle") },
        { href: `/${locale}/#projects`, label: t("projects.title"), text: t("projects.subtitle") },
        { href: `/${locale}/#skills`, label: t("skills.title"), text: t("skills.subtitle") },
        { href: `/${locale}/#education`, label: t("education.title"), text: t("education.subtitle") },
    ];

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("btnSections")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 w-[500px] grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-orange-700 p-6 no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground"
                                        href={`/${locale}`}
                                    >
                                        <Icons className="h-auto w-auto" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            {t("home.title")}
                                        </div>
                                        <p className="text-sm leading-tight text-white">
                                            {t("home.subtitle")}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            href={item.href}
                                        >
                                            <div className="text-sm font-medium leading-none">{item.label}</div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.text}</p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href={`/${locale}/blog`} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}