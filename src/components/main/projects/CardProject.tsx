import { Badge } from "@/components/ui/badge"
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
                <p className="">A personal portfolio website to showcase my projects and skills.</p>
            </CardContent>
            <CardFooter className="flex flex-col">
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                    <li>Built with Node.js and MongoDB</li>
                    <li>User authentication and CRUD operations</li>
                </ul>
                {/* <div className="flex items-center justify-between mt-2 w-auto">
                    <span className="flex space-x-2">
                        <Badge variant="default" className="h-6">Next.js</Badge>
                        <Badge variant="default" className="h-6">Node.js</Badge>
                    </span>
                </div> */}
                    <Button variant="secondary" size="sm" className="text-primary mt-2 ml-auto">Info</Button>
            </CardFooter>
        </Card>
    )
}
