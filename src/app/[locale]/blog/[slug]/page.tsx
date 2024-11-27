import { redirect } from "next/navigation";
import { Animation } from "@/components/ui/Animation";
import { getPostBySlug } from "@/lib/jsonData";
import Image from "next/image";
import { DynamicBreadcrumb } from "@/components/ui/DinamicBread";
import { NavbarBlog } from "@/components/blog/NavbarBlog";
import { Badge } from "@/components/ui/badge";

export default async function BlogPostPage({ params: { slug, locale } }: { params: { slug: string; locale: string } }) {
    const post = await getPostBySlug(slug, locale);

    if (!post) redirect(`/${locale}/blog`);

    return (
        <main className="mx-auto max-w-5xl px-4 xl:px-6 2xl:px-0 pb-24 font-light flex">
            <Animation />
            <div className="w-full lg:w-3/4 space-y-6">
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
                <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
                <p>{post.introduction}</p>
                {post.sections.map((section) => (
                    <section key={section.slugTitle} className="space-y-3 scroll-mt-20" id={`${section.slugTitle}`}>
                        <h2 className="text-xl font-semibold ">{section.title}</h2>
                        {section.description && <p>{section.description}</p>}
                        {section.image &&
                            <div className="flex justify-center py-4">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    className=" rounded-lg"
                                    priority
                                    width={500}
                                    height={500}
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                        }
                        {section.note && <p className="border-l-4 border-orange-600 pl-2">{section.note}</p>}
                        {section.subsections && section.subsections.map((subsection) => (
                            <section key={subsection.slugTitle} id={`${subsection.slugTitle}`} className="scroll-mt-20">
                                <h3 className="text-lg font-semibold">{subsection.title}</h3>
                                {subsection.description && <p>{subsection.description}</p>}
                                {subsection.image &&
                                    <div className="flex justify-center py-4">
                                        <Image
                                            src={subsection.image}
                                            alt={subsection.title}
                                            className=" rounded-lg"
                                            priority
                                            width={500}
                                            height={500}
                                            style={{
                                                width: 'auto',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>
                                }
                                {subsection.note && <p>{subsection.note}</p>}
                            </section>
                        ))}
                    </section>
                ))}
            </div>
            <div className="relative hidden lg:block w-1/4 pl-8">
                <NavbarBlog post={post} />
            </div>
        </main>
    );
}
