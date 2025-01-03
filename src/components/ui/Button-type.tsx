'use client'

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { toast } from "sonner"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { Button, ButtonProps } from "./button";
import { Check, Mail } from "lucide-react";

interface ButtonTypeBase {
    name: string;
    Icon?: JSX.Element;
    tooltip?: string;
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
}

interface ButtonWithLink extends ButtonTypeBase {
    type: "link" | "link-card";
    link: string;
}

interface ButtonWithoutLink extends ButtonTypeBase {
    type: "email" | "cv";
    link?: string;
}

type ButtonTypeProps = ButtonWithLink | ButtonWithoutLink;

export const ButtonType = ({ name, link, Icon, type, tooltip, variant = "link" }: ButtonTypeProps) => {
    const t = useTranslations('Header');
    const locale = useLocale()

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

    const getButtonProps = (): Partial<ButtonProps> => {
        switch (type) {
            case "link":
                return { asChild: true, variant: "icon", size: "icon" };
            case "link-card":
                return { asChild: true, variant, className: "px-0 md:text-lg text-md whitespace-normal text-start h-auto" };
            case "email":
                return { asChild: true, onClick: handleCopy, variant: copied ? "success" : "icon", size: "icon" };
            case "cv":
                return { asChild: true, variant: "icon", size: "icon" };
            default:
                return {};
        }
    };

    const renderButtonContent = () => {
        switch (type) {
            case "link":
                return (
                    <Link href={link!} target="_blank"  rel="noopener noreferrer">
                        {Icon}
                    </Link>
                )
            case "link-card":
                return (
                    <Link href={link!} target="_blank" className="group" rel="noopener noreferrer">
                        {name}<span className="group-hover:animate-bounce">{Icon}</span>
                    </Link>
                );
            case "email":
                return !copied ? <Mail /> : <Check />;
            case "cv":
                return (
                    <Link href={`${locale === 'es' ? '/pdf/cv-es.pdf' : '/pdf/cv-en.pdf'}`} target="_blank" prefetch={false} rel="noopener noreferrer">
                        {Icon}
                    </Link>
                );
            default:
                return null;
        }
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button {...getButtonProps() as ButtonProps}>
                        {renderButtonContent()}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip ? tooltip : name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}