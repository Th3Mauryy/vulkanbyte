"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { SITE, whatsappHref } from "@/lib/content"

const RATE_LIMIT_MS = 60_000
const RATE_LIMIT_KEY = "vulkanbyte_last_submit"

type Status = "idle" | "sending" | "success" | "error"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [errorMessage, setErrorMessage] = useState("")
  // Campo trampa: invisible para personas, casi siempre lo rellenan los bots.
  const honeypotRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot: si viene lleno, es un bot. Fingimos éxito y no gastamos cuota de EmailJS.
    if (honeypotRef.current?.value) {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      return
    }

    const lastSubmit = Number(window.localStorage.getItem(RATE_LIMIT_KEY) || 0)
    if (Date.now() - lastSubmit < RATE_LIMIT_MS) {
      setErrors({ general: "Ya enviaste un mensaje hace un momento. Espera un minuto antes de mandar otro." })
      setStatus("error")
      return
    }

    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres"
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "El nombre no puede exceder 50 caracteres"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Por favor ingresa un email válido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "El mensaje no puede exceder 1000 caracteres"
    }

    const spamKeywords = ["spam", "viagra", "casino", "lottery", "winner"]
    const messageContent = formData.message.toLowerCase()
    if (spamKeywords.some((keyword) => messageContent.includes(keyword))) {
      newErrors.message = "El mensaje contiene contenido no permitido"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus("error")
      return
    }

    setErrors({})
    setStatus("sending")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        `El formulario no está disponible en este momento. Escríbenos por WhatsApp al ${SITE.whatsappDisplay} y te respondemos directo.`,
      )
      setStatus("error")
      return
    }

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_name: "Vulkanbyte",
        reply_to: formData.email.trim(),
      }

      const result = await emailjs.send(serviceId, templateId, templateParams, { publicKey })

      if (result.status === 200) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        window.localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()))
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setErrorMessage(
        `No se pudo enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp al ${SITE.whatsappDisplay}.`,
      )
      setStatus("error")
    }
  }

  const handleWhatsApp = () => {
    window.open(whatsappHref("Hola Vulkanbyte, me interesa conocer más sobre sus paquetes."), "_blank")
  }

  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display font-semibold text-foreground mb-4">Contacto</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un negocio en {SITE.zona.split(",")[0]}? Cuéntame qué necesitas y te contesto el mismo día.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-h3">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot: oculto para personas, visible para bots que rellenan todo */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="empresa_web"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
                />

                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-mono uppercase text-muted-foreground">
                    Nombre
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="¿Cómo te llamas?"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: "" })
                    }}
                    className={errors.name ? "border-destructive" : ""}
                    maxLength={50}
                    required
                  />
                  {errors.name && <p className="text-destructive text-small mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-mono uppercase text-muted-foreground">
                    Correo
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: "" })
                    }}
                    className={errors.email ? "border-destructive" : ""}
                    required
                  />
                  {errors.email && <p className="text-destructive text-small mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-mono uppercase text-muted-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Cuéntame de tu negocio y qué necesitas..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: "" })
                    }}
                    className={errors.message ? "border-destructive" : ""}
                    maxLength={1000}
                    required
                  />
                  {errors.message && <p className="text-destructive text-small mt-1">{errors.message}</p>}
                  <p className="text-small text-muted-foreground mt-1">{formData.message.length}/1000 caracteres</p>
                </div>

                <Button type="submit" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                </Button>

                {status === "success" && (
                  <div className="border border-agave/30 bg-agave/10 text-agave px-4 py-3 rounded text-center">
                    <p className="font-medium">Mensaje enviado. Te respondo en menos de 24 horas.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="border border-destructive/30 bg-destructive/10 text-destructive px-4 py-3 rounded text-center space-y-2">
                    <p className="font-medium">{errors.general || errorMessage || "Algo no salió bien."}</p>
                    <Button type="button" variant="outline" size="sm" onClick={handleWhatsApp} className="w-full">
                      Escribir por WhatsApp
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-h3 font-semibold mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-agave mr-3" strokeWidth={1.5} />
                    <span>{SITE.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-agave mr-3" strokeWidth={1.5} />
                    <span>{SITE.whatsappDisplay}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-agave mr-3" strokeWidth={1.5} />
                    <span>{SITE.zona}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-basalto text-white border-basalto">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 mr-3" strokeWidth={1.5} />
                  <h3 className="text-h3 font-semibold">¡Hablemos por WhatsApp!</h3>
                </div>
                <p className="mb-4 text-white/80">
                  ¿Prefieres una conversación directa? Te contesto el mismo día.
                </p>
                <Button variant="secondary" onClick={handleWhatsApp} className="w-full">
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-h3 font-semibold mb-4">¿Por qué trabajar conmigo?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Respuesta el mismo día</li>
                  <li>Precios visibles, sin cotizar a ciegas</li>
                  <li>Trato directo, sin intermediarios</li>
                  <li>Soporte incluido en la mensualidad</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
