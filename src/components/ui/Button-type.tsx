'use client'

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { toast } from "sonner"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import { Check, Mail } from "lucide-react";

interface ButtonTypeBase {
    name: string;
    Icon?: JSX.Element;
}

interface ButtonWithLink extends ButtonTypeBase {
    type: "link";
    link: string; 
}

interface ButtonWithoutLink extends ButtonTypeBase {
    type: "email" | "cv"; 
    link?: string; 
}

type ButtonTypeProps = ButtonWithLink | ButtonWithoutLink;

export const ButtonType = ({ name, link, Icon, type }: ButtonTypeProps) => {
    const t = useTranslations('Header');

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(t("email")).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        });
        toast(t("btnHeader.toast.title"), {
            description: t("email"),
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        })
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {
                        type === 'link' &&
                        <Button asChild variant="icon" size="icon">
                            {
                                <Link href={link!} target="_blank" >
                                    {Icon}
                                </Link>
                            }
                        </Button>
                    }
                    {
                        type === 'email' &&
                        <Button asChild onClick={handleCopy} variant={copied ? "success" : "icon"} size="icon">
                            {!copied ? (
                                <Mail />
                            ) : (
                                <Check />
                            )}
                        </Button>
                    }
                    {
                        type === 'cv' &&
                        <Button asChild variant="icon" size="icon">
                            {
                                <Link href="/pdf/curriculum.pdf" target="_blank">
                                    {Icon}
                                </Link>
                            }
                        </Button>
                    }
                </TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
