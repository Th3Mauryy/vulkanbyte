import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { SITE, whatsappHref } from "@/lib/content"

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto text-center">
        <Reveal>
          <h1 className="text-display font-semibold text-foreground mb-6 text-balance">
            Páginas web para negocios de {SITE.zona.split(",")[0]}
          </h1>
          <p className="text-body text-muted-foreground mb-10 max-w-2xl mx-auto">
            Tu página lista en 10 días. Te contesto en menos de 24 horas. Precios visibles, sin cotizar a ciegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" className="text-base px-8">
              <a href={whatsappHref("Hola Vulkanbyte, me interesa una página web.")} target="_blank" rel="noopener noreferrer">
                Escríbeme por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="#paquetes">Ver paquetes</a>
            </Button>
          </div>
          <p className="text-mono uppercase text-muted-foreground">
            Desde $7,500 + IVA · Precio fijo, sin sorpresas · {SITE.zona}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
