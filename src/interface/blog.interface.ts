interface Section {
    title: string;
    slugTitle: string;
    description: string;
    image?: string;
    note?: string;
    subsections?: Subsection[];
}

interface Subsection {
    title: string;
    slugTitle: string;
    description?: string;
    image?: string;
    note?: string;
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