# Vulkanbyte

Páginas web para negocios de Colima y Villa de Álvarez. Construido con Next.js 14 (App Router), TypeScript y Tailwind CSS v4.

## Stack

- **Framework**: Next.js 14.2.25
- **Lenguaje**: TypeScript, `strict: true`
- **Estilos**: Tailwind CSS v4 (tokens en `app/globals.css`, sin `tailwind.config`)
- **UI**: 4 primitivos propios en `components/ui/` (`button`, `card`, `input`, `textarea`) sobre Radix Slot
- **Formulario**: EmailJS del lado del cliente, sin backend propio
- **Fuentes**: Bricolage Grotesque (títulos), Public Sans (cuerpo), JetBrains Mono (datos) vía `next/font/google`
- **Contenido**: centralizado en [`lib/content.ts`](lib/content.ts) — precios, paquetes, proyectos y textos viven ahí, no en el JSX

## Instalación

```bash
npm install
cp .env.example .env.local
```

Llena `.env.local` con tus credenciales de EmailJS y la URL del sitio (ver [`.env.example`](.env.example) para la lista de variables — nunca subas `.env.local` a git).

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start         # Servidor de producción
npm run lint          # ESLint
npm run type-check    # tsc --noEmit
```

## Cambiar contenido

Precios, paquetes, proyectos del portafolio, preguntas frecuentes y datos de contacto (correo, WhatsApp, zona de servicio) están todos en [`lib/content.ts`](lib/content.ts). Ningún componente tiene esos datos escritos a mano — cambiar un precio es editar una línea ahí.

## Cambiar de dominio

Todo el sitio lee la URL pública de `NEXT_PUBLIC_SITE_URL` (metadatos, `sitemap.ts`, `robots.ts`, JSON-LD). Al comprar el dominio definitivo, solo hay que actualizar esa variable en Vercel y redesplegar — no hay URLs absolutas escritas a mano en el código.

## Despliegue

Vercel detecta Next.js automáticamente (zero-config) — no hay `vercel.json`. Configura las variables de entorno del punto anterior en **Settings → Environment Variables** antes de desplegar.

## Licencia

MIT — ver [`LICENSE`](LICENSE).
