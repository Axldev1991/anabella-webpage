# Anabella López - Portafolio Profesional

Este proyecto ha sido desarrollado con **Next.js 15**, **Tailwind CSS v4** y **Framer Motion** para ofrecer una experiencia premium y altamente escalable.

## 🚀 Arquitectura Modular

Siguiendo tus requerimientos, el proyecto está estructurado para que el diseño y el contenido sean independientes:

### 1. Independencia de Contenido (`src/data/content.ts`)
Toda la información del sitio (textos, trayectoria, habilidades, educación y configuración de navegación) se encuentra centralizada en este archivo. 
- **¿Querés cambiar una fecha?** Editá este archivo.
- **¿Querés agregar una nueva especialidad?** Solo agregá un objeto al array y el sitio se actualizará automáticamente con el diseño correspondiente.

### 2. Componentes UI Atómicos (`src/components/ui`)
Contiene componentes base como `Button.tsx`. Estos definen el "look and feel" global. Cambiando el estilo acá, se actualiza en todo el sitio sin riesgo de romper la estructura.

### 3. Secciones Independientes (`src/components/sections`)
Cada parte del sitio (`Hero`, `About`, `Specialties`, `Experience`, etc.) es un componente autónomo. Podés reordenarlos en `page.tsx` con total libertad.

### 4. Sistema de Temas Dinámicos
La sección `Specialties` utiliza un sistema de temas (`minimal`, `dark`, `urban`, `neon`, `earth`, `impact`) que cambia visualmente según el contenido, permitiendo que cada estilo de danza tenga su propia personalidad sin duplicar código.

## 🛠️ Tecnologías Utilizadas
- **Next.js (App Router)**: Estructura moderna y optimizada.
- **Tailwind CSS v4**: Estilos rápidos y mantenibles mediante el nuevo enfoque CSS-first.
- **Framer Motion**: Animaciones fluidas y efectos de scroll "smooth".
- **Lucide React**: Íconos vectoriales premium.

## 📦 Despliegue en Vercel
El proyecto está listo para ser cargado en Vercel. 
1. Sube el código a un repositorio de GitHub.
2. Conecta el repositorio en el panel de Vercel.
3. ¡Listo! Vercel detectará automáticamente Next.js y aplicará todas las optimizaciones de imagen y velocidad.
