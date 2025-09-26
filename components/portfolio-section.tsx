"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"

const portfolioItems = [
  {
    title: "Safesocks",
    description: "Es una marca de calcetín Super Antiderrapante que posee una tinta exclusiva (antislipink) y única en su segmento.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.safesocks.mx",
    category: "E-commerce",
  },
  {
    title: "Dolce&Paca",
    description: "Es una tienda de ropa de paca, con precios accesible y ropa de moda.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://dolce-paca.vercel.app",
    category: "Landing page",
  },
  {
    title: "RefZone",
    description: "Nuestro proyecto mas ambicioso, es de un sitio web donde los organizadores de las canchas crearan sus partido y los arbtitros podran postularse, haciendo mas facil la labor de conseguirlos y optimizar el sistema actual.",
    technologies: ["React", "Next.js", "JS", "Tailwind CSS", "MongoDB"],
    link: "https://ref-zone.vercel.app",
    category: "Gestión",
  }
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
