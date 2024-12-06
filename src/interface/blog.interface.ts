interface Section {
    slugTitle: string;
    content: SectionsType[];
    subsections?: Subsection[];
}

interface Subsection {
    slugTitle: string;
    content: SectionsType[];
}

export interface BlogPost {
    badge: string;
    slug: string;
    title: string;
    introduction: string;
    sections: Section[];
    date: string;
    relatedSlug: string;
}

export type SectionsType =
    | { type: 'heading'; level: number; text: string }
    | { type: 'paragraph'; text: string }
    | { type: 'list'; items: string[] }
    | { type: 'image'; src: string; alt: string }
    | { type: 'note'; text: string }
    | { type: 'code'; language: string; code: string };