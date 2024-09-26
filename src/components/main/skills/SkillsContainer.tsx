import { BadgeCardHover } from '@/components/ui/BadgeCardHover'

export const SkillsContainer = () => {
    const skills = ['nodejs', 'nestjs', 'typescript', 'reactjs', 'nextjs']
    return (
        <>
            <h3 className="text-3xl mb-6">Skills</h3>

            <div className='grid grid-cols-6 gap-4'>
                {skills.map((skill) => (
                    <BadgeCardHover key={skill} tecnology={skill} type="skill" />
                ))}
            </div>
        </>
    )
}
