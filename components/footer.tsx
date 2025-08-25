import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-mono">Vulkanbyte</h3>
            <p className="text-background/80 mb-4 font-serif leading-relaxed">
              Especialistas en desarrollo web que transforman ideas en experiencias digitales excepcionales. Tu éxito
              digital es nuestra pasión.
            </p>
            <p className="text-background/60 text-sm font-serif">© 2024 Vulkanbyte. Todos los derechos reservados.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80 font-serif">
              <li>Desarrollo Web</li>
              <li>Diseño Responsivo</li>
              <li>E-commerce</li>
              <li>Optimización SEO</li>
              <li>Mantenimiento</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80 font-serif">
              <li>contacto@vulkanbyte.com</li>
              <li>+1 (555) 123-4567</li>
              <li>WhatsApp disponible</li>
              <li>Consulta gratuita</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 font-serif flex items-center justify-center">
            Hecho con <Heart className="h-4 w-4 mx-2 text-red-400" /> por el equipo de Vulkanbyte
          </p>
        </div>
      </div>
    </footer>
  )
}
