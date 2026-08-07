import { Reveal } from "@/components/reveal"
import { FAQ } from "@/lib/content"

export default function FaqSection() {
  return (
    <section id="preguntas" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-h2 font-semibold text-foreground mb-4">Preguntas frecuentes</h2>
        </Reveal>

        <Reveal className="max-w-2xl mx-auto divide-y divide-border">
          {FAQ.map((item) => (
            <details key={item.pregunta} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-foreground font-medium">
                {item.pregunta}
                <span className="text-agave shrink-0 transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground text-small leading-relaxed">{item.respuesta}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
