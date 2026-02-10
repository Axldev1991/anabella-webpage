# Protocolo de Reanudación de Contexto - Anabella Webpage

## Resumen del Proyecto
Este proyecto es una web profesional para la bailarina Anabella López, construida con Next.js 15, Tailwind v4 y Framer Motion. El objetivo principal fue crear una arquitectura **totalmente modular** donde el contenido sea independiente del diseño.

## Estado Actual
1. **Arquitectura modular completada**: Componentes UI en `src/components/ui`, secciones en `src/components/sections`, y contenido centralizado en `src/data/content.ts`.
2. **Sincronización con CV**: Se han actualizado todos los datos personales, trayectoria educativa y laboral basándose en el CV oficial (JPEG).
3. **Diseño Premium**: Se implementó un sistema de temas dinámicos para las especialidades (Minimal, Dark, Urban, Neon, Earth, Impact) que se apilan durante el scroll.
4. **Build validado**: El proyecto compila correctamente (`npm run build`).

## Decisiones Técnicas Clave
- **Content-as-Data**: Todo el texto está en `content.ts`. No debe haber hardcoding de textos en los componentes para facilitar la escalabilidad.
- **Framer Motion**: Se usa para animaciones de entrada y efectos de scroll.
- **Tailwind v4 (@theme)**: Los tokens de diseño se definen en `globals.css` usando la nueva sintaxis de variables CSS de Tailwind v4.

## Pendientes / Sugerencias
- Implementar video backgrounds opcionales para las especialidades.
- Configurar el despliegue final en Vercel.
- Agregar un cursor personalizado para mejorar la experiencia "premium".

## Instrucciones para el IA Agent (Antigravity)
Al abrir este proyecto por primera vez en otra terminal/PC:
1. Lee este archivo íntegramente.
2. Analiza `src/data/content.ts` para entender la estructura de datos.
3. No re-escribas los componentes a menos que se pida un cambio visual específico; mantén la modularidad actual.
4. Tu objetivo es continuar desde este punto como si el hilo de conversación nunca se hubiera cortado.
