import type React from "react"
import type { Metadata } from "next"
import { Inter, Open_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Vulkanbyte - Desarrollo Web Profesional",
    template: "%s | Vulkanbyte"
  },
  description: "Vulkanbyte se especializa en desarrollo web moderno. Creamos sitios web profesionales, aplicaciones web personalizadas y soluciones digitales que impulsan tu negocio.",
  keywords: [
    "desarrollo web",
    "diseño web",
    "aplicaciones web", 
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "sitios web profesionales",
    "Vulkanbyte",
    "desarrollo frontend",
    "desarrollo backend"
  ],
  authors: [{ name: "Vulkanbyte", url: "https://vulkanbyte.com" }],
  creator: "Vulkanbyte",
  publisher: "Vulkanbyte",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vulkanbyte.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vulkanbyte - Desarrollo Web Profesional",
    description: "Especialistas en desarrollo web moderno. Creamos sitios web profesionales y aplicaciones web que impulsan tu negocio.",
    url: '/',
    siteName: 'Vulkanbyte',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/vulkan-logo.png',
        width: 1200,
        height: 630,
        alt: 'Vulkanbyte - Desarrollo Web Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vulkanbyte - Desarrollo Web Profesional",
    description: "Especialistas en desarrollo web moderno. Creamos sitios web profesionales y aplicaciones web que impulsan tu negocio.",
    images: ['/vulkan-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/vulkan-icon.ico",
    shortcut: "/vulkan-icon.ico",
    apple: "/vulkan-icon.ico",
  },
  verification: {
    google: "google-site-verification-code", // Agregar cuando configures Google Search Console
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${openSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/vulkan-icon.ico?v=1" sizes="32x32" />
        <link rel="shortcut icon" href="/vulkan-icon.ico?v=1" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
