import { promises as fs } from 'fs';

export default async function JsonData(path: string) {
    const file = await fs.readFile(process.cwd() + '/messages/en.json', 'utf8');
    const data = JSON.parse(file);

    // Llama a la función para obtener las propiedades de la ruta especificada
    const propertiesArray = getPropertiesArray(data, path);
    return propertiesArray; // Devuelve el array de propiedades
}

// Función para obtener las propiedades de un objeto anidado
const getPropertiesArray = (obj: Record<string, unknown>, path: string): string[] => {
    const nestedData = getNestedData(obj, path);

    // Verifica si el objeto anidado existe
    if (nestedData && typeof nestedData === 'object') {
        return Object.keys(nestedData); // Devuelve un array con las claves del objeto
    }
    return []; // Devuelve un array vacío si la ruta no existe o no es un objeto
};

// Función para acceder a rutas de objetos anidados
const getNestedData = <T>(obj: Record<string, unknown>, path: string): T | undefined => {
    return path.split('.').reduce<unknown>((acc, part) => {
        if (typeof acc === 'object' && acc !== null && part in acc) {
            return (acc as Record<string, unknown>)[part];
        }
        return undefined;
    }, obj) as T;
};