"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes integrar con tu API de contacto
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola Vulkanbyte! Me interesa conocer más sobre sus servicios de desarrollo web.`,
    )
    // Reemplaza con tu número de WhatsApp
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contacto</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif">
            ¿Tienes un proyecto en mente? Nos encantaría escuchar tu idea y ayudarte a convertirla en realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif">contacto@vulkanbyte.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif">Disponible en toda Latinoamérica</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">¡Hablemos por WhatsApp!</h3>
                </div>
                <p className="mb-4 font-serif opacity-90">
                  ¿Prefieres una conversación más directa? Contáctanos por WhatsApp y te responderemos de inmediato.
                </p>
                <Button variant="secondary" onClick={handleWhatsApp} className="w-full">
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-2 font-serif text-muted-foreground">
                  <li>✓ Respuesta rápida en menos de 24 horas</li>
                  <li>✓ Presupuesto gratuito y sin compromiso</li>
                  <li>✓ Asesoramiento personalizado</li>
                  <li>✓ Soporte continuo post-lanzamiento</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
