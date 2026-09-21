import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight, Languages } from "lucide-react";

// Importamos TU archivo PDF directamente desde la carpeta assets.
// Asegúrate de que el archivo en tu carpeta se llame exactamente así, sin espacios:
import miCV from "@/assets/Greydemar_Serrano_CV.pdf";

export const Route = createFileRoute("/")({
  component: Index,
});

type Lang = "es" | "en";

const content = {
  es: {
    role: "Growth Marketing & Marketing Operations · Social Media · CRM · Web",
    intro:
      "Comunicadora Social con experiencia en marketing digital, adquisición, ventas, comunicaciones y proyectos web. Conecto contenido, CRM, analítica y landing pages para apoyar procesos de captación y conversión. Trabajo con GA4, Meta Business Suite, Zoho CRM, Next.js, Astro, ChatGPT y Claude.",
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
        location: "Remoto",
        role: "Social Media Manager & Video Editor",
        period: "Jun. 2026 — Presente",
        bullets: [
          "Planifico y ejecuto contenido para redes sociales del sector inmobiliario, combinando estrategia, copywriting y edición de video.",
          "Produzco Reels, Shorts, TikToks y contenido de podcast para distintas plataformas.",
          "Analizo resultados con Meta Business Suite, GA4 y TikTok Analytics; registré picos de 292 cuentas alcanzadas (+56,1%) y 155 interacciones (+604,5%).",
        ],
      },
      {
        company: "Desarrollo Web Freelance",
        location: "Remoto",
        role: "Frontend Web Developer",
        period: "2026 — Presente",
        bullets: [
          "Desarrollo landing pages y sitios responsive con HTML5, CSS3, JavaScript, Next.js y Astro, con control de versiones en GitHub y despliegue en Vercel.",
          "He desarrollado proyectos remunerados para Beatriz Briceño y Laura Navarro.",
        ],
      },
      {
        company: "PanHouse, Casa Editorial",
        location: "Caracas, Venezuela",
        role: "Coordinadora de Comunicaciones Internas y Externas",
        period: "Nov. 2024 — Nov. 2025",
        bullets: [
          "Coordiné comunicaciones entre Marketing, Ventas y Relaciones Públicas, apoyando actividades editoriales y eventos.",
          "Organicé y depuré información en CRM para segmentación y Email Marketing, e incorporé ChatGPT y Claude en tareas de comunicación y estandarización de respuestas.",
        ],
      },
      {
        company: "ISMM - Instituto Superior Mariano Moreno",
        location: "Caracas, Venezuela",
        role: "Coordinadora de Ventas | Acquisition & Enrollment",
        period: "Nov. 2023 — Dic. 2024",
        bullets: [
          "Gestioné prospectos en Zoho CRM durante el proceso de adquisición y matrícula, desde el primer contacto hasta seguimiento y cierre.",
          "Contribuí a un proceso comercial que registró +37,7% en conversión de matrículas High-Ticket y colaboré en iniciativas de Video Marketing y Social Media.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Business Center | Operaciones B2B",
        period: "Ago. 2022 — Oct. 2022",
        bullets: [
          "Coordiné solicitudes y operaciones para clientes corporativos en un entorno hotelero cinco estrellas.",
          "Gestioné requerimientos junto con hasta 7 departamentos internos, actuando como enlace entre clientes y equipos operativos.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Pasante",
        period: "Ago. 2021 — Ago. 2022",
        bullets: [
          "Apoyé actividades de comunicación, atención al cliente y coordinación interna; posteriormente asumí responsabilidades en el Business Center.",
        ],
      },
      {
        company: "Dislocal",
        location: "Remoto / Venezuela",
        role: "Project Coordinator",
        period: "Oct. 2021 — Oct. 2022",
        bullets: [
          "Coordiné cronogramas, logística y equipos para proyectos culturales y comunitarios.",
          "Gestioné la comunicación entre organizaciones aliadas y miembros de la comunidad para facilitar actividades y entregables.",
        ],
      },
      {
        company: "El Bus TV",
        location: "Caracas, Venezuela",
        role: "Periodista",
        period: "Sept. 2021 — Jun. 2022",
        bullets: [
          "Realicé cobertura hiperlocal, recopilación de información y creación de contenido periodístico para la comunidad de El Calvario, El Hatillo.",
        ],
      },
    ],
    skills: {
      "Marketing & Contenido": [
        "Growth Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Copywriting",
        "Video Marketing",
        "Email Marketing",
        "GA4 & Meta Business Suite",
      ],
      "CRM & Ventas": [
        "Zoho CRM",
        "Lead Management",
        "Customer Acquisition",
        "Ventas B2B/B2C",
        "High-Ticket",
        "Venta consultiva",
      ],
      "Web & IA": [
        "HTML5, CSS3, JavaScript",
        "Next.js & Astro",
        "GitHub & Vercel",
        "Landing Pages",
        "ChatGPT & Claude",
      ],
      "Operaciones": [
        "Project Coordination",
        "Stakeholder Coordination",
        "Trello & Asana",
        "Opera PMS",
      ],
      "Idiomas": [
        "Español — Nativo",
        "Inglés — A2",
      ],
    } as Record<string, string[]>,
    education: [
      {
        school: "Universidad Monteávila",
        location: "Caracas, Venezuela",
        degree: "Licenciatura en Comunicación Social, Mención Corporativo",
        date: "2024",
      },
    ],
    soft: [
      "Comunicación clara con equipos, clientes y diferentes áreas de trabajo.",
      "Coordinación interdepartamental y seguimiento de tareas y entregables.",
      "Organización y priorización en entornos presenciales y remotos.",
      "Aprendizaje autodidacta y adopción de herramientas digitales y web.",
    ],
  },
  en: {
    role: "Growth Marketing & Marketing Operations · Social Media · CRM · Web",
    intro:
      "Social Communication graduate with experience in digital marketing, acquisition, sales, communications, and web projects. I connect content, CRM, analytics, and landing pages to support lead generation and conversion. I work with GA4, Meta Business Suite, Zoho CRM, Next.js, Astro, ChatGPT, and Claude.",
    location: "Caracas, Venezuela",
    download: "Download CV",
    portfolio: "View Portfolio",
    contact: "Contact via WhatsApp",
    sections: {
      experience: "Experience",
      skills: "Skills & Tools",
      education: "Education",
      soft: "Soft Skills",
    },
    experience: [
      {
        company: "YP Realty",
        location: "Remote",
        role: "Social Media Manager & Video Editor",
        period: "Jun. 2026 — Present",
        bullets: [
          "Plan and execute social media content for the real estate sector, combining content strategy, copywriting, and video editing.",
          "Produce Reels, Shorts, TikToks, and podcast content for different platforms.",
          "Analyze results with Meta Business Suite, GA4, and TikTok Analytics; recorded peaks of 292 accounts reached (+56.1%) and 155 content interactions (+604.5%).",
        ],
      },
      {
        company: "Freelance Web Development",
        location: "Remote",
        role: "Frontend Web Developer",
        period: "2026 — Present",
        bullets: [
          "Develop responsive landing pages and websites with HTML5, CSS3, JavaScript, Next.js, and Astro, using GitHub for version control and Vercel for deployment.",
          "Completed paid projects for Beatriz Briceño and Laura Navarro.",
        ],
      },
      {
        company: "PanHouse, Publishing House",
        location: "Caracas, Venezuela",
        role: "Internal & External Communications Coordinator",
        period: "Nov. 2024 — Nov. 2025",
        bullets: [
          "Coordinated communications across Marketing, Sales, and Public Relations, supporting publishing activities and events.",
          "Organized and cleaned CRM data for segmentation and Email Marketing, and used ChatGPT and Claude for communication tasks and response standardization.",
        ],
      },
      {
        company: "ISMM - Instituto Superior Mariano Moreno",
        location: "Caracas, Venezuela",
        role: "Sales Coordinator | Acquisition & Enrollment",
        period: "Nov. 2023 — Dec. 2024",
        bullets: [
          "Managed prospects in Zoho CRM during the acquisition and enrollment process, from first contact through follow-up and closing.",
          "Contributed to a sales process that recorded a +37.7% increase in High-Ticket enrollment conversion and collaborated on Video Marketing and Social Media initiatives.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Business Center | B2B Operations",
        period: "Aug. 2022 — Oct. 2022",
        bullets: [
          "Coordinated requests and operations for corporate clients in a five-star hotel environment.",
          "Managed requirements with up to 7 internal departments, acting as a link between clients and operational teams.",
        ],
      },
      {
        company: "Eurobuilding Hotels & Suites",
        location: "Caracas, Venezuela",
        role: "Intern",
        period: "Aug. 2021 — Aug. 2022",
        bullets: [
          "Supported communication, customer service, and internal coordination activities; later moved into Business Center responsibilities.",
        ],
      },
      {
        company: "Dislocal",
        location: "Remote / Venezuela",
        role: "Project Coordinator",
        period: "Oct. 2021 — Oct. 2022",
        bullets: [
          "Coordinated schedules, logistics, and teams for cultural and community projects.",
          "Managed communication between partner organizations and community members to support activities and deliverables.",
        ],
      },
      {
        company: "El Bus TV",
        location: "Caracas, Venezuela",
        role: "Journalist",
        period: "Sept. 2021 — Jun. 2022",
        bullets: [
          "Produced hyperlocal coverage, gathered information, and created journalistic content for the El Calvario community in El Hatillo.",
        ],
      },
    ],
    skills: {
      "Marketing & Content": [
        "Growth Marketing",
        "Social Media Marketing",
        "Content Strategy",
        "Copywriting",
        "Video Marketing",
        "Email Marketing",
        "GA4 & Meta Business Suite",
      ],
      "CRM & Sales": [
        "Zoho CRM",
        "Lead Management",
        "Customer Acquisition",
        "B2B/B2C Sales",
        "High-Ticket",
        "Consultative Selling",
      ],
      "Web & AI": [
        "HTML5, CSS3, JavaScript",
        "Next.js & Astro",
        "GitHub & Vercel",
        "Landing Pages",
        "ChatGPT & Claude",
      ],
      "Operations": [
        "Project Coordination",
        "Stakeholder Coordination",
        "Trello & Asana",
        "Opera PMS",
      ],
      "Languages": [
        "Spanish — Native",
        "English — A2",
      ],
    } as Record<string, string[]>,
    education: [
      {
        school: "Universidad Monteávila",
        location: "Caracas, Venezuela",
        degree: "Bachelor's Degree in Social Communication, Corporate Major",
        date: "2024",
      },
    ],
    soft: [
      "Clear communication with teams, clients, and cross-functional areas.",
      "Cross-functional coordination and follow-up of tasks and deliverables.",
      "Organization and prioritization in on-site and remote work environments.",
      "Self-directed learning and adoption of digital and web tools.",
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
              href={miCV}
              download="Greydemar_Serrano_CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:opacity-90"
            >
              <Download className="h-4 w-4" /> {t.download}
            </a>
            <a
              href="https://portafolio-greydemar.vercel.app/"
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
