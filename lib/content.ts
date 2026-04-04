export const SITE = {
  name: "Write2Improve",
  tagline: "Practica y mejora tu writing.\nSin complicaciones.",
  description:
    "Write2Improve es un bot de práctica y corrección de writing que permite solicitar tareas, recibirlas, enviar la redacción y obtener una corrección estructurada y útil de forma clara, rápida y fácil de seguir.",
  contact: "info@write2improve.com",
  disclaimer:
    "Write2Improve no es una herramienta oficial ni autorizada por Cambridge Assessment English.",
}

export const NAV_LINKS = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Niveles", href: "#niveles" },
  { label: "Para academias", href: "#para-academias" },
  { label: "Contacto", href: "#contacto" },
]

export const STEPS = [
  {
    number: "01",
    title: "Pide una tarea",
    description:
      "El alumno indica el nivel y el tipo de writing que quiere practicar. La petición es directa y sin fricciones.",
  },
  {
    number: "02",
    title: "Recibe el enunciado",
    description:
      "Un enunciado completo, claro y listo para responder. El alumno sabe exactamente qué debe hacer.",
  },
  {
    number: "03",
    title: "Envía la redacción",
    description:
      "Dentro del mismo flujo. Pedir, recibir, escribir y entregar forman un recorrido natural y reconocible.",
  },
  {
    number: "04",
    title: "Recibe la corrección",
    description:
      "Un informe ordenado con nota, criterios, errores principales, mejora propuesta y resumen del examinador.",
  },
]

export const FEEDBACK_ITEMS = [
  {
    title: "Criterios de evaluación",
    description:
      "Content, Communicative Achievement, Organisation y Language — cada uno con puntuación y justificación.",
  },
  {
    title: "Puntuación global",
    description:
      "Nota total del writing para situarse en franja fuerte, media o débil dentro del nivel.",
  },
  {
    title: "Errores principales",
    description:
      "Los fallos que realmente afectan a la precisión o la claridad del texto. Sin ruido irrelevante.",
  },
  {
    title: "Mejora del texto",
    description:
      "Versión mejorada completa o frases mejoradas según el nivel de partida del alumno.",
  },
  {
    title: "Resumen del examinador",
    description:
      "Cierre en tono evaluador que condensa la impresión global y señala la mejora más importante.",
  },
  {
    title: "Recuento de palabras",
    description:
      "Aviso inmediato cuando la redacción queda fuera de la extensión recomendada para el nivel.",
  },
]

export const LEVELS: {
  level: string
  color: "blue" | "green" | "purple"
  types: string[]
  wordCount: string
}[] = [
  {
    level: "B1",
    color: "blue",
    types: ["Email", "Story", "Article"],
    wordCount: "100–120 palabras",
  },
  {
    level: "B2",
    color: "green",
    types: ["Essay", "Review", "Article", "Email", "Report"],
    wordCount: "140–190 palabras",
  },
  {
    level: "C1",
    color: "purple",
    types: ["Essay", "Review", "Article", "Email", "Report", "Proposal"],
    wordCount: "220–260 palabras",
  },
]

export const ACADEMY_FEATURES = [
  {
    title: "Control de acceso",
    description:
      "Gestiona quién está autorizado a usar el sistema. Acceso ordenado y limitado a usuarios válidos.",
  },
  {
    title: "Tareas fijas y campañas",
    description:
      "Prepara writings cerrados, simulaciones planificadas o ejercicios asociados a códigos concretos.",
  },
  {
    title: "Experiencia homogénea",
    description:
      "El mismo nivel de servicio entre alumnos, niveles y grupos. Sin variaciones ni sorpresas.",
  },
  {
    title: "Sin gestión manual",
    description:
      "El sistema entrega tareas y devuelve correcciones de forma automática. La academia no interviene en cada interacción.",
  },
]
