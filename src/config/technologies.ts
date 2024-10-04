import { SiNestjs, SiNextdotjs, SiMongodb, SiExpress, SiGraphql } from "react-icons/si";
import { FaNode, FaReact, FaDocker, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons/lib";


interface Technology {
    icon: IconType;   // Tipo específico para iconos de react-icons
    color: string;    // Clases de Tailwind u otros estilos CSS
}

export const technologies: Record<string, Technology> = {
    nestjs: {
        icon: SiNestjs,
        color: 'group-hover:text-[#EA2857]',
    },
    nodejs: {
        icon: FaNode,
        color: 'group-hover:text-[#417E38]',
    },
    typescript: {
        icon: BiLogoTypescript,
        color: 'group-hover:text-[#2d79c6]',
    },
    reactjs: {
        icon: FaReact,
        color: 'group-hover:text-[#61dbfb]',
    },
    nextjs: {
        icon: SiNextdotjs,
        color: 'group-hover:text-primary',
    },
    docker: {
        icon: FaDocker,
        color: 'group-hover:text-[#1D63ED]',
    },
    postgresql: {
        icon: BiLogoPostgresql,
        color: 'group-hover:text-[#2F5E8D]',
    },
    mongodb: {
        icon: SiMongodb,
        color: 'group-hover:text-[#10AA50]',
    },
    html: {
        icon: FaHtml5,
        color: 'group-hover:text-[#E44D26]',
    },
    css: {
        icon: FaCss3Alt,
        color: 'group-hover:text-[#2D54E5]',
    },
    javascript: {
        icon: IoLogoJavascript,
        color: 'group-hover:text-[#F8DC3D]',
    },
    expressjs: {
        icon: SiExpress,
        color: 'group-hover:text-[#90C53F]',
    },
    graphql: {
        icon: SiGraphql,
        color: 'group-hover:text-[#E2089B]',
    },
    git: {
        icon: FaGithub,
        color: 'group-hover:text-primary',
    }
};