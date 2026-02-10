export function SmoothScroll({ children }: { children: ReactNode }) {
    // Desactivamos Lenis para que no entre en conflicto con Scroll Snap
    return <>{children}</>;
}
