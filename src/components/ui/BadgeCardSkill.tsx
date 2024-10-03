import { Card, CardHeader, CardTitle } from './card'
import { IconType } from 'react-icons/lib';

interface Props {
    tecnology: string
    Icon: IconType,
    color: string
}

export const BadgeCardSkill = ({ tecnology, Icon, color }: Props) => {

    return (
        <Card className='max-w-32 max-h-32 group cursor-pointer flex flex-col items-center text-center text-muted-foreground'>
            <CardHeader>
                <div className={`mx-auto ${color}`}>
                    <Icon className='w-12 lg:w-14 h-12 lg:h-14' />
                </div>
                <CardTitle className='text-xs md:text-sm'>{tecnology}</CardTitle>
            </CardHeader>
        </Card>
    )
}
