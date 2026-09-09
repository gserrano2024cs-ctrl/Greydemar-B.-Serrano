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
    role: "Marketing Digital · Desarrolladora Web Jr. · Estrategia de Ventas",
    intro:
      "Especialista en Marketing Digital con visión comercial. Transformo tendencias en estrategias rentables mediante la creación de contenido de alto impacto, el desarrollo web de Landing Pages y la automatización con Inteligencia Artificial. Conecto la presencia digital con sistemas comerciales ágiles (CRM, ventas en frío/tibias) para escalar la facturación de forma rápida y medible, eliminando cuellos de botella operativos bajo estándares de servicio VIP (5 estrellas).",
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
        company: "Desarrollo Web Freelance",
        location: "Remoto",
        role: "Desarrolladora Web Jr.",
        period: "Ene. 2023 — Presente",
        bullets: [
          "Diseño y desarrollo Landing Pages orientadas a la captación rápida de leads, utilizando HTML, CSS, JavaScript y frameworks como Next.js y Astro, con despliegue en Vercel.",
        ],
      },
      {
        company: "YP Realty",
        location: "Remoto / Puerto Rico",
        role: "Social Media Manager & Video Editor",
        period: "Jul. 2026 — Presente",
        bullets: [
          "Lidero la estrategia de Marketing de Contenidos y la edición de video orgánico, aplicando transiciones dinámicas y hooks (ganchos) en tendencia para maximizar la retención de audiencia.",
          "Extraigo clips de podcasts para producir Reels y Shorts de alto impacto (YouTube, TikTok, Instagram) y redacto copys persuasivos orientados a la conversión inmobiliaria.",
          "Analizo métricas en Meta Business Suite, logrando picos de 292 en alcance (+56.1%) y 155 interacciones de contenido (+604.5%) mediante una gestión activa de la comunidad.",
        ],
      },
      {
        company: "Active Learning Education",
        location: "Remoto / Puerto Rico",
        role: "Asistente Virtual & Ventas",
        period: "Jun. 2026 — Ago. 2026",
        bullets: [
          "Administré el CRM corporativo, diseñé material POP y optimicé la captación de datos implementando Google Forms.",
          "Ejecuté estrategias de Cold Calling (B2B y B2C) para el agendamiento de citas y cierre de ventas en el nicho de lectoescritura, mindfulness y psicología.",
        ],
      },
      {
        company: "PanHouse, Casa Editorial",
        location: "Caracas, Venezuela",
        role: "Project Manager & Coordinadora de Comunicaciones",
        period: "Mar. 2024 — Ago. 2025",
        bullets: [
          "Gestioné la comunicación interna corporativa mediante la redacción de boletines, alineando el flujo de información entre Marketing, Ventas y Relaciones Públicas.",
          "Diseñé e integré automatizaciones con Inteligencia Artificial (ChatGPT, Claude) para reducir tiempos de respuesta y optimizar flujos de trabajo operativos.",
          "Lideré la logística de eventos VIP con estricto control presupuestario y depuré bases de datos en el CRM para lanzar campañas de Email Marketing orientadas a la retención.",
        ],
      },
      {
        company: "ISMM - Instituto Superior Mariano Moreno",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (Warm Caller & Ventas)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Transformé estrategias de marketing en ingresos ejecutando Warm Calling a leads captados digitalmente, impulsando un incremento del 37,7% en ventas de alto valor (High-Ticket).",
          "Manejé el ciclo de vida del prospecto a través de Zoho CRM, garantizando un seguimiento meticuloso hasta la conversión final.",
          "Codiseñé estrategias comerciales y guiones de venta en sinergia con el equipo audiovisual, aportando insights analíticos del mercado.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Coordinadora del Business Center & Operaciones B2B",
        period: "May. 2023 — Jul. 2023",
        bullets: [
          "Lideré las ventas corporativas (B2B) comercializando salones de eventos, elaborando presupuestos y coordinando reservaciones bajo estrictos estándares VIP (5 estrellas).",
          "Centralicé la comunicación interna del departamento, alcanzando una tasa de resolución del 100% en incidencias operativas y actuando como enlace estratégico con la gerencia.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Pasante de Comunicaciones Internas",
        period: "May. 2022 — Abr. 2023",
        bullets: [
          "Facilité la comunicación interna entre 7 departamentos operativos, apoyando la logística diaria y la atención directa de requerimientos de huéspedes y personal.",
          "Operé el software Opera PMS para la gestión eficiente de reservaciones de habitaciones y salones de eventos.",
        ],
      },
    ],
    skills: {
      "Marketing & Contenido": ["Estrategia Digital", "Edición de Video y Retención (Hooks)", "Copywriting", "Email Marketing", "Análisis de Métricas"],
      "Presencia Web & IA": ["Desarrollo de Landing Pages", "HTML, CSS, JS", "Next.js & Astro", "Vercel & GitHub", "Automatización (ChatGPT, Claude)"],
      "Ventas & Operaciones": ["Embudos de Venta", "Warm & Cold Calling", "Ventas B2B/B2C", "Zoho CRM & Opera PMS", "Logística y Presupuestos"]
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
      "Cuento con un perfil altamente resolutivo y proactivo, especializado en conectar estrategias digitales con resultados de facturación.",
      "Ejerzo un liderazgo transversal, manteniendo un estricto control logístico presupuestario y una eficiente coordinación de equipos.",
      "Brindo una atención al cliente impecable, aplicando ventas consultivas bajo estándares de calidad VIP (5 estrellas).",
      "Mantengo un enfoque analítico para la toma de decisiones siempre basada en datos (Data-Driven).",
      "Destaco por mi aprendizaje autodidacta ágil, con rápida adopción de tecnologías web y herramientas de Inteligencia Artificial.",
    ],
  },
  en: {
    role: "Digital Marketing · Jr. Web Developer · Sales Strategy",
    intro:
      "Digital Marketing Specialist with a commercial mindset. I turn trends into profitable strategies through high-impact content creation, Landing Page web development, and Artificial Intelligence automations. I connect digital presence with agile commercial systems (CRM, warm/cold calling) to scale revenue quickly and measurably, eliminating operational bottlenecks under VIP (5-star) service standards.",
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
        company: "Freelance Web Development",
        location: "Remote",
        role: "Jr. Web Developer",
        period: "Jan. 2023 — Present",
        bullets: [
          "Design and develop Landing Pages focused on rapid lead capture using HTML, CSS, JavaScript, and frameworks like Next.js and Astro, deployed via Vercel.",
        ],
      },
      {
        company: "YP Realty",
        location: "Remote / Puerto Rico",
        role: "Social Media Manager & Video Editor",
        period: "Jul. 2026 — Present",
        bullets: [
          "Lead the Content Marketing strategy and organic video editing, applying dynamic transitions and trending hooks to maximize audience retention.",
          "Extract podcast clips to produce high-impact Reels and Shorts (YouTube, TikTok, Instagram) and write persuasive copy aimed at real estate conversion.",
          "Analyze metrics in Meta Business Suite, achieving peaks of 292 in reach (+56.1%) and 155 content interactions (+604.5%) through active community management.",
        ],
      },
      {
        company: "Active Learning Education",
        location: "Remote / Puerto Rico",
        role: "Virtual Assistant & Sales",
        period: "Jun. 2026 — Aug. 2026",
        bullets: [
          "Managed the corporate CRM, designed POP material, and optimized data capture by implementing Google Forms.",
          "Executed Cold Calling strategies (B2B and B2C) for appointment setting and closing sales in the literacy, mindfulness, and psychology niches.",
        ],
      },
      {
        company: "PanHouse, Publishing House",
        location: "Caracas, Venezuela",
        role: "Project Manager & Communications Coordinator",
        period: "Mar. 2024 — Aug. 2025",
        bullets: [
          "Managed corporate internal communications by writing newsletters, aligning the information flow among Marketing, Sales, and Public Relations.",
          "Designed and integrated Artificial Intelligence automations (ChatGPT, Claude) to reduce response times and optimize operational workflows.",
          "Led VIP event logistics with strict budget control and debugged CRM databases to launch retention-focused Email Marketing campaigns.",
        ],
      },
      {
        company: "ISMM - Mariano Moreno Higher Institute",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (Warm Caller & Sales)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Transformed marketing strategies into revenue by executing Warm Calling to digitally captured leads, driving a 37.7% increase in High-Ticket sales.",
          "Managed the prospect lifecycle through Zoho CRM, ensuring meticulous follow-up until final conversion.",
          "Co-designed commercial strategies and sales scripts in synergy with the audiovisual team, providing analytical market insights.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Business Center & B2B Operations Coordinator",
        period: "May 2023 — Jul. 2023",
        bullets: [
          "Led corporate (B2B) sales by marketing event rooms, preparing budgets, and coordinating reservations under strict VIP (5-star) standards.",
          "Centralized the department's internal communication, achieving a 100% resolution rate in operational incidents and acting as a strategic liaison with management.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Internal Communications Intern",
        period: "May 2022 — Apr. 2023",
        bullets: [
          "Facilitated internal communication across 7 operational departments, supporting daily logistics and directly addressing guest and staff requirements.",
          "Operated Opera PMS software for the efficient management of room and event room reservations.",
        ],
      },
    ],
    skills: {
      "Marketing & Content": ["Digital Strategy", "Video Editing & Retention (Hooks)", "Copywriting", "Email Marketing", "Metrics Analysis"],
      "Web Presence & AI": ["Landing Page Development", "HTML, CSS, JS", "Next.js & Astro", "Vercel & GitHub", "AI Automation (ChatGPT, Claude)"],
      "Sales & Operations": ["Sales Funnels", "Warm & Cold Calling", "B2B/B2C Sales", "Zoho CRM & Opera PMS", "Logistics & Budgets"]
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
      "I possess a highly resolutive and proactive profile, specialized in connecting digital strategies with revenue results.",
      "I exercise cross-functional leadership, maintaining strict logistical budget control and efficient team coordination.",
      "I provide impeccable customer service, applying consultative sales under VIP (5-star) quality standards.",
      "I maintain an analytical approach for decision making, ensuring it is always Data-Driven.",
      "I stand out for my agile self-taught learning, with rapid adoption of web technologies and Artificial Intelligence tools.",
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
