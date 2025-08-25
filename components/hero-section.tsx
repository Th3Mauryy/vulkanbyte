"use client"

import { Button } from "@/components/ui/button"
import { Code, Zap, Globe } from "lucide-react"

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Vulkanbyte</span>
            <br />
            Desarrollo Web Profesional
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            Transformamos tus ideas en sitios web modernos, funcionales y optimizados. Especialistas en crear
            experiencias digitales que impulsan tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
              Comenzar Proyecto
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#portafolio")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8"
            >
              Ver Portafolio
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Código Limpio</h3>
              <p className="text-muted-foreground text-center font-serif">
                Desarrollamos con las mejores prácticas y tecnologías modernas
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rendimiento Óptimo</h3>
              <p className="text-muted-foreground text-center font-serif">
                Sitios web rápidos y optimizados para todos los dispositivos
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Presencia Digital</h3>
              <p className="text-muted-foreground text-center font-serif">
                Creamos tu identidad online con diseño profesional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
