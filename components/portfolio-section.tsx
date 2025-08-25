"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"

const portfolioItems = [
  {
    title: "E-commerce Moderno",
    description: "Tienda online completa con carrito de compras, pasarela de pagos y panel administrativo.",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    link: "#",
    category: "E-commerce",
  },
  {
    title: "Landing Page Corporativa",
    description: "Sitio web institucional con diseño responsivo y optimización SEO para empresa de servicios.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    category: "Corporativo",
  },
  {
    title: "Aplicación Web SaaS",
    description: "Plataforma de gestión empresarial con dashboard interactivo y sistema de usuarios.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    category: "SaaS",
  },
  {
    title: "Portfolio Creativo",
    description: "Sitio web personal para artista con galería interactiva y sistema de contacto.",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    link: "#",
    category: "Portfolio",
  },
  {
    title: "Blog Profesional",
    description: "Blog corporativo con CMS personalizado y sistema de comentarios integrado.",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    link: "#",
    category: "Blog",
  },
  {
    title: "App de Reservas",
    description: "Sistema de reservas online con calendario interactivo y notificaciones automáticas.",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    link: "#",
    category: "Aplicación",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nuestro Portafolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes. Cada uno representa nuestro
            compromiso con la excelencia y la innovación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  Ver Proyecto
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-serif mb-4">¿Quieres ver más proyectos o discutir tu idea?</p>
          <Button size="lg" onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}>
            Hablemos de tu Proyecto
          </Button>
        </div>
      </div>
    </section>
  )
}
