import { NAV, SITE, whatsappHref } from "@/lib/content"

export default function Footer() {
  return (
    <footer className="bg-basalto text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-h3 font-display font-semibold mb-4">{SITE.nombre}</h3>
            <p className="text-white/70 text-small leading-relaxed">
              Páginas web para negocios de {SITE.zona}.
            </p>
          </div>

          <div>
            <h4 className="text-mono uppercase text-white/70 mb-4">Sitio</h4>
            <ul className="text-white/80 text-small">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-block py-2 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-mono uppercase text-white/70 mb-4">Contacto</h4>
            <ul className="text-white/80 text-small">
              <li className="py-2">{SITE.email}</li>
              <li>
                <a
                  href={whatsappHref("Hola Vulkanbyte, me interesa una página web.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 hover:text-white transition-colors"
                >
                  {SITE.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/70 text-small">© 2026 {SITE.nombre}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
