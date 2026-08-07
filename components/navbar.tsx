"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV, SITE, whatsappHref } from "@/lib/content"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border z-50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#inicio" className="flex-shrink-0">
            <Image
              src="/vulkan-logo.png"
              alt={SITE.nombre}
              width={1024}
              height={334}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-agave px-3 py-2 rounded text-small font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button asChild size="sm" className="ml-2">
              <a href={whatsappHref("Hola Vulkanbyte, me interesa una página web.")} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1 bg-card rounded-lg p-2 border border-border">
              {NAV.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-agave block px-3 py-2 rounded text-base font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={whatsappHref("Hola Vulkanbyte, me interesa una página web.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-primary px-3 py-2 rounded text-base font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
