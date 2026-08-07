import { Check, Minus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { PAQUETES, ADICIONALES, formatMXN, whatsappHref } from "@/lib/content"

function Spec({ label, value }: { label: string; value: boolean | string | null }) {
  const isBool = typeof value === "boolean"
  return (
    <li className="flex items-start justify-between gap-4 py-2 border-b border-border/60 last:border-0">
      <span className="text-small text-muted-foreground">{label}</span>
      {isBool ? (
        value ? (
          <Check className="h-4 w-4 shrink-0 text-agave mt-0.5" strokeWidth={1.5} aria-label="Incluido" />
        ) : (
          <Minus className="h-4 w-4 shrink-0 text-humo mt-0.5" strokeWidth={1.5} aria-label="No incluido" />
        )
      ) : (
        <span className="text-small text-mono text-right">{value ?? "—"}</span>
      )}
    </li>
  )
}

export default function PaquetesSection() {
  return (
    <section id="paquetes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-h2 font-semibold text-foreground mb-4">Paquetes</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Tres opciones con precio fijo. Sin cotizar a ciegas: eliges, apartas tu lugar y arrancamos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PAQUETES.map((p) => {
            const destacado = p.destacado
            return (
              <Reveal key={p.slug}>
                <Card
                  className={
                    destacado
                      ? "bg-basalto text-white border-basalto h-full flex flex-col"
                      : "h-full flex flex-col"
                  }
                >
                  <CardHeader>
                    <span
                      aria-hidden={!destacado}
                      className={
                        destacado
                          ? "inline-block w-fit text-mono uppercase text-magma bg-white/10 px-2 py-1 rounded mb-2"
                          : "invisible inline-block w-fit text-mono uppercase px-2 py-1 rounded mb-2"
                      }
                    >
                      Recomendado
                    </span>
                    <CardTitle className="text-h3">{p.nombre}</CardTitle>
                    <p className={destacado ? "text-small text-white/70" : "text-small text-muted-foreground"}>
                      {p.paraQuien}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1">
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-mono text-3xl tabular-nums">${formatMXN(p.precio)}</span>
                      <span className={destacado ? "text-small text-white/70" : "text-small text-muted-foreground"}>
                        + IVA
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="text-mono text-small tabular-nums">${formatMXN(p.mensualidad)}/mes de mensualidad</span>
                      <p className={destacado ? "text-small text-white/60 mt-1" : "text-small text-muted-foreground mt-1"}>
                        Cubre el hosting, el dominio, los respaldos y los cambios chicos. Sin pagar la mensualidad,
                        el sitio no se queda en línea.
                      </p>
                    </div>

                    <ul className="mb-6">
                      <Spec label="Entrega" value={`${p.entregaDias} días`} />
                      <Spec label="Páginas" value={p.paginas} />
                      <Spec label="Textos redactados" value={p.textosRedactados} />
                      <Spec label="Fotos incluidas" value={`${p.fotosIncluidas}`} />
                      <Spec label="WhatsApp y Maps" value={p.whatsappMaps} />
                      <Spec label="Configurado para que Google lo encuentre" value={p.apareceEnGoogle} />
                      <Spec label="Formulario" value={p.formulario} />
                      <Spec label="Catálogo o menú" value={p.catalogo} />
                      <Spec label="Rondas de cambios" value={`${p.rondasCambios}`} />
                    </ul>

                    <Button asChild className="w-full mt-auto">
                      <a
                        href={whatsappHref(`Hola, me interesa el paquete ${p.nombre}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Quiero el paquete {p.nombre}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-small text-muted-foreground mb-3">Todos los precios son + IVA.</p>
          <details className="inline-block text-left mx-auto">
            <summary className="cursor-pointer text-small text-muted-foreground hover:text-foreground transition-colors">
              Ver adicionales
            </summary>
            <ul className="mt-3 space-y-1">
              {ADICIONALES.map((a) => (
                <li key={a.nombre} className="flex items-center justify-between gap-8 text-small">
                  <span className="text-muted-foreground">{a.nombre}</span>
                  <span className="text-mono tabular-nums">{a.precio}</span>
                </li>
              ))}
            </ul>
          </details>
        </Reveal>
      </div>
    </section>
  )
}
