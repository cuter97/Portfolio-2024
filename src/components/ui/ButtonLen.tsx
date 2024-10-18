'use client'

import { useRouter } from 'next/navigation';
import { useLocale } from "next-intl"
import { useTransition } from 'react';
import { Button } from './button';

export const ButtonLen = () => {
    const locale = useLocale();
    const router = useRouter();
    const [, startTransition] = useTransition();

    const handleSelect = (value: string) => {
        startTransition(() => {
            router.replace(`/${value}`);
        });
    }

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
    )
}
