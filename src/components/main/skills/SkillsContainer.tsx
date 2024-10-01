import { BadgeCardHover } from '@/components/ui/BadgeCardHover'

interface Props {
    skills: string[]
}

export const SkillsContainer = ({ skills }: Props) => {
    return (
        <>
            <h3 className="text-3xl mb-6">Skills</h3>

            <div className='grid grid-cols-6 gap-4 mb-16'>
                {skills.map((skill) => (
                    <BadgeCardHover key={skill} tecnology={skill} type="skill" />
                ))}
            </div>
        </>
    )
}