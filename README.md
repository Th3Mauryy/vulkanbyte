# 🚀 Vulkanbyte - Sitio Web Corporativo

[![Next.js](https://img.shields.io/badge/Next.js-14.2.25-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-FF6B6B?style=flat-square)](https://www.emailjs.com/)

Sitio web profesional de **Vulkanbyte**, empresa especializada en desarrollo web moderno. Construido con Next.js 14, TypeScript, Tailwind CSS y componentes de UI modernos.

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX profesional con Tailwind CSS y Radix UI
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 🚀 **Rendimiento**: Construido con Next.js 14 para máxima velocidad
- 📧 **Formulario de Contacto**: Integración con EmailJS para envío de emails
- 🎯 **SEO Optimizado**: Metadatos y estructura optimizada para buscadores
- 🔧 **TypeScript**: Tipado estático para mayor confiabilidad
- 🎭 **Tema Oscuro/Claro**: Soporte para ambos temas
- ⚡ **Optimización**: Imágenes y fuentes optimizadas automáticamente

## 🛠️ Tecnologías

- **Framework**: Next.js 14.2.25
- **Lenguaje**: TypeScript 5.0
- **Estilos**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI + shadcn/ui
- **Formularios**: React Hook Form + Zod
- **Email**: EmailJS
- **Iconos**: Lucide React
- **Fuentes**: Inter + Open Sans (Google Fonts)

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Th3Mauryy/vulkanbyte.git
   cd vulkanbyte
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus credenciales de EmailJS:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abre en tu navegador**
   
   Visita [http://localhost:3000](http://localhost:3000)

## 📧 Configuración de EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea un template de email con las variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
   - `{{reply_to}}`
4. Obtén tus credenciales y configúralas en `.env.local`

## 🏗️ Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter ESLint
npm run type-check   # Verificación de tipos TypeScript
```

## 📁 Estructura del Proyecto

```
vulkanbyte/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI reutilizables
│   ├── contact-section.tsx
│   ├── hero-section.tsx
│   └── ...
├── lib/                  # Utilidades y configuración
├── public/              # Archivos estáticos
├── styles/              # Estilos adicionales
└── ...
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno en el dashboard de Vercel
3. Despliega automáticamente con cada push

### Otros Proveedores

El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Vulkanbyte**
- Website: [vulkanbyte.com](https://vulkanbyte.com)
- Email: contacto@vulkanbyte.com
- WhatsApp: +52 (312) 310-8241

---

⭐ **¡Dale una estrella al proyecto si te fue útil!**
