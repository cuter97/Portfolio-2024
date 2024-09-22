import { BadgeCardHover } from "@/components/ui/BadgeCardHover"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Folder, GitPullRequestIcon } from "lucide-react"

export const CardProject = () => {
    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                        <Folder className="w-4 h-4 mr-2" />
                        Card Title
                    </span>
                    <GitPullRequestIcon className="w-4 h-4" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-2">A personal portfolio website to showcase my projects and skills.</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Built with Node.js and MongoDB</li>
                    <li>User authentication and CRUD operations</li>
                </ul>
            </CardContent>
            <CardFooter>
                    <div className="flex space-x-2">
                        <BadgeCardHover />
                        <BadgeCardHover />
                    </div>
                    <Button variant="secondary" size="sm" className="text-primary ml-auto">Info</Button>
            </CardFooter>
        </Card>
    )
}
