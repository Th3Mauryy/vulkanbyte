import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Quiénes Somos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Somos Vulkanbyte, una empresa especializada en desarrollo web que combina creatividad y tecnología para
            crear soluciones digitales excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Nuestra Historia</h3>
            <p className="text-muted-foreground mb-6 font-serif leading-relaxed">
              Fundada con la visión de democratizar el acceso a tecnología web de calidad, Vulkanbyte nació de la pasión
              por crear experiencias digitales que realmente marquen la diferencia para nuestros clientes.
            </p>
            <p className="text-muted-foreground mb-6 font-serif leading-relaxed">
              Nuestro equipo combina años de experiencia en desarrollo web con un enfoque fresco e innovador,
              garantizando que cada proyecto sea único y esté perfectamente adaptado a las necesidades específicas de
              cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Equipo Especializado</h4>
                </div>
                <p className="text-muted-foreground font-serif">
                  Profesionales dedicados con experiencia en las últimas tecnologías web
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Enfoque Personalizado</h4>
                </div>
                <p className="text-muted-foreground font-serif">
                  Cada proyecto es único y se adapta completamente a tus objetivos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Innovación Constante</h4>
                </div>
                <p className="text-muted-foreground font-serif">
                  Siempre actualizados con las tendencias y mejores prácticas del sector
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
