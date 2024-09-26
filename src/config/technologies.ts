import { SiNestjs, SiNextdotjs } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IconType } from "react-icons/lib";


interface Technology {
    icon: IconType;   // Tipo específico para iconos de react-icons
    color: string;    // Clases de Tailwind u otros estilos CSS
    i18nKey: string;  // Clave para i18n
}

export const technologies: Record<string, Technology> = {
    nestjs: {
        icon: SiNestjs,
        color: 'group-hover:text-[#EA2857]',
        i18nKey: 'nestjs'
    },
    nodejs: {
        icon: FaNode,
        color: 'group-hover:text-[#417E38]',
        i18nKey: 'nodejs'
    },
    typescript: {
        icon: BiLogoTypescript,
        color: 'group-hover:text-[#2d79c6]',
        i18nKey: 'typescript'
    },
    reactjs: {
        icon: FaReact,
        color: 'group-hover:text-[#61dbfb]',
        i18nKey: 'reactjs'
    },
    nextjs: {
        icon: SiNextdotjs,
        color: 'group-hover:text-primary',
        i18nKey: 'nextjs'
    }
};