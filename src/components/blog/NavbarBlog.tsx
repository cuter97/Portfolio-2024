"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { BlogPost } from '@/interface/blog.interface';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Props { post: BlogPost }

export const NavbarBlog = ({ post }: Props) => {
    const t = useTranslations('Blog');

    const [activeSlug, setActiveSlug] = useState<string | null>(null);
    const [activeSubsectionSlug, setActiveSubsectionSlug] = useState<string | null>(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;

                        // Identificar la sección principal que contiene al elemento visible (si aplica)
                        const parentSection = Array.from(sections).find(
                            (section) => section.contains(entry.target) && section.id !== id
                        );

                        if (parentSection) {
                            setActiveSlug(parentSection.id); // Activa la sección principal
                            setActiveSubsectionSlug(id); // Activa la subsección
                        } else {
                            setActiveSlug(id); // Activa solo la sección principal
                            setActiveSubsectionSlug(null); // No hay subsección activa
                        }
                    }
                });
            },
            {
                root: null, // Usa el viewport
                rootMargin: '0px 0px -50% 0px', // Detecta cuando la mitad superior del elemento entra al viewport
                threshold: 0.5, // Activa cuando al menos el 30% del elemento es visible
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="space-y-2 sticky top-24 overflow-y-auto max-h-[calc(100vh-7rem)] pb-6">
            <h4 className="font-semibold text-lg">{t('navTitle')}</h4>
            <ul className="space-y-2 font-normal text-muted-foreground">
                {post.sections.map((section) => {
                    // Extraer el título de la sección
                    const sectionHeading = section.content.find(
                        (block) => block.type === 'heading' && block.level === 2
                    ) as { type: 'heading'; text: string } | undefined;

                    return (
                        <li key={section.slugTitle}>
                            <Link
                                href={`#${section.slugTitle}`}
                                className={clsx(
                                    'text-sm hover:underline',
                                    activeSlug === section.slugTitle && 'text-orange-600 font-extrabold'
                                )}
                            >
                                {sectionHeading?.text || 'Untitled Section'}
                            </Link>
                            {section.subsections && (
                                <ul className="ml-4 space-y-2 mt-2">
                                    {section.subsections.map((subsection) => {
                                        // Extraer el título de la subsección
                                        const subsectionHeading = subsection.content.find(
                                            (block) => block.type === 'heading' && block.level === 3
                                        ) as { type: 'heading'; text: string } | undefined;

                                        return (
                                            <li key={subsection.slugTitle}>
                                                <Link
                                                    href={`#${subsection.slugTitle}`}
                                                    className={clsx(
                                                        'text-sm hover:underline flex items-center space-x-1',
                                                        activeSubsectionSlug === subsection.slugTitle && 'text-orange-600 font-extrabold'
                                                    )}
                                                >
                                                    <span>
                                                        <ChevronRight size={16} />
                                                    </span>
                                                    <span>{subsectionHeading?.text || 'Untitled Subsection'}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
