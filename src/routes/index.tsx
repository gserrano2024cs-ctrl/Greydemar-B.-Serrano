import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight, Languages } from "lucide-react";
// IMPORTANTE: Mantenemos este nombre de archivo para que Vercel no dé error.
import cvAsset from "@/assets/Greydemar_Serrano_CV202610.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

type Lang = "es" | "en";

const content = {
  es: {
    role: "Trafficker Digital · Project Manager · Web Developer",
    intro:
      "Conecto marketing, desarrollo web y operaciones para escalar negocios y maximizar conversiones. Transformo estrategias en ingresos mediante embudos de adquisición, gestión de pauta digital y desarrollo autodidacta de Landing Pages de alto rendimiento. Cuento con más de 4 años de experiencia analizando KPIs, coordinando logística, optimizando presupuestos y resolviendo cuellos de botella operativos bajo un enfoque resolutivo y estándares de servicio VIP (5 estrellas).",
    location: "Caracas, Venezuela",
    download: "Descargar CV",
    portfolio: "Ver Portafolio",
    contact: "Contactar",
    sections: {
      experience: "Experiencia",
      skills: "Habilidades y Herramientas",
      education: "Educación",
      soft: "Habilidades blandas",
    },
    experience: [
      {
        company: "Desarrollo Web & Marketing Freelance",
        location: "Remoto",
        role: "Desarrollador de Landing Pages (Autodidacta) & Trafficker Digital",
        period: "Ene. 2023 — Presente",
        bullets: [
          "Diseño y desarrollo de Landing Pages optimizadas para conversión (CRO) adaptadas a distintas necesidades (checklists, captación, servicios) utilizando HTML, CSS, JavaScript y frameworks como Next.js, Astro y Tailwind CSS.",
          "Gestiono repositorios en GitHub y ejecuto despliegues continuos mediante Vercel para garantizar rendimiento y escalabilidad.",
          "Implemento estrategias SEO, integrando Google Analytics y Google Search Console para el monitoreo de usuarios, sesiones y tasas de conversión.",
        ],
      },
      {
        company: "YP Realty",
        location: "Remoto / Puerto Rico",
        role: "Video Editor & Content Manager",
        period: "Jul. 2026 — Presente",
        bullets: [
          "Edito videos en formato vertical (Reels, TikToks, Shorts extraídos de Podcasts) para YouTube, Facebook e Instagram, con el fin de posicionar propiedades en Puerto Rico.",
          "Redacto copys persuasivos, programo las publicaciones y gestiono la comunidad digital (Community Management) respondiendo mensajes y comentarios de forma ágil.",
          "Ejecuto campañas como Trafficker Digital en Meta Ads y Google Ads enfocadas en captación de leads inmobiliarios, optimizando KPIs clave como Alcance, CPM, CTR, CPC y Tasa de Conversión.",
        ],
      },
      {
        company: "Laura Navarro (Lectoescritura & Mindfulness)",
        location: "Remoto / Puerto Rico",
        role: "Asistente Virtual & Diseñadora Web (Proyecto)",
        period: "Jun. 2025 — Sep. 2025",
        bullets: [
          "Diseñé una Landing Page enfocada en la venta de servicios y productos de lectoescritura y mindfulness.",
          "Ejecuté labores de Data Entry, manejo de CRM y llamadas en frío (Cold Calling) para ventas B2C y B2B (institucionales y particulares).",
          "Creé formularios en Google Forms, documenté procesos, apoyé con contenido puntual para Instagram y diseñé material POP para impresión.",
        ],
      },
      {
        company: "PanHouse, Casa Editorial",
        location: "Caracas, Venezuela",
        role: "Coordinadora de Comunicaciones Internas & Project Manager",
        period: "Mar. 2024 — Ago. 2025",
        bullets: [
          "Lideré la gestión operativa, logística integral y montaje de eventos VIP, garantizando un estricto control presupuestario y una comunicación fluida entre Marketing, Ventas y RRPP.",
          "Elaboré reportes de métricas y análisis de datos de campañas, diseñando automatizaciones con IA (ChatGPT, Claude) para optimizar los flujos de trabajo.",
          "Ejecuté la depuración y segmentación del CRM para lanzar campañas de Email Marketing, redactando copys y aplicando estrategias para la retención y reactivación de usuarios.",
        ],
      },
      {
        company: "ISMM - Instituto Superior Mariano Moreno",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (Warm Calling & Ventas B2C)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Gestioné leads tibios (Warm Calling) provenientes de campañas de Instagram que ingresaban a Zoho CRM, realizando mantenimiento, agendamiento de citas y seguimiento hasta la conversión.",
          "Impulsé el ciclo de ventas logrando metas comerciales y un incremento del 37,7% en la conversión de matrículas de alto valor (High-Ticket).",
          "Codiseñé estrategias de Video Marketing y redacté guiones orientados a la venta directa, brindando atención consultiva para manejar objeciones.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Coordinadora del Business Center & Operaciones B2B",
        period: "May. 2023 — Jul. 2023",
        bullets: [
          "Fui promovida tras 1 año de pasantía para liderar el Business Center durante 3 meses, gestionando el portafolio corporativo (B2B), logística y atención al cliente bajo estándares 5 estrellas.",
          "Alcancé una tasa de resolución del 100% en crisis operativas, actuando como mediadora estratégica y aplicando iniciativa para anticipar problemas.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Pasante de Comunicaciones Internas",
        period: "May. 2022 — Abr. 2023",
        bullets: [
          "Apoyé en la centralización de operaciones entre 7 departamentos críticos (Ventas, Front Desk, Sistemas, etc.), optimizando la comunicación de todo el hotel.",
          "Colaboré en la elaboración de reportes de incidencias para la gerencia, desarrollando un perfil altamente resolutivo.",
        ],
      },
    ],
    skills: {
      "Marketing & Analytics": ["Trafficker Digital", "Meta Ads & Google Ads", "Google Analytics", "Google Search Console", "Análisis de KPIs", "Zoho CRM", "Warm & Cold Calling"],
      "Desarrollo Web": ["HTML, CSS, JavaScript (Autodidacta)", "Next.js", "Astro", "Tailwind CSS", "GitHub", "Vercel", "Landing Pages"],
      "Project Ops & Eventos": ["Asana", "ClickUp", "Notion", "Logística y Montaje de Eventos", "Control Presupuestario", "Gestión Operativa", "Elaboración de Reportes"],
      "Content & AI": ["Edición de Video (Reels/Shorts)", "CapCut", "Canva", "Copywriting y Guiones", "ChatGPT, Gemini, Claude", "Community Management"]
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
      "Perfil altamente resolutivo, con iniciativa propia y rápida gestión de crisis operativas.",
      "Liderazgo transversal, control presupuestario y coordinación ágil de equipos en terreno.",
      "Atención al cliente impecable, comunicación asertiva y estándares de calidad VIP (5 estrellas).",
      "Enfoque analítico para la toma de decisiones basada en datos (Data-Driven).",
      "Adaptabilidad tecnológica (autodidacta) y adopción proactiva de Inteligencia Artificial.",
    ],
  },
  en: {
    role: "Digital Trafficker · Project Manager · Web Developer",
    intro:
      "I connect marketing, web development, and operations to scale businesses and maximize conversions. I transform strategies into revenue through acquisition funnels, digital ad management, and self-taught high-performance Landing Page development. I have over 4 years of experience analyzing KPIs, coordinating event logistics, optimizing budgets, and resolving operational bottlenecks with a proactive, solution-oriented approach and VIP (5-star) service standards.",
    location: "Caracas, Venezuela",
    download: "Download CV",
    portfolio: "View Portfolio",
    contact: "Get in touch",
    sections: {
      experience: "Experience",
      skills: "Skills & Tools",
      education: "Education",
      soft: "Soft skills",
    },
    experience: [
      {
        company: "Freelance Web Development & Marketing",
        location: "Remote",
        role: "Self-taught Landing Page Developer & Digital Trafficker",
        period: "Jan. 2023 — Present",
        bullets: [
          "Design and develop conversion-optimized (CRO) Landing Pages tailored to specific needs (checklists, lead capture, services) using HTML, CSS, JavaScript, and frameworks like Next.js, Astro, and Tailwind CSS.",
          "Manage GitHub repositories and execute continuous deployments via Vercel to ensure performance and scalability.",
          "Implement SEO strategies, integrating Google Analytics and Google Search Console to monitor users, sessions, and conversion rates.",
        ],
      },
      {
        company: "YP Realty",
        location: "Remote / Puerto Rico",
        role: "Video Editor & Content Manager",
        period: "Jul. 2026 — Present",
        bullets: [
          "Edit vertical videos (Reels, TikToks, Shorts extracted from Podcasts) for YouTube, Facebook, and Instagram, aimed at positioning properties in Puerto Rico.",
          "Write persuasive copy, schedule posts, and manage the digital community (Community Management) by agilely responding to messages and comments.",
          "Execute campaigns as a Digital Trafficker on Meta Ads and Google Ads focused on real estate lead generation, optimizing key KPIs such as Reach, CPM, CTR, CPC, and Conversion Rate.",
        ],
      },
      {
        company: "Laura Navarro (Literacy & Mindfulness)",
        location: "Remote / Puerto Rico",
        role: "Virtual Assistant & Web Designer (Project)",
        period: "Jun. 2025 — Sep. 2025",
        bullets: [
          "Designed a Landing Page focused on selling literacy and mindfulness services and products.",
          "Executed Data Entry tasks, CRM management, and Cold Calling for B2C and B2B sales (institutional and individual clients).",
          "Created Google Forms, documented processes, provided occasional Instagram content, and designed POP material for printing.",
        ],
      },
      {
        company: "PanHouse, Publishing House",
        location: "Caracas, Venezuela",
        role: "Internal Communications Coordinator & Project Manager",
        period: "Mar. 2024 — Aug. 2025",
        bullets: [
          "Led operational management, comprehensive logistics, and VIP event setup, ensuring strict budget control and fluid communication between Marketing, Sales, and PR.",
          "Prepared metric reports and campaign data analysis, designing AI-driven automations (ChatGPT, Claude) to optimize workflows.",
          "Executed CRM database debugging and segmentation to launch Email Marketing campaigns, writing copy and applying strategies for user retention and reactivation.",
        ],
      },
      {
        company: "ISMM - Mariano Moreno Higher Institute",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (Warm Calling & B2C Sales)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Managed warm leads coming from Instagram campaigns into Zoho CRM, performing lead maintenance, appointment scheduling, and follow-up until conversion.",
          "Drove the sales cycle, meeting commercial goals and achieving a 37.7% increase in conversion rates for High-Ticket enrollments.",
          "Co-designed Video Marketing strategies and wrote scripts geared towards direct sales, providing consultative customer service to handle objections.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Business Center & B2B Operations Coordinator",
        period: "May. 2023 — Jul. 2023",
        bullets: [
          "Promoted after a 1-year internship to lead the Business Center for 3 months, managing the corporate (B2B) portfolio, logistics, and customer service under strict 5-star quality standards.",
          "Achieved a 100% resolution rate in operational crises, acting as a strategic mediator and applying initiative to anticipate problems.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Internal Communications Intern",
        period: "May. 2022 — Apr. 2023",
        bullets: [
          "Supported the centralization of operations across 7 critical departments (Sales, Front Desk, IT, etc.), optimizing hotel-wide communication.",
          "Collaborated in the preparation of incident reports for management, developing a highly resolutive professional profile.",
        ],
      },
    ],
    skills: {
      "Marketing & Analytics": ["Digital Trafficker", "Meta Ads & Google Ads", "Google Analytics", "Google Search Console", "KPI Analysis", "Zoho CRM", "Warm & Cold Calling"],
      "Web Development": ["HTML, CSS, JavaScript (Self-taught)", "Next.js", "Astro", "Tailwind CSS", "GitHub", "Vercel", "Landing Pages"],
      "Project Ops & Events": ["Asana", "ClickUp", "Notion", "Event Logistics & Setup", "Budget Control", "Operational Management", "Performance Reporting"],
      "Content & AI": ["Video Editing (Reels/Shorts)", "CapCut", "Canva", "Copywriting & Scripts", "ChatGPT, Gemini, Claude", "Community Management"]
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
      "Highly resolutive profile with strong initiative and rapid operational crisis management.",
      "Cross-functional leadership, budget control, and agile coordination of field teams.",
      "Impeccable customer service, assertive communication, and VIP (5-star) quality standards.",
      "Analytical approach for data-driven decision making.",
      "Self-taught technological adaptability and proactive adoption of Artificial Intelligence.",
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
              <li key={job.company + job.role} className="relative">
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
