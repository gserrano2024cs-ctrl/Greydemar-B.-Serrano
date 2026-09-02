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
    role: "Project Coordinator · Marketing Ops · Social Media Strategist",
    intro:
      "Conecto marketing, ventas y operaciones para escalar negocios y estructurar flujos de trabajo. Transformo estrategias en ingresos mediante la automatización de procesos con Inteligencia Artificial, la coordinación ágil de equipos multidisciplinarios y el diseño de embudos de adquisición. Cuento con más de 4 años de experiencia eliminando cuellos de botella operativos e impulsando el crecimiento comercial bajo estándares de servicio VIP (5 estrellas).",
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
        company: "YP Realty",
        location: "Remoto / Puerto Rico",
        role: "Social Media & Digital Strategist",
        period: "Jul. 2026 — Presente",
        bullets: [
          "Lidero la estrategia de contenido orgánico y edición de video (Instagram, TikTok, YouTube, FB) para posicionar propiedades residenciales y comerciales en el mercado de Puerto Rico.",
          "Diseño y optimizo campañas publicitarias multiplataforma orientadas a la captación de leads inmobiliarios, maximizando el retorno de inversión y las tasas de conversión.",
          "Gestiono la comunidad digital mediante respuestas ágiles, aplicando estrategias de Growth para transformar seguidores en prospectos calificados.",
        ],
      },
      {
        company: "PanHouse, Casa Editorial",
        location: "Caracas, Venezuela",
        role: "Coordinadora de Comunicaciones Internas",
        period: "Mar. 2024 — Ago. 2025",
        bullets: [
          "Sincronicé las operaciones diarias entre los departamentos de Marketing, Ventas y Relaciones Públicas, garantizando el flujo de información y la ejecución exitosa de eventos VIP.",
          "Diseñé e integré sistemas de automatización con IA (ChatGPT, Claude) que redujeron drásticamente los tiempos de atención y estandarizaron la comunicación interna y externa.",
          "Ejecuté la depuración y segmentación del CRM para lanzar campañas de Email Marketing enfocadas en la retención y reactivación de usuarios.",
        ],
      },
      {
        company: "ISMM - Instituto Superior Mariano Moreno",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (Ventas B2C)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Gestioné el ciclo de ventas End-to-End, impulsando un incremento del 37,7% en la conversión de matrículas de alto valor (High-Ticket).",
          "Codiseñé estrategias de Video Marketing y Social Media en sinergia con el equipo audiovisual, creando activos digitales orientados a la venta directa.",
          "Brindé asesoría consultiva omnicanal para manejar objeciones y cerrar negociaciones.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Coordinadora del Business Center & Operaciones B2B",
        period: "Ago. 2022 — Jul. 2023",
        bullets: [
          "Ascendí internamente para liderar el Business Center, gestionando el portafolio corporativo (B2B), coordinando reservas y logística bajo estrictos estándares de calidad 5 estrellas.",
          "Centralicé las operaciones entre 7 departamentos críticos (Ventas, Front Desk, Sistemas, Ingeniería, Experiencias, Cocina y Ama de Llaves), optimizando la comunicación de todo el hotel.",
          "Alcancé una tasa de resolución del 100% en incidencias operativas complejas, actuando como mediadora estratégica entre las áreas.",
        ],
      },
      {
        company: "Dislocal",
        location: "Caracas, Venezuela",
        role: "Production Manager & Project Coordinator",
        period: "Oct. 2021 — Oct. 2022",
        bullets: [
          "Lideré la planificación estratégica y producción logística de proyectos con impacto socioeconómico y cultural en la comunidad del Barrio El Calvario (El Hatillo).",
          "Apliqué metodologías de Project Management para asegurar el cumplimiento de cronogramas y coordinar múltiples equipos en terreno.",
          "Actué como enlace principal entre aliados organizacionales (Visión Ciudad) y la comunidad local, garantizando la ejecución impecable de exposiciones y eventos al aire libre.",
        ],
      },
    ],
    skills: {
      "Marketing & Ads": ["Captación de leads", "Email Marketing (Mailchimp)", "Meta Ads", "B2B/B2C Sales", "Estrategia Inmobiliaria"],
      "Project Ops": ["Asana", "ClickUp", "Notion", "Trello", "Liderazgo interdisciplinario", "Zoho CRM", "Zendesk"],
      "Content & Video": ["CapCut", "Canva", "Adobe Suite", "Copywriting persuasivo", "Community Management"],
      "AI & Automation": ["ChatGPT", "Gemini", "Claude", "Prompt Engineering", "Optimización de flujos"]
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
      "Liderazgo transversal y coordinación ágil de equipos multidisciplinarios.",
      "Resolución estratégica de problemas y manejo rápido de crisis operativas.",
      "Comunicación asertiva y negociación orientada a resultados comerciales.",
      "Atención al detalle y estándares de calidad VIP (5 estrellas) en experiencia de cliente.",
      "Adaptabilidad tecnológica y adopción proactiva de Inteligencia Artificial.",
    ],
  },
  en: {
    role: "Project Coordinator · Marketing Ops · Social Media Strategist",
    intro:
      "I connect marketing, sales, and operations to scale businesses and structure workflows. I transform strategies into revenue by automating processes with Artificial Intelligence, agile coordination of multidisciplinary teams, and designing acquisition funnels. I have over 4 years of experience eliminating operational bottlenecks and driving commercial growth under VIP service standards (5 stars).",
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
        company: "YP Realty",
        location: "Remote / Puerto Rico",
        role: "Social Media & Digital Strategist",
        period: "Jul. 2026 — Present",
        bullets: [
          "Lead the organic content strategy and video editing (Instagram, TikTok, YouTube, FB) to position residential and commercial properties in the Puerto Rican market.",
          "Design and optimize cross-platform advertising campaigns aimed at capturing real estate leads, maximizing ROI and conversion rates.",
          "Manage the digital community with agile responses, applying Growth strategies to turn followers into qualified prospects.",
        ],
      },
      {
        company: "PanHouse, Publishing House",
        location: "Caracas, Venezuela",
        role: "Internal Communications Coordinator",
        period: "Mar. 2024 — Aug. 2025",
        bullets: [
          "Synchronized daily operations among Marketing, Sales, and PR departments, ensuring information flow and the successful execution of VIP events.",
          "Designed and integrated AI-driven automation systems (ChatGPT, Claude) that drastically reduced response times and standardized corporate communication.",
          "Executed CRM database debugging and segmentation to launch Email Marketing campaigns focused on user retention and reactivation.",
        ],
      },
      {
        company: "ISMM - Mariano Moreno Higher Institute",
        location: "Caracas, Venezuela",
        role: "Acquisition Manager (B2C Sales)",
        period: "Nov. 2023 — Sept. 2024",
        bullets: [
          "Managed the End-to-End sales cycle, driving a 37.7% increase in conversion rates for High-Ticket enrollments.",
          "Co-designed Video Marketing and Social Media strategies in synergy with the audiovisual team, creating digital assets geared towards direct sales.",
          "Provided omnichannel consultative advice to handle objections and close negotiations.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Business Center & B2B Operations Coordinator",
        period: "Aug. 2022 — Jul. 2023",
        bullets: [
          "Promoted internally to lead the Business Center, managing the corporate (B2B) portfolio, coordinating reservations and logistics under strict 5-star quality standards.",
          "Centralized operations across 7 critical departments (Sales, Front Desk, IT, Engineering, Experiences, Kitchen, and Housekeeping), optimizing hotel-wide communication.",
          "Achieved a 100% resolution rate for complex operational incidents, acting as a strategic mediator between departments.",
        ],
      },
      {
        company: "Dislocal",
        location: "Caracas, Venezuela",
        role: "Production Manager & Project Coordinator",
        period: "Oct. 2021 — Oct. 2022",
        bullets: [
          "Led the strategic planning and logistical production of projects with socioeconomic and cultural impact in the Barrio El Calvario community (El Hatillo).",
          "Applied Project Management methodologies to ensure schedule compliance and coordinate multiple teams on the ground.",
          "Acted as the main liaison between organizational allies (Visión Ciudad) and the local community, ensuring the flawless execution of outdoor exhibitions and events.",
        ],
      },
    ],
    skills: {
      "Marketing & Ads": ["Lead Generation", "Email Marketing (Mailchimp)", "Meta Ads", "B2B/B2C Sales", "Real Estate Strategy"],
      "Project Ops": ["Asana", "ClickUp", "Notion", "Trello", "Cross-functional Leadership", "Zoho CRM", "Zendesk"],
      "Content & Video": ["CapCut", "Canva", "Adobe Suite", "Persuasive Copywriting", "Community Management"],
      "AI & Automation": ["ChatGPT", "Gemini", "Claude", "Prompt Engineering", "Workflow Optimization"]
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
      "Cross-functional leadership and agile coordination of multidisciplinary teams.",
      "Strategic problem-solving and rapid operational crisis management.",
      "Assertive communication and negotiation focused on commercial results.",
      "Attention to detail and VIP quality standards (5-star) in customer experience.",
      "Technological adaptability and proactive adoption of Artificial Intelligence.",
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
              download="Greydemar-Serrano-CV.pdf"
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
              <li key={job.company} className="relative">
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
          <a href="mailto:greydemar06@gmail.com" className="inline-flex items-center gap-1 transition-colors hover:text-accent">
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
