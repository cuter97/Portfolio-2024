'use client'

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"

import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Command, CommandGroup, CommandItem, CommandList } from "./command"
import { Button, ButtonProps } from "./button"

import { Sun } from "lucide-react"
import es from '../../../public/images/es.png'
import en from '../../../public/images/en.png'

const modes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
]

interface ButtonModeProps {
    type: "language" | "darkmode";
    variant?: ButtonProps["variant"];
}

export const ButtonMode = ({ type, variant = 'outline' }: ButtonModeProps) => {
    const { setTheme } = useTheme()
    const locale = useLocale();
    const router = useRouter();
    const [, startTransition] = useTransition();
    const t = useTranslations('Header.btnType');

    const [open, setOpen] = useState(false);

    const languages = [
        { value: "es", label: t("labels.es") },
        { value: "en", label: t("labels.en") },
    ]

    const options = type === "darkmode" ? modes : languages;

    const handleSelect = (value: string) => {
        if (type === "darkmode") {
            setTheme(value);
        } else if (type === 'language') {
            startTransition(() => {
                router.replace(`/${value}`);
            });
        }
        setOpen(false);
    }

    return (
        <div className="flex items-center space-x-2">
            <span className="hidden xl:flex">
                {type === "darkmode" ? (
                    <Sun className="w-6 h-6" />
                ) : (
                    <Image src={locale === 'es' ? es : en} alt={locale} width={24} height={24} />
                )}
            </span>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant={variant}
                        size="lg"
                        className="px-4 xl:w-28 justify-start flex items-center"
                    >
                        <span className="xl:hidden">
                            {type === "darkmode" ? (
                                <Sun className="w-6 h-6" />
                            ) : (
                                <Image src={locale === 'es' ? es : en} alt={locale} width={24} height={24} />
                            )}
                        </span>
                        <span className="hidden xl:flex">
                            {type === "darkmode" ? t("theme") : t("lang")}
                        </span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                    <Command>
                        <CommandList>
                            <CommandGroup>
                                {
                                    options.map((option) => (
                                        <CommandItem
                                            key={option.value}
                                            value={option.value}
                                            onSelect={() => handleSelect(option.value)}
                                        >
                                            <span>{option.label}</span>
                                        </CommandItem>
                                    ))
                                }
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}