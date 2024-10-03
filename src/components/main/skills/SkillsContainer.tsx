import { BadgeCardHover } from '@/components/ui/BadgeCardHover'

interface Props {
    skills: string[]
}

export const SkillsContainer = ({ skills }: Props) => {
    return (
        <>
            <h3 id="skills" className="md:text-3xl text-2xl mb-6 scroll-mt-20">Skills</h3>

            <div className='grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-4 mb-16'>
                {skills.map((skill) => (
                    <BadgeCardHover key={skill} tecnology={skill} type="skill" />
                ))}
            </div>
        </>
    )
}
