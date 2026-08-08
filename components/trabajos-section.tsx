import { ExternalLink, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { PROYECTOS } from "@/lib/content"

export default function TrabajosSection() {
  return (
    <section id="trabajos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-h2 font-semibold text-foreground mb-4">Trabajos</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Algunos de los sitios que he desarrollado.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROYECTOS.map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full flex flex-col group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={
                        item.demo
                          ? "text-mono uppercase text-muted-foreground border border-dashed border-humo px-2 py-1 rounded"
                          : "text-mono uppercase text-agave bg-agave/10 px-2 py-1 rounded"
                      }
                    >
                      {item.category}
                    </span>
                    <Globe className="h-5 w-5 text-humo" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-h3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground text-small leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-small text-muted-foreground px-2 py-1 rounded border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full mt-auto">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Ver proyecto
                      <ExternalLink className="ml-2 h-4 w-4" strokeWidth={1.5} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Quieres ver más o platicar tu idea?</p>
          <Button asChild size="lg">
            <a href="#contacto">Hablemos de tu proyecto</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
