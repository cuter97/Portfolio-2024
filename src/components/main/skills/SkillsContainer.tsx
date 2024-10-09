import { BadgeCardHover } from '@/components/ui/BadgeCardHover'
import { useTranslations } from 'next-intl';

export const SkillsContainer = () => {
    const t = useTranslations('Technologies')
    const mainSkills = t('mainSkills').split('::').map(item => item.trim());

    return (
        <>
            <h3 id="skills" className="md:text-3xl text-2xl mb-6 scroll-mt-20">{t('h3')}</h3>

            <div className='grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-4 mb-16'>
                {mainSkills.map((skill) => (
                    <BadgeCardHover key={skill} tecnology={skill} type="skill" />
                ))}
            </div>
        </>
    )
}
