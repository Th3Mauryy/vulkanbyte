import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Public_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { SITE, FAQ } from "@/lib/content"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Páginas web en Colima y Villa de Álvarez | Vulkanbyte",
    template: "%s | Vulkanbyte",
  },
  description:
    "Diseño sitios web para negocios de Colima. Desde $7,500, entrega desde 10 días. Textos y fotos incluidos.",
  authors: [{ name: "Vulkanbyte", url: SITE.url }],
  creator: "Vulkanbyte",
  publisher: "Vulkanbyte",
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Páginas web en Colima y Villa de Álvarez | Vulkanbyte",
    description:
      "Diseño sitios web para negocios de Colima. Desde $7,500, entrega desde 10 días. Textos y fotos incluidos.",
    url: "/",
    siteName: "Vulkanbyte",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Páginas web en Colima y Villa de Álvarez | Vulkanbyte",
    description:
      "Diseño sitios web para negocios de Colima. Desde $7,500, entrega desde 10 días. Textos y fotos incluidos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/vulkan-icon.ico",
    shortcut: "/vulkan-icon.ico",
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.nombre,
    url: SITE.url,
    email: SITE.email,
    telephone: "+523123108241",
    areaServed: ["Colima", "Villa de Álvarez"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colima",
      addressRegion: "Colima",
      addressCountry: "MX",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-MX"
      className={`${bricolage.variable} ${publicSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
