import { Separator } from '../ui/separator';
import { CardBlog } from './CardBlog';
import { getPosts } from '@/lib/jsonData';

interface Props {
    locale: string;
}

export default async function ContentBlogPosts({ locale }: Props) {
    const posts = await getPosts(locale);
    return (
        <ul className="2xl:col-span-3 col-span-1">
            <Separator orientation="horizontal" />
            {posts.map((post) => (
                <li key={post.slug} className="py-3">
                    <CardBlog post={post} locale={locale} />
                    <Separator orientation="horizontal" className="mt-4" />
                </li>
            ))}
        </ul>
    )
}
