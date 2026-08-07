import { Reveal } from "@/components/reveal"
import { PASOS } from "@/lib/content"

export default function PasosSection() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-[1100px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-h2 font-semibold text-foreground mb-4">Cómo funciona</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Cuatro pasos. Tú casi no tienes que hacer nada.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {PASOS.map((paso) => (
            <Reveal key={paso.numero}>
              <div className="flex flex-col gap-3">
                <span className="text-mono text-muted-foreground">0{paso.numero}</span>
                <h3 className="text-h3 font-semibold text-foreground">{paso.titulo}</h3>
                <p className="text-muted-foreground text-small leading-relaxed">{paso.descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
