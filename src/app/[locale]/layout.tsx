import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/providers/theme-provider";

import { Roboto_Mono } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
    title: "Agustin Castets | Portfolio",
    description: "Agustin Castets, Full Stack Developer with experience in creating efficient and scalable web applications. Specialized in modern technologies in both the frontend and backend.",
    icons: {
        icon: "/icon.svg",
    },
};

const interRoboto = Roboto_Mono({ subsets: ['latin'], display: 'swap', })

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={cn(
                    "antialiased dark:bg-background",
                    interRoboto.className
                )}
            >
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
