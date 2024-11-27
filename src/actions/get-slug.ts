'use server'

import { getPosts } from '@/lib/jsonData';

export const getSlug = async (currentSlug: string, newLocale: string): Promise<string | null> => {
    try {
        // Obtener posts en el idioma actual y en el idioma objetivo
        const currentLocale = newLocale === 'en' ? 'es' : 'en';
        const currentPosts = await getPosts(currentLocale);
        const newPosts = await getPosts(newLocale);

        // Buscar el post actual en el idioma actual
        const currentPost = currentPosts.find((post) => post.slug === currentSlug);

        if (!currentPost) throw new Error('Slug not found in the current locale');

        // Usar el relatedSlug para encontrar el slug en el idioma objetivo
        const targetPost = newPosts.find((post) => post.relatedSlug === currentPost.relatedSlug);

        if (!targetPost) throw new Error('Slug not found in the target locale');
        
        // Devolver el slug del idioma objetivo
        return targetPost.slug;
    } catch (error) {
        console.error(error);
        throw new Error('Slug not found in the target locale');
    }
};