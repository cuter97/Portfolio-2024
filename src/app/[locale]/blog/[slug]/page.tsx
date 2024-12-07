import { redirect } from "next/navigation";
import { getPostBySlug } from "@/lib/jsonData";
import { Animation } from "@/components/ui/Animation";
import { DynamicBreadcrumb } from "@/components/ui/DinamicBread";
import { NavbarBlog } from "@/components/blog/NavbarBlog";
import { Badge } from "@/components/ui/badge";
import { ArticleBlogPost } from "@/components/blog/ArticleBlogPost";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default async function BlogPostPage({ params: { slug, locale } }: { params: { slug: string; locale: string } }) {
    const post = await getPostBySlug(slug, locale);

    if (!post) redirect(`/${locale}/blog`);

    return (
        <main className="mx-auto max-w-6xl px-4 xl:px-6 2xl:px-0 font-light flex">
            <Animation />
            <div className="w-full lg:w-3/4 space-y-6 mb-12">
                <DynamicBreadcrumb
                    items={[
                        { label: 'Home', href: `/${locale}` },
                        { label: 'Blog', href: `/${locale}/blog` },
                        { label: post.badge.charAt(0).toUpperCase() + post.badge.slice(1) },
                    ]}
                />
                <div className="flex space-x-4">
                    <Badge variant="blog">{post.badge}</Badge>
                    <span>{post.date}</span>
                </div>
                <ArticleBlogPost post={post} />
                <div className="flex justify-center mb-10">
                    <Button asChild variant="default" >
                        <Link href={`#${post.slug}`} className="text-md hover:underline scroll-smooth">
                            <ArrowUp />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="relative hidden lg:block w-1/4 pl-8">
                <NavbarBlog post={post} />
            </div>
        </main>
    );
}
