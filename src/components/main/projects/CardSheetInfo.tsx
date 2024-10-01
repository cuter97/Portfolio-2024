
interface Props {
    title: string;
    description: string;
}

export const CardSheetInfo = ({ title, description }: Props) => {
    const descriptionList = description.split('::').map(item => item.trim());
    return (
        <div>
            <p className="text-pretty">{title}</p>
            <ul className="list-inside list-disc text-sm space-y-1 marker:text-orange-600 text-muted-foreground">
                {descriptionList.map((cont, index) => (
                    <li key={index}>{cont}</li>
                ))}
            </ul>
        </div>
    )
}
