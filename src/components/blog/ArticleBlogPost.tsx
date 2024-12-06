import { createElement } from "react";
import Image from "next/image";
import { BlogPost, SectionsType } from "@/interface/blog.interface"

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

interface Props { post: BlogPost }

export const ArticleBlogPost = ({ post }: Props) => {
    const renderSectionType = (block: SectionsType, key: string, slug: string) => {
        switch (block.type) {
            case 'heading':
                const headingClasses = block.level === 2 ? 'text-2xl font-bold mt-10' : 'text-xl font-semibold mb-1 mt-6';
                return createElement(
                    `h${block.level}`,
                    { key, className: headingClasses, id: slug },
                    block.text
                );
            case 'paragraph':
                return <p key={key}>{block.text}</p>;
            case 'list':
                return (
                    <ul key={key} className="list-disc ml-5 space-y-2 mt-2 mb-2">
                        {block.items.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );
            case 'image':
                return (
                    <div key={key} className="flex justify-center py-4">
                        <Image src={block.src} alt={block.alt} className=" rounded-lg" priority width={500} height={500} style={{ width: 'auto', height: 'auto' }} />
                    </div>
                );
            case 'note':
                return <p key={key} className="border-l-4 border-orange-600 pl-2 my-4">{block.text}</p>;
            case 'code':
                return (
                    <div className="my-8">
                        <pre key={key} className={`language-${block.language} rounded-md`}>
                            <code
                                dangerouslySetInnerHTML={{
                                    __html: Prism.highlight(
                                        block.code,
                                        Prism.languages[block.language] || Prism.languages.javascript,
                                        block.language
                                    ),
                                }}
                            />
                        </pre>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <article className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
            <p>{post.introduction}</p>
            {post.sections.map((section) => (
                <section key={section.slugTitle} className="space-y-3 scroll-mt-20" id={`${section.slugTitle}`}>

                    {section.content.map((block, i) => renderSectionType(block, `${section.slugTitle}-section-${i}`, section.slugTitle))}

                    {section.subsections && section.subsections.map((subsection, i) => (
                        <section key={subsection.slugTitle} id={`${subsection.slugTitle}`} className="scroll-mt-20">
                            {subsection.content.map((block, blockIndex) => renderSectionType(block, `${subsection.slugTitle}-${blockIndex}-${i}`, subsection.slugTitle))}
                        </section>
                    ))}
                </section>
            ))}
        </article>
    )
}
