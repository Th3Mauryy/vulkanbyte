import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Pasión por la Excelencia",
    description: "Cada línea de código refleja nuestro compromiso con la calidad y la perfección en cada detalle.",
  },
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Comunicación clara y honesta en cada etapa del proyecto. Sin sorpresas, solo resultados.",
  },
  {
    icon: Zap,
    title: "Innovación Constante",
    description: "Adoptamos las últimas tecnologías y tendencias para mantener tu proyecto a la vanguardia.",
  },
  {
    icon: Users,
    title: "Colaboración Cercana",
    description: "Trabajamos contigo como socios, no solo como proveedores. Tu éxito es nuestro éxito.",
  },
]

export default function ValuesSection() {
  return (
    <section id="valores" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nuestros Valores</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Los principios que guían cada decisión y cada línea de código que escribimos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground font-serif leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
