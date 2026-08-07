// Fuente única de contenido del sitio. Cambiar un precio, un texto o un
// proyecto es editar este archivo — ningún componente debería tener datos
// escritos a mano en el JSX.

export type NavItem = {
  name: string
  href: string
}

export type Paquete = {
  slug: string
  nombre: string
  precio: number
  mensualidad: number
  entregaDias: number
  destacado: boolean
  paraQuien: string
  paginas: string
  textosRedactados: boolean
  fotosIncluidas: number
  whatsappMaps: boolean
  apareceEnGoogle: boolean
  formulario: boolean
  catalogo: string | null
  rondasCambios: number
}

export type Paso = {
  numero: number
  titulo: string
  descripcion: string
}

export type Proyecto = {
  title: string
  description: string
  technologies: string[]
  link: string
  category: string
}

export type PreguntaFrecuente = {
  pregunta: string
  respuesta: string
}

export type Adicional = {
  nombre: string
  precio: string
}

export const SITE = {
  nombre: "Vulkanbyte",
  whatsapp: "523123108241",
  whatsappDisplay: "+52 312 310 8241",
  email: "vulkanbyte@gmail.com",
  zona: "Colima y Villa de Álvarez, Colima",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vulkanbyte.vercel.app",
} as const

export const NAV: NavItem[] = [
  { name: "Paquetes", href: "#paquetes" },
  { name: "Cómo funciona", href: "#como-funciona" },
  { name: "Trabajos", href: "#trabajos" },
  { name: "Preguntas", href: "#preguntas" },
]

export const PAQUETES: Paquete[] = [
  {
    slug: "presencia",
    nombre: "Presencia",
    precio: 7500,
    mensualidad: 500,
    entregaDias: 10,
    destacado: false,
    paraQuien: "Negocio sin nada en línea",
    paginas: "1 (landing completa)",
    textosRedactados: true,
    fotosIncluidas: 5,
    whatsappMaps: true,
    apareceEnGoogle: true,
    formulario: false,
    catalogo: null,
    rondasCambios: 2,
  },
  {
    slug: "negocio",
    nombre: "Negocio",
    precio: 14000,
    mensualidad: 800,
    entregaDias: 15,
    destacado: true,
    paraQuien: "Negocio con varios servicios",
    paginas: "Hasta 5",
    textosRedactados: true,
    fotosIncluidas: 10,
    whatsappMaps: true,
    apareceEnGoogle: true,
    formulario: true,
    catalogo: null,
    rondasCambios: 2,
  },
  {
    slug: "catalogo",
    nombre: "Catálogo",
    precio: 25000,
    mensualidad: 1200,
    entregaDias: 25,
    destacado: false,
    paraQuien: "Restaurante, tienda, inmobiliaria",
    paginas: "Hasta 8",
    textosRedactados: true,
    fotosIncluidas: 15,
    whatsappMaps: true,
    apareceEnGoogle: true,
    formulario: true,
    catalogo: "30 productos",
    rondasCambios: 3,
  },
]

export const ADICIONALES: Adicional[] = [
  { nombre: "Página extra", precio: "$1,500" },
  { nombre: "Ronda de cambios extra", precio: "$800" },
  { nombre: "10 productos más en el catálogo", precio: "$1,200" },
  { nombre: "Correo con tu dominio", precio: "$900" },
  { nombre: "Entrega urgente", precio: "+40%" },
]

export const PASOS: Paso[] = [
  {
    numero: 1,
    titulo: "Platicamos",
    descripcion: "45 minutos en tu negocio, sábado. Me cuentas qué haces y a quién le vendes.",
  },
  {
    numero: 2,
    titulo: "Apartas tu lugar",
    descripcion: "60% de anticipo. Ahí arranco.",
  },
  {
    numero: 3,
    titulo: "Lo armo",
    descripcion: "Yo escribo los textos y elijo las fotos. Tú solo revisas.",
  },
  {
    numero: 4,
    titulo: "Sale en línea",
    descripcion: "Pagas el resto y tu página queda publicada.",
  },
]

export const PROYECTOS: Proyecto[] = [
  {
    title: "Safesocks",
    description:
      "Es una marca de calcetín Super Antiderrapante que posee una tinta exclusiva (antislipink) y única en su segmento.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.safesocks.mx",
    category: "E-commerce",
  },
  {
    title: "Dolce&Paca",
    description: "Es una tienda de ropa de paca, con precios accesibles y ropa de moda.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://dolce-paca.vercel.app",
    category: "Landing page",
  },
  {
    title: "RefZone",
    description:
      "Nuestro proyecto más ambicioso: un sitio web donde los organizadores de las canchas crean sus partidos y los árbitros pueden postularse, haciendo más fácil la labor de conseguirlos y optimizando el sistema actual.",
    technologies: ["React", "Next.js", "JS", "Tailwind CSS", "MongoDB"],
    link: "https://ref-zone.vercel.app",
    category: "Gestión",
  },
]

export const FAQ: PreguntaFrecuente[] = [
  {
    pregunta: "¿El dominio queda a mi nombre?",
    respuesta: "Sí, tuyo. Yo solo lo administro.",
  },
  {
    pregunta: "¿Y si dejo de pagar la mensualidad?",
    respuesta: "Tienes 30 días. Después se despublica, no se borra.",
  },
  {
    pregunta: "¿Puedo pedir cambios después?",
    respuesta: "Sí, los chicos van incluidos en la mensualidad.",
  },
  {
    pregunta: "¿Dan factura?",
    respuesta: "Sí.",
  },
  {
    pregunta: "¿Yo escribo los textos?",
    respuesta: "No. Yo los escribo con lo que me cuentes.",
  },
  {
    pregunta: "¿Y si no tengo fotos?",
    respuesta: "El paquete incluye fotos profesionales.",
  },
]

export function whatsappHref(mensaje: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export function formatMXN(valor: number) {
  return valor.toLocaleString("es-MX")
}
