import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

import fs from 'fs';
import path from 'path';

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as 'en' | 'es')) notFound();

    const filePath = path.join(process.cwd(), 'public', 'messages', `${locale}.json`);

    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const messages = JSON.parse(jsonData);

        return { messages };
    } catch (error) {
        notFound();
    }
});