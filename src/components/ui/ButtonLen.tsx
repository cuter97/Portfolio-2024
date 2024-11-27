'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from "next-intl";
import { useTransition } from 'react';
import { Button } from './button';
import { getSlug } from '@/actions/get-slug';

export const ButtonLen = () => {
    const locale = useLocale();
    const router = useRouter();
    const [, startTransition] = useTransition();
    const currentPath = usePathname(); 

    const handleSelect = async (newLocale: string) => {
        const segments = currentPath.split('/');
        const isBlog = currentPath.includes('/blog'); // Detecta si es una ruta del blog.

        // Si es la home o una ruta genérica (no es `/blog`).
        if (!isBlog) {
            startTransition(() => {
                router.replace(`/${newLocale}${locale ? currentPath.slice(3) : currentPath}`);
            });
            return;
        }

        // Caso: Es `/blog` sin un slug dinámico.
        if (isBlog && segments.length === 3) {
            startTransition(() => {
                router.replace(`/${newLocale}/blog`);
            });
            return;
        }

        // Caso: Es `/blog/:slug`.
        const currentSlug = currentPath.split('/').pop(); // Extrae el slug actual.
        const newSlug = await getSlug(currentSlug || '', newLocale);

        if (newSlug) {
            // Redirige al nuevo idioma y slug.
            startTransition(() => {
                router.replace(`/${newLocale}/blog/${newSlug}`);
            });
        } else {
            // Si no se encuentra el slug, redirige al índice del blog.
            startTransition(() => {
                router.replace(`/${newLocale}/blog`);
            });
        }
    };

    return (
        <div className="flex items-center justify-center align-middle text-md">
            <Button
                onClick={() => handleSelect('en')}
                variant={`${locale === 'es' ? 'linkcolorless' : 'link'}`}
            >
                EN
            </Button>
            <span>|</span>
            <Button
                onClick={() => handleSelect('es')}
                variant={`${locale === 'es' ? 'link' : 'linkcolorless'}`}
            >
                ES
            </Button>
        </div>
    );
};