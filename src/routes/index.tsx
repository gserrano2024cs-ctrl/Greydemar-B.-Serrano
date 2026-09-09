import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight, Languages } from "lucide-react";
// IMPORTANTE: Mantenemos este nombre de archivo para que Vercel no dé error.
import cvAsset from "@/assets/jose-acurero-cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

type Lang = "es" | "en";

const content = {
  es: {
    role: "Especialista en Marketing Digital · Presencia Web · Sales Ops",
    intro:
      "Mi enfoque es claro: diseño estrategias de marketing que atraen, construyo la presencia digital que enamora y optimizo los sistemas comerciales que convierten. Entiendo que un buen contenido o una página web solo son exitosos si logran generar ingresos de forma rápida. Por eso, combino mi experiencia en marketing de contenidos y edición estratégica con el desarrollo web de Landing Pages y la automatización de procesos (CRM y ventas). Aporto más de 4 años creando ecosistemas digitales que funcionan en automático, eliminando cuellos de botella operativos e impulsando la facturación bajo estándares VIP (5 estrellas).",
    location: "Caracas, Venezuela",
    download: "Descargar CV",
    portfolio: "Ver Portafolio",
    contact: "Contactar por WhatsApp",
    sections: {
      experience: "Experiencia",
      skills: "Habilidades y Herramientas",
      education: "Educación",
      soft: "Habilidades blandas",
    },
    experience: [
      {
        company: "YP Realty",
        location: "Remoto / Puerto Rico",
        role: "Digital Marketer & Video Editor",
        period: "Jul. 2026 — Presente",
        bullets: [
          "Lidero la estrategia de marketing orgánico y edición de video, transformando podcasts en Reels y Shorts de alto impacto para YouTube, Facebook, Instagram y TikTok con el objetivo de captar leads inmobiliarios.",
          "Analizo métricas clave y elaboro reportes de rendimiento, logrando picos comprobados en Meta Business Suite de 292 en alcance (+56.1%) y 155 interacciones de contenido (+604.5%).",
          "Redacto textos persuasivos (copywriting) y gestiono la comunidad con respuestas ágiles (Community Management), orientadas a convertir seguidores en prospectos calificados.",
        ],
      },
      {
        company: "Desarrollo Web Freelance",
        location: "Remoto",
        role: "Desarrolladora de Landing Pages y Presencia Web",
        period: "Ene. 2023 — Presente",
        bullets: [
          "Diseño y desarrollo páginas de aterrizaje (Landing Pages) enfocadas en la conversión rápida (checklists, servicios, captación de leads) utilizando HTML, CSS, JavaScript y frameworks modernos como Next.js y Astro.",
          "Gestiono despliegues continuos mediante Vercel y repositorios en GitHub, asegurando que la presencia digital del cliente sea rápida, escalable y optimizada.",
          "Implemento SEO técnico integrando Google Analytics y Google Search Console para analizar el comportamiento del usuario y mejorar las tasas de conversión.",
        ],
      },
      {
        company: "PanHouse, Casa Editorial",
        location: "Caracas, Venezuela",
        role: "Coordinadora de Marketing Ops & Comunicaciones",
        period: "Mar. 2024 — Ago. 2025",
        bullets: [
          "Diseñé e integré automatizaciones con Inteligencia Artificial (ChatGPT, Claude) para resolver cuellos de botella operativos y agilizar la creación de contenidos y respuestas a clientes.",
          "Elaboré reportes de métricas y depuré la base de datos del CRM para lanzar campañas estratégicas de Email Marketing enfocadas en la retención y reactivación de usuarios.",
          "Lideré la logística y montaje de eventos VIP, garantizando un control presupuestario estricto y comunicación fluida entre los equipos de Marketing, Ventas y RRPP.",
        ],
      },
      {
        company: "ISMM - Instituto Superior Mariano Moreno",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (Ventas & Warm Calling)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Manejé el ciclo de vida del cliente digital utilizando Zoho CRM, documentando interacciones, agendando citas y ejecutando estrategias de llamadas tibias (Warm Calling) a leads provenientes de Meta Ads.",
          "Proporcioné asesoría consultiva para manejar objeciones, logrando un incremento del 37,7% en el cierre de ventas de alto valor (High-Ticket).",
          "Apoyé en la elaboración de guiones de venta en sinergia con el equipo audiovisual para asegurar que el marketing estuviera completamente alineado con los objetivos comerciales.",
        ],
      },
      {
        company: "Active Learning & Education",
        location: "Remoto / Puerto Rico",
        role: "Asistente Virtual (Proyecto de Presencia Web y Ventas)",
        period: "Jun. 2023 — Sept. 2023",
        bullets: [
          "Desarrollé una Landing Page optimizada para la venta de productos y servicios enfocados en el nicho de lectoescritura y mindfulness.",
          "Gestioné el CRM ejecutando llamadas en frío (Cold Calling) para ventas B2C y B2B institucionales, agendamiento de citas y seguimiento comercial de prospectos.",
          "Asistí en labores operativas documentando procesos, creando Google Forms, diseñando material POP para impresión y apoyando con contenido puntual para Instagram.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Coordinadora del Business Center & Operaciones B2B",
        period: "May. 2023 — Jul. 2023",
        bullets: [
          "Lideré el portafolio corporativo (B2B) tras un ascenso interno, gestionando reservas y logística bajo estrictos estándares VIP de 5 estrellas con un perfil altamente resolutivo.",
          "Alcancé una tasa de resolución del 100% en incidencias operativas complejas, centralizando la comunicación entre 7 departamentos críticos del hotel.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Pasante de Comunicaciones Internas",
        period: "May. 2022 — Abr. 2023",
        bullets: [
          "Optimicé el flujo de información del hotel elaborando reportes internos y asistiendo directamente en los requerimientos operativos de la gerencia y los huéspedes.",
        ],
      },
    ],
    skills: {
      "Marketing Digital": ["Estrategia de Contenido", "Meta Business Suite", "Edición de Video (Reels/Shorts)", "Copywriting", "SEO Técnico"],
      "Presencia Web": ["Desarrollo de Landing Pages", "HTML, CSS, JS", "Next.js & Astro", "Tailwind CSS", "GitHub & Vercel"],
      "Ventas & Sistemas": ["Embudos de Venta (Funnels)", "Zoho CRM & Zendesk", "Warm & Cold Calling", "Ventas B2B/B2C", "Email Marketing"],
      "Operaciones & IA": ["Automatización de Procesos", "ChatGPT & Claude", "Google Analytics & Console", "Logística y Presupuestos"]
    } as Record<string, string[]>,
    education: [
      {
        school: "Universidad Monteávila",
        location: "Caracas, Venezuela",
        degree: "Licenciatura en Comunicación Social, Mención Corporativo",
        date: "2024",
      },
      {
        school: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        degree: "Servicio Hoteles 5 Estrellas",
        date: "2024",
      },
      {
        school: "Juventus & ACF Bogotá",
        location: "Bogotá, Colombia",
        degree: "Inteligencia y Conciencia Emocional",
        date: "2023",
      },
    ],
    soft: [
      "Visión integral: capacidad de conectar el contenido (marketing) con la conversión (ventas) de forma fluida.",
      "Perfil altamente resolutivo, con iniciativa propia para optimizar cuellos de botella y gestionar crisis operativas.",
      "Aprendizaje autodidacta ágil, con rápida adopción de desarrollo web moderno y herramientas de Inteligencia Artificial.",
      "Atención al cliente impecable, comunicación persuasiva y estándares de calidad VIP (5 estrellas).",
      "Enfoque analítico para la toma de decisiones comerciales basada en datos (Data-Driven).",
    ],
  },
  en: {
    role: "Digital Marketing Specialist · Web Presence · Sales Ops",
    intro:
      "My focus is clear: I design marketing strategies that attract, build digital presences that engage, and optimize commercial systems that convert. I understand that great content or a website is only successful if it quickly generates revenue. That's why I combine my expertise in content marketing and strategic video editing with Landing Page development and process automation (CRM and sales). I bring over 4 years of experience creating digital ecosystems that run on autopilot, eliminating operational bottlenecks, and driving revenue under VIP (5-star) quality standards.",
    location: "Caracas, Venezuela",
    download: "Download CV",
    portfolio: "View Portfolio",
    contact: "Contact via WhatsApp",
    sections: {
      experience: "Experience",
      skills: "Skills & Tools",
      education: "Education",
      soft: "Soft skills",
    },
    experience: [
      {
        company: "YP Realty",
        location: "Remote / Puerto Rico",
        role: "Digital Marketer & Video Editor",
        period: "Jul. 2026 — Present",
        bullets: [
          "Lead organic marketing strategies and video editing, transforming podcasts into high-impact Reels and Shorts for YouTube, Facebook, Instagram, and TikTok to capture real estate leads.",
          "Analyze key metrics and prepare performance reports, achieving verified peaks in Meta Business Suite of 292 in reach (+56.1%) and 155 content interactions (+604.5%).",
          "Write persuasive copy and manage the digital community with agile responses (Community Management), aimed at converting followers into qualified prospects.",
        ],
      },
      {
        company: "Freelance Web Development",
        location: "Remote",
        role: "Landing Page & Web Presence Developer",
        period: "Jan. 2023 — Present",
        bullets: [
          "Design and develop Landing Pages focused on rapid conversion (checklists, services, lead capture) using HTML, CSS, JavaScript, and modern frameworks like Next.js and Astro.",
          "Manage continuous deployments via Vercel and GitHub repositories, ensuring the client's digital presence is fast, scalable, and optimized.",
          "Implement technical SEO by integrating Google Analytics and Google Search Console to analyze user behavior and improve conversion rates.",
        ],
      },
      {
        company: "PanHouse, Publishing House",
        location: "Caracas, Venezuela",
        role: "Marketing Ops & Communications Coordinator",
        period: "Mar. 2024 — Aug. 2025",
        bullets: [
          "Designed and integrated Artificial Intelligence automations (ChatGPT, Claude) to resolve operational bottlenecks and streamline content creation and customer responses.",
          "Prepared metrics reports and debugged the CRM database to launch strategic Email Marketing campaigns focused on user retention and reactivation.",
          "Led logistics and VIP event setup, ensuring strict budget control and fluid communication between the Marketing, Sales, and PR teams.",
        ],
      },
      {
        company: "ISMM - Mariano Moreno Higher Institute",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (Sales & Warm Calling)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Managed the digital customer lifecycle using Zoho CRM, documenting interactions, scheduling appointments, and executing Warm Calling strategies on leads generated from Meta Ads.",
          "Provided consultative advice to handle objections, achieving a 37.7% increase in closing High-Ticket sales.",
          "Supported the creation of sales scripts in synergy with the audiovisual team to ensure marketing was fully aligned with commercial objectives.",
        ],
      },
      {
        company: "Active Learning & Education",
        location: "Remote / Puerto Rico",
        role: "Virtual Assistant (Web Presence & Sales Project)",
        period: "Jun. 2023 — Sept. 2023",
        bullets: [
          "Developed an optimized Landing Page for the sale of products and services focused on the literacy and mindfulness niche.",
          "Managed the CRM by executing Cold Calling for B2C and institutional B2B sales, appointment setting, and commercial follow-ups.",
          "Assisted in operational tasks by documenting processes, creating Google Forms, designing POP print materials, and providing targeted Instagram content.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Business Center & B2B Operations Coordinator",
        period: "May 2023 — Jul. 2023",
        bullets: [
          "Led the corporate (B2B) portfolio following an internal promotion, managing reservations and logistics under strict VIP 5-star standards with a highly resolutive profile.",
          "Achieved a 100% resolution rate in complex operational incidents, centralizing communication across 7 critical hotel departments.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Internal Communications Intern",
        period: "May 2022 — Apr. 2023",
        bullets: [
          "Optimized the hotel's information flow by preparing internal reports and directly assisting with the operational requirements of management and guests.",
        ],
      },
    ],
    skills: {
      "Digital Marketing": ["Content Strategy", "Meta Business Suite", "Video Editing (Reels)", "Copywriting", "Technical SEO"],
      "Web Presence": ["Landing Page Development", "HTML, CSS, JS", "Next.js & Astro", "Tailwind CSS", "GitHub & Vercel"],
      "Sales & Systems": ["Sales Funnels", "Zoho CRM & Zendesk", "Warm & Cold Calling", "B2B/B2C Sales", "Email Marketing"],
      "Ops & AI": ["Process Automation", "ChatGPT & Claude", "Google Analytics & Console", "Logistics & Budgets"]
    } as Record<string, string[]>,
    education: [
      {
        school: "Universidad Monteávila",
        location: "Caracas, Venezuela",
        degree: "Bachelor's in Social Communication, Corporate Major",
        date: "2024",
      },
      {
        school: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        degree: "5-Star Hotel Service Training",
        date: "2024",
      },
      {
        school: "Juventus & ACF Bogotá",
        location: "Bogota, Colombia",
        degree: "Emotional Intelligence & Awareness",
        date: "2023",
      },
    ],
    soft: [
      "Holistic vision: ability to seamlessly connect content (marketing) with conversion (sales).",
      "Highly resolutive profile with strong initiative to optimize bottlenecks and manage operational crises.",
      "Agile self-taught learning, with rapid adoption of modern web development and Artificial Intelligence tools.",
      "Impeccable customer service, persuasive communication, and VIP (5-star) quality standards.",
      "Analytical approach for data-driven commercial decision making.",
    ],
  },
} as const;

function Index() {
  const [lang, setLang] = useState<Lang>("es");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex justify-end">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-[var(--shadow-soft)] transition-colors hover:text-accent"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span className={lang === "es" ? "text-accent" : ""}>ES</span>
            <span className="text-muted-foreground">/</span>
            <span className={lang === "en" ? "text-accent" : ""}>EN</span>
          </button>
        </div>

        <header className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.role}
          </p>
          <h1 className="text-5xl font-medium leading-tight text-foreground sm:text-6xl">
            Greydemar Berenices<br />Serrano
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {t.location}
            </span>
            <a href="mailto:greydemar06@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Mail className="h-4 w-4" /> greydemar06@gmail.com
            </a>
            <a href="https://wa.me/584126339776" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Phone className="h-4 w-4" /> +58 412 633 9776
            </a>
            <a href="https://www.linkedin.com/in/greydemarserrano/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={cvAsset.url}
              download="Greydemar_Serrano_CV202610.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:opacity-90"
            >
              <Download className="h-4 w-4" /> {t.download}
            </a>
            <a
              href="https://greydemarserrano.my.canva.site/greydemar-serrano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-accent hover:text-accent-foreground"
            >
              {t.portfolio} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        <Section title={t.sections.experience}>
          <ol className="relative space-y-10 border-l border-border pl-6">
            {t.experience.map((job) => (
              <li key={`${job.company}-${job.role}`} className="relative">
                <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-medium text-foreground">{job.company}</h3>
                  <span className="text-xs tabular-nums text-muted-foreground">{job.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.role} · {job.location}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60">
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={t.sections.skills}>
          <div className="space-y-5">
            {Object.entries(t.skills).map(([group, items]) => (
              <div key={group} className="grid grid-cols-[7rem_1fr] gap-4 sm:grid-cols-[9rem_1fr]">
                <p className="pt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {group}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.sections.education}>
          <div className="space-y-6">
            {t.education.map((edu) => (
              <div key={edu.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-medium text-foreground">{edu.school}</h3>
                  <span className="text-xs tabular-nums text-muted-foreground">{edu.date}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{edu.degree}</p>
                {"honors" in edu && edu.honors && (
                  <p className="mt-1 text-sm italic text-foreground/70">{edu.honors}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title={t.sections.soft}>
          <ul className="space-y-2 text-sm leading-relaxed text-foreground/85">
            {t.soft.map((s, i) => (
              <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/60">
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <footer className="mt-20 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Greydemar Serrano</span>
          <a href="https://wa.me/584126339776" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
            {t.contact} <ArrowUpRight className="h-3 w-3" />
          </a>
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 border-t border-border pt-10">
      <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
