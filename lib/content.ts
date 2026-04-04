export type Lang = "es" | "en"

export const CONTENT = {
  es: {
    site: {
      name: "Write2Improve",
      tagline: "Practica y mejora tu writing.\nSin complicaciones.",
      description:
        "Write2Improve es un bot de práctica y corrección de writing que permite solicitar tareas, recibirlas, enviar la redacción y obtener una corrección estructurada y útil de forma clara, rápida y fácil de seguir.",
      contact: "info@write2improve.com",
      disclaimer:
        "Write2Improve no es una herramienta oficial ni autorizada por Cambridge Assessment English.",
      ctaPrimary: "Solicitar demo",
      ctaSecondary: "Ver cómo funciona →",
    },
    nav: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Niveles", href: "#niveles" },
      { label: "Para academias", href: "#para-academias" },
      { label: "Contacto", href: "#contacto" },
    ],
    hero: {
      eyebrow: "Preparación para exámenes de inglés B1 · B2 · C1",
      stats: [
        { value: "3 niveles", label: "B1, B2 y C1" },
        { value: "11 tipos", label: "de writing para exámenes" },
        { value: "4 criterios", label: "de evaluación oficial" },
      ],
    },
    enUnaFrase: {
      label: "La idea clave",
      quote:
        '"No es solo un corrector. Es un sistema completo de interacción con el writing: desde que el alumno pide una tarea hasta que recibe una valoración detallada y accionable."',
      sub: "Pedir una tarea, recibirla lista para responder, enviar la redacción y obtener feedback estructurado — todo en un mismo recorrido natural.",
    },
    comoFunciona: {
      label: "El proceso",
      title: "Cómo funciona",
      sub: "Cuatro pasos. Sin curva de aprendizaje. El alumno lo entiende desde el primer uso.",
      steps: [
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
      ],
    },
    queRecibe: {
      label: "El feedback",
      title: "Qué recibe el alumno",
      sub: "No una nota genérica. Un informe completo que permite entender qué ha salido bien, qué ha fallado y cómo mejorar.",
      items: [
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
      ],
    },
    niveles: {
      label: "Cobertura",
      title: "Niveles que cubre",
      sub: "Desde el B1 hasta el C1, con todos los tipos de writing que aparecen en los exámenes Cambridge.",
      wordCountLabel: "Extensión orientativa",
      levels: [
        {
          level: "B1",
          color: "blue" as const,
          types: ["Email", "Story", "Article"],
          wordCount: "100–120 palabras",
        },
        {
          level: "B2",
          color: "green" as const,
          types: ["Essay", "Review", "Article", "Email", "Report"],
          wordCount: "140–190 palabras",
        },
        {
          level: "C1",
          color: "purple" as const,
          types: ["Essay", "Review", "Article", "Email", "Report", "Proposal"],
          wordCount: "220–260 palabras",
        },
      ],
    },
    paraAcademias: {
      label: "Para academias",
      title: "Una herramienta de apoyo docente y operativo",
      body1:
        "Write2Improve no solo sirve para el alumno. La academia tiene el control total del servicio: quién accede, qué tareas se ofrecen y cómo se gestiona todo sin depender de procesos manuales.",
      body2:
        "Una experiencia homogénea entre alumnos y niveles, con una base sólida para escalar el servicio a otras academias.",
      cta: "Solicitar demo para mi academia",
      features: [
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
      ],
    },
    ctaFinal: {
      title: "¿Quieres ofrecer esto en tu academia?",
      sub: "Cuéntanos qué necesitas. Te explicamos cómo encaja Write2Improve en tu academia y cómo empezar.",
      cta: "Solicitar demo",
      note: "Sin compromiso. Respondemos en menos de 24 horas.",
    },
    footer: {
      links: ["Academias", "Alumnos", "Precios", "Contacto"],
    },
  },

  en: {
    site: {
      name: "Write2Improve",
      tagline: "Practice and improve your writing.\nSimple and effective.",
      description:
        "Write2Improve is a writing practice and correction bot that lets you request tasks, receive them, submit your writing and get structured, useful feedback — clear, fast and easy to follow.",
      contact: "info@write2improve.com",
      disclaimer:
        "Write2Improve is not an official tool and is not endorsed by Cambridge Assessment English.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "See how it works →",
    },
    nav: [
      { label: "How it works", href: "#como-funciona" },
      { label: "Levels", href: "#niveles" },
      { label: "For academies", href: "#para-academias" },
      { label: "Contact", href: "#contacto" },
    ],
    hero: {
      eyebrow: "Preparation for English exams B1 · B2 · C1",
      stats: [
        { value: "3 levels", label: "B1, B2 and C1" },
        { value: "11 types", label: "of exam writing tasks" },
        { value: "4 criteria", label: "official assessment criteria" },
      ],
    },
    enUnaFrase: {
      label: "The key idea",
      quote:
        '"It\'s not just a correction tool. It\'s a complete writing interaction system: from the moment the student requests a task to the moment they receive detailed, actionable feedback."',
      sub: "Request a task, receive a ready-to-answer prompt, submit your writing and get structured feedback — all in one natural, seamless journey.",
    },
    comoFunciona: {
      label: "The process",
      title: "How it works",
      sub: "Four steps. No learning curve. Students understand it from the very first use.",
      steps: [
        {
          number: "01",
          title: "Request a task",
          description:
            "The student selects the level and type of writing they want to practise. Simple and straightforward.",
        },
        {
          number: "02",
          title: "Receive the prompt",
          description:
            "A complete, clear prompt ready to answer. The student knows exactly what to do.",
        },
        {
          number: "03",
          title: "Submit the writing",
          description:
            "Within the same flow. Requesting, receiving, writing and submitting form one natural, recognisable journey.",
        },
        {
          number: "04",
          title: "Receive the feedback",
          description:
            "A structured report with a score, criteria, main errors, improvement suggestions and an examiner summary.",
        },
      ],
    },
    queRecibe: {
      label: "The feedback",
      title: "What the student receives",
      sub: "Not a generic grade. A complete report that shows what went well, what went wrong and how to improve.",
      items: [
        {
          title: "Assessment criteria",
          description:
            "Content, Communicative Achievement, Organisation and Language — each with a score and explanation.",
        },
        {
          title: "Overall score",
          description:
            "A total writing score to understand whether the text falls in a strong, average or weak band for the level.",
        },
        {
          title: "Main errors",
          description:
            "The mistakes that truly affect the accuracy or clarity of the text. No irrelevant noise.",
        },
        {
          title: "Text improvement",
          description:
            "A full improved version or improved sentences, depending on the student's starting point.",
        },
        {
          title: "Examiner summary",
          description:
            "A closing evaluator-style summary that condenses the overall impression and highlights the key area to improve.",
        },
        {
          title: "Word count",
          description:
            "An immediate alert when the writing falls outside the recommended length for the level.",
        },
      ],
    },
    niveles: {
      label: "Coverage",
      title: "Levels covered",
      sub: "From B1 to C1, with all the writing types that appear in Cambridge-style exams.",
      wordCountLabel: "Recommended length",
      levels: [
        {
          level: "B1",
          color: "blue" as const,
          types: ["Email", "Story", "Article"],
          wordCount: "100–120 words",
        },
        {
          level: "B2",
          color: "green" as const,
          types: ["Essay", "Review", "Article", "Email", "Report"],
          wordCount: "140–190 words",
        },
        {
          level: "C1",
          color: "purple" as const,
          types: ["Essay", "Review", "Article", "Email", "Report", "Proposal"],
          wordCount: "220–260 words",
        },
      ],
    },
    paraAcademias: {
      label: "For academies",
      title: "A teaching and operational support tool",
      body1:
        "Write2Improve isn't just for students. The academy has full control over the service: who has access, what tasks are available and how everything is managed without manual processes.",
      body2:
        "A consistent experience across students and levels, built on a solid foundation ready to scale.",
      cta: "Request a demo for my academy",
      features: [
        {
          title: "Access control",
          description:
            "Manage who is authorised to use the system. Ordered access, limited to valid users.",
        },
        {
          title: "Fixed tasks and campaigns",
          description:
            "Set up closed writing tasks, planned simulations or exercises linked to specific codes.",
        },
        {
          title: "Consistent experience",
          description:
            "The same quality of service across students, levels and groups. No variations or surprises.",
        },
        {
          title: "No manual management",
          description:
            "The system delivers tasks and returns corrections automatically. The academy doesn't need to intervene in each interaction.",
        },
      ],
    },
    ctaFinal: {
      title: "Want to offer this at your academy?",
      sub: "Tell us what you need. We'll explain how Write2Improve fits your academy and how to get started.",
      cta: "Request a demo",
      note: "No commitment. We reply within 24 hours.",
    },
    footer: {
      links: ["Academies", "Students", "Pricing", "Contact"],
    },
  },
}
