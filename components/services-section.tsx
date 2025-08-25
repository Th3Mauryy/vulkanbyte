import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Smartphone, ShoppingCart, Search, Palette, Settings } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Desarrollo Web Personalizado",
    description: "Sitios web únicos diseñados específicamente para tu negocio y objetivos.",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsivo",
    description: "Experiencias perfectas en todos los dispositivos: móvil, tablet y desktop.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas con sistemas de pago y gestión de inventario.",
  },
  {
    icon: Search,
    title: "Optimización SEO",
    description: "Mejoramos tu visibilidad en buscadores para atraer más clientes.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que convierten visitantes en clientes.",
  },
  {
    icon: Settings,
    title: "Mantenimiento Web",
    description: "Soporte continuo para mantener tu sitio actualizado y funcionando perfectamente.",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Ofrecemos soluciones completas de desarrollo web adaptadas a las necesidades específicas de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <service.icon className="h-10 w-10 text-primary mr-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
