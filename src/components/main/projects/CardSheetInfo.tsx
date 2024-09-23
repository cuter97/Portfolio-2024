
export const CardSheetInfo = () => {
    return (
        <div>
            <p className="text-pretty">Desafíos y Soluciones:</p>
            <ul className="list-inside list-disc text-sm space-y-1 marker:text-orange-600 text-muted-foreground">
                <li>Optimización de Performance: Implementé técnicas de optimización como el lazy loading de imágenes y la generación estática de páginas (SSG) para mejorar la velocidad de carga.</li>
                <li>Diseño Responsivo: Adapté el diseño para que se vea y funcione correctamente en dispositivos móviles y de escritorio utilizando CSS Grid y Flexbox.</li>
                <li>Gestión de Contacto: Integré un sistema de mensajería en tiempo real que utiliza websockets para enviar y recibir mensajes instantáneamente.</li>
            </ul>
        </div>
    )
}
