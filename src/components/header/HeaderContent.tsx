import { useTranslations } from 'next-intl';

import { ImgContent } from "./ImgContent";
import { ButtonsHeader } from "./ButtonsHeader";
import { ButtonMode } from '../ui/Button-mode';

import { Globe } from "lucide-react"
import { MotionTransition } from '../ui/transition-component';

interface Props {
    className: string;
}

export const HeaderContent = ({ className }: Props) => {

    const t = useTranslations('Header');

    return (
        <div className={className}>
            <MotionTransition position="bottom">
                <ImgContent />
            </MotionTransition>
            <div className='overflow-hidden xl:text-start text-center w-full'>
                <MotionTransition position="right">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('h1')}</h1>
                    <h2 className="text-base text-balance text-muted-foreground mb-3">{t('h2')}</h2>
                </MotionTransition>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Globe className="w-4 h-4 inline mr-1" />
                Rio Negro, Argentina
            </div>
            <ButtonsHeader />
            <div className='xl:mt-0 mt-6'>
                <h3 className="text-2xl md:text-3xl mb-3">{t('h3')}</h3>
                <p className="text-sm text-pretty text-muted-foreground xl:mb-10">{t('describe')}</p>
            </div>
            <div className="xl:grid grid-col gap-4 hidden">
                <ButtonMode type="darkmode" />
                <ButtonMode type="language" />
            </div>
        </div>
    )
}
