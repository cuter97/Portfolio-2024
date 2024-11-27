import { Fragment } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './breadcrumb';

interface BreadcrumbItem {
    label: string; // Etiqueta del breadcrumb.
    href?: string; // Enlace (opcional, si no es el último nivel).
}

interface Props {
    items: BreadcrumbItem[]; // Lista de elementos del breadcrumb.
}

export const DynamicBreadcrumb = ({ items }: Props) => {
    return (
        <Breadcrumb className="mb-8">
            <BreadcrumbList>
                {items.map((item, index) => (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            {item.href ? (
                                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {index < items.length - 1 && <BreadcrumbSeparator />}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
