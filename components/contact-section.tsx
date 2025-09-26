"use client"

import type React from "react"
import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser'
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
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isEmailJSInitialized, setIsEmailJSInitialized] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0)

  // Inicializar EmailJS una sola vez
  useEffect(() => {
    try {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'y7MwRbmutgaGhO3nI'
      console.log('Initializing EmailJS with public key:', publicKey)
      emailjs.init(publicKey)
      setIsEmailJSInitialized(true)
      console.log('EmailJS initialized successfully')
    } catch (error) {
      console.error('Error initializing EmailJS:', error)
      setSubmitStatus('error')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Verificar que EmailJS esté inicializado
    if (!isEmailJSInitialized) {
      console.error('EmailJS not initialized')
      setSubmitStatus('error')
      return
    }

    // Rate limiting: 1 email cada 60 segundos
    const now = Date.now()
    if (now - lastSubmitTime < 60000) {
      setErrors({ general: 'Por favor espera 1 minuto antes de enviar otro mensaje.' })
      setSubmitStatus('error')
      return
    }

    // Validaciones mejoradas
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'El nombre no puede exceder 50 caracteres'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Por favor ingresa un email válido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'El mensaje no puede exceder 1000 caracteres'
    }

    // Validación anti-spam básica
    const spamKeywords = ['spam', 'viagra', 'casino', 'lottery', 'winner']
    const messageContent = formData.message.toLowerCase()
    if (spamKeywords.some(keyword => messageContent.includes(keyword))) {
      newErrors.message = 'El mensaje contiene contenido no permitido'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitStatus('error')
      return
    }

    setErrors({})

    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      // Configuración con variables estándar de EmailJS
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_name: "Vulkanbyte Team",
        reply_to: formData.email.trim()
      }

      console.log('Sending email with params:', templateParams)

      // Enviar email usando EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_yvy9tra'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_sl4ztba'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'y7MwRbmutgaGhO3nI'

      console.log('EmailJS Configuration:')
      console.log('Service ID:', serviceId)
      console.log('Template ID:', templateId)
      console.log('Public Key:', publicKey.substring(0, 8) + '...')

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      )
      
      console.log('Email sent successfully:', result)

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", message: "" })
        setLastSubmitTime(now)
        
        // Limpiar console logs en producción
        if (process.env.NODE_ENV === 'development') {
          console.log('Email sent successfully:', result)
        }
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola Vulkanbyte! Me interesa conocer más sobre sus servicios de desarrollo web.`,
    )
    // Reemplaza con tu número de WhatsApp
    window.open(`https://wa.me/523123108241?text=${message}`, "_blank")
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
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: '' })
                    }}
                    className={errors.name ? 'border-red-500' : ''}
                    maxLength={50}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: '' })
                    }}
                    className={errors.email ? 'border-red-500' : ''}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: '' })
                    }}
                    className={errors.message ? 'border-red-500' : ''}
                    maxLength={1000}
                    required
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000 caracteres
                  </p>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading || !isEmailJSInitialized}>
                  {isLoading ? 'Enviando...' : !isEmailJSInitialized ? 'Inicializando...' : 'Enviar Mensaje'}
                </Button>
                
                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-center">
                    <div className="flex items-center justify-center">
                      <span className="text-green-600 mr-2">✅</span>
                      <span className="font-medium">¡Mensaje enviado correctamente! Te responderemos pronto.</span>
                    </div>
                  </div>
                )}
                {(submitStatus === 'error' || errors.general) && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-center">
                    <div className="flex items-center justify-center">
                      <span className="text-red-600 mr-2">❌</span>
                      <div>
                        <p className="font-medium">
                          {errors.general || 'Error al enviar el mensaje.'}
                        </p>
                        {!errors.general && (
                          <p className="text-sm mt-1">Por favor, verifica tu conexión e intenta de nuevo, o contáctanos por WhatsApp.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {!isEmailJSInitialized && (
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-md text-center">
                    <span className="text-yellow-600 mr-2">⚠️</span>
                    <span className="font-medium">Inicializando sistema de correo...</span>
                  </div>
                )}
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
                    <span className="font-serif">vulkanbyte@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif">+52 (312) 310-8241</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif">Disponible alrededor del mundo</span>
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
