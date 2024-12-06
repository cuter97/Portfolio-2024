'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { NavMenu } from "./NavMenu"
import { NavMenuMobile } from "./NavMenuMobile"
import { ButtonMode } from "./Button-mode"
import { ButtonLen } from "./ButtonLen"

import { cn } from "@/lib/utils"

import { BrainCircuit as Icons } from "lucide-react"

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={cn(isScrolled ? "bg-card justify-between" : 'md:justify-end justify-between', "scroll-m-1 sticky top-0 flex items-center py-4 2xl:px-32 px-7 z-10 transition-colors duration-300")}>
            <div>
                <Link href="/" className={cn(isScrolled ? "text-lg font-bold hidden md:flex space-x-2" : "hidden", "transition-colors duration-300")}>
                    <Icons className="w-auto h-auto" /><span>Portfolio</span>
                </Link>
                <NavMenuMobile />
            </div>
            <div className="flex">
                <NavMenu />
                <div className="flex space-x-2 ml-16">
                    <ButtonMode />
                    <ButtonLen />
                </div>
            </div>
        </nav>
    )
}
