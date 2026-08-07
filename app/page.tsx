import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PaquetesSection from "@/components/paquetes-section"
import PasosSection from "@/components/pasos-section"
import TrabajosSection from "@/components/trabajos-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PaquetesSection />
      <PasosSection />
      <TrabajosSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
