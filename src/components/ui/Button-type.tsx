'use client'

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

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

export const ButtonType = ({ name, link, Icon, type, tooltip, variant = "link", size }: ButtonTypeProps) => {
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

    const getButtonProps = (): Partial<ButtonProps> => {
        switch (type) {
            case "link":
                return { asChild: true, variant: "icon", size: "icon" };
            case "link-card":
                return { asChild: true, variant, className: "px-0" };
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
                    <Link href={link!} target="_blank" >
                        {Icon}
                    </Link>
                )
            case "link-card":
                return (
                    <Link href={link!} target="_blank">
                        {name}{Icon}
                    </Link>
                );
            case "email":
                return !copied ? <Mail /> : <Check />;
            case "cv":
                return (
                    <Link href="/pdf/curriculum.pdf" target="_blank">
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