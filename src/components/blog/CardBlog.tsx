import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
    post: {
        slug: string
        badge: string
        title: string
        introduction: string
        date: string
    }
    locale: string
}

export const CardBlog = ({ post, locale }: Props) => {
    return (
        <article className="flex flex-col space-y-2">
            <div>
                <Badge variant="blog">{post.badge}</Badge>
            </div>
            <Link href={`/${locale}/blog/${post.slug}`} className='text-xl hover:underline'>
                {post.title}
            </Link>
            <p className="text-muted-foreground">{post.introduction}</p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4">
                <span>{post.date}</span>
                <Button asChild variant={"link"} className="h-auto text-md px-0 text-accent-foreground">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                        Read more
                    </Link>
                </Button>
            </div>
        </article>
    )
}
