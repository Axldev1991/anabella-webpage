# Protocolo de Reanudación de Contexto - Anabella Webpage

## Resumen del Proyecto
Este proyecto es una web profesional para la bailarina Anabella López, construida con Next.js 15, Tailwind v4 y Framer Motion. El objetivo principal fue crear una arquitectura **totalmente modular** donde el contenido sea independiente del diseño.

## Estado Actual (Última actualización: 10/02/2026)

### ✅ Completado
1. **Arquitectura modular**: Componentes UI en `src/components/ui`, secciones en `src/components/sections`, y contenido centralizado en `src/data/content.ts`.
2. **Sincronización con CV**: Todos los datos personales, trayectoria educativa y laboral actualizados según CV oficial.
3. **Diseño Premium**: Sistema de temas dinámicos para especialidades (Minimal, Dark, Urban, Neon, Earth, Impact) con efecto de apilamiento en scroll.
4. **Imágenes Locales Integradas**: 
   - Todas las imágenes migradas de URLs externas a `/public/images/`
   - Hero image, About image, y 6 imágenes de especialidades
   - Optimización con Next.js Image component
   - Imágenes de fondo en sección Specialties con overlays para legibilidad
5. **Optimización Mobile Completa**:
   - **Navbar**: Logo y texto reducidos, botón "Contactar" oculto en mobile
   - **Hero**: Tamaños de texto responsivos (5xl→6xl→8xl), botones full-width en mobile, padding ajustado
   - **About**: Grid adaptativo, imagen 350px en mobile vs 450px desktop, texto y bordes escalados
   - **Specialties**: Títulos 4xl→6xl→9xl, subtítulos y descripciones con tracking ajustado, padding horizontal añadido
   - **Experience**: 
        - **Desktop**: Grid 2x2 estático optimizado para `100vh`. Animaciones automáticas de entrada.
        - **Mobile**: Coreografía tipo "Poster" (2x2) con scroll, tarjetas sólidas y z-index dinámico.
   - **Skills**: Grid 2→3→4 columnas, padding y tamaños de íconos ajustados
   - **Education**: Grid 1→2→3 columnas, padding y textos responsivos
   - **Contact**: Formulario single-column en mobile, inputs y textos escalados, padding reducido
6. **Build validado**: Proyecto compila correctamente (`npm run build`).
7. **Repositorio actualizado**: Código sincronizado con GitHub (`Axldev1991/anabella-webpage`).

## Decisiones Técnicas Clave
- **Content-as-Data**: Todo el texto está en `content.ts`. No hardcoding de textos en componentes.
- **Imágenes Locales**: Rutas relativas `/images/` para mejor rendimiento y control.
- **Framer Motion**: Animaciones de entrada y efectos de scroll.
- **Tailwind v4 (@theme)**: Tokens de diseño en `globals.css` con sintaxis de variables CSS.
- **Mobile-First Responsive**: Breakpoints: base (mobile) → md (768px) → lg (1024px).
- **Next.js Image Optimization**: `priority` en primera imagen de specialties, `fill` para backgrounds.
- **Separación de Componentes de Experiencia**: Debido a la complejidad de las animaciones de scroll en Mobile vs el grid estático de Desktop, se optó por dos implementaciones 100% independientes (`ExperienceMobile` y `ExperienceDesktop`) para evitar conflictos de hooks de Framer Motion.

## 🎬 Saga de la Sección Experiencia (Choreography Refinement)
Este componente fue el más complejo de estabilizar. Se documenta para evitar repetir errores:

1. **Problema de "Fantasmas" (Transparencia)**:
   - *Fallo:* Usar `useTransform` con rangos de opacidad (ej. 0.8) permitía ver las tarjetas del fondo.
   - *Solución:* **Opacidad Binaria**. Solo `0` o `1`. Se usa una función lógica en `useTransform` para que el cambio sea instantáneo. Además, se forzó `backgroundColor: "#ffffff"` sólido y se aseguró solidez en el estilo.

2. **Problema de Solapamiento en el Centro**:
   - *Fallo:* Las tarjetas se pisaban al entrar y salir del foco central.
   - *Solución:* Ajuste de Escala y Offsets. La tarjeta entra a `scale: 1` y se retira a `scale: 0.55` hacia las esquinas (`26vw` / `18vh`). Este tamaño permite que el centro quede libre para la siguiente tarjeta.

3. **Jerarquía Visual (Z-Index)**:
   - *Fallo:* Al ser sólidas, si el Z-Index no era perfecto, las tarjetas que se retiraban tapaban a las que entraban.
   - *Solución:* **Z-Index Activo**. La tarjeta en el "peak" del scroll recibe `zIndex: 100` o superior, mientras que las estacionadas quedan en su índice original de profundidad.

4. **Regla de Mobile-First en Animación**:
   - La altura del contenedor móvil es `450vh` para permitir un scroll fluido de las 4 tarjetas. No tocar esta altura sin recalibrar las constantes `STEP` y `MOVE`.

## Estructura de Imágenes
```
public/images/
├── hero.jpg          # Imagen principal del Hero
├── about.jpg         # Imagen de la sección About
├── expresion.jpg     # Expresión Corporal
├── contemporanea.jpg # Danza Contemporánea & Jazz
├── urban.jpg         # Hip Hop Freestyle
├── electro.jpg       # Electro Dance
├── folklore.jpg      # Folklore
└── percusion.jpg     # Percusión & Batería
```

## Mejoras Visuales Implementadas
- **Especialties backgrounds**: Opacidad 30% (25% en desktop), grayscale 30%, brightness 75%
- **Overlays optimizados**: Gradientes más suaves para mejor visibilidad de imágenes
- **Responsive typography**: Sistema de escalado coherente en todas las secciones
- **Touch-friendly**: Botones y elementos interactivos con tamaños mínimos en mobile

## Pendientes / Sugerencias
- Implementar video backgrounds opcionales para las especialidades
- Agregar animaciones de texto reveal on scroll
- Configurar página 404 personalizada
- Implementar SEO y OpenGraph tags
- Agregar un cursor personalizado para experiencia "premium"

## Instrucciones para el IA Agent (Antigravity)
Al abrir este proyecto:
1. Lee este archivo íntegramente para entender el estado actual.
2. Analiza `src/data/content.ts` para la estructura de datos.
3. Revisa las optimizaciones mobile en cada componente de `src/components/sections/`.
4. Mantén la modularidad: no re-escribas componentes sin razón específica.
5. Respeta el sistema de breakpoints: base → md → lg.
6. Las imágenes están en `/public/images/` - no usar URLs externas.
7. Continúa desde este punto como si el hilo de conversación nunca se hubiera cortado.
8. **Especial cuidado con la sección Experience**: Si el usuario pide cambios en Mobile, NUNCA toques Desktop y viceversa. Lee la sección "Saga de la Sección Experiencia" antes de proponer cambios en la coreografía de scroll.

## Comandos Útiles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
git add .            # Preparar cambios
git commit -m "..."  # Commit
git push            # Push a GitHub
```
