import {
  CheckCircle2,
  CalendarCheck,
  Target,
  TrendingUp,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <Trust />
      <Problem />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">A</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-primary">
            Adom<span className="text-mint">Studio</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#servicios" className="hover:text-primary transition">Servicios</a>
          <a href="#proceso" className="hover:text-primary transition">Proceso</a>
          <a href="#resultados" className="hover:text-primary transition">Resultados</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </nav>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2 text-sm font-semibold text-mint-foreground hover:opacity-90 transition shadow-sm"
        >
          Reservar llamada
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-secondary" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-mint/20 blur-3xl -z-10" />
      <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary border border-mint/30">
            <Sparkles className="h-3.5 w-3.5 text-mint" />
            Especialistas en clínicas dentales
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-primary leading-[1.05]">
            Llena tu agenda con{" "}
            <span className="relative inline-block">
              <span className="relative z-10">pacientes cualificados</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-mint/40 -z-0" />
            </span>{" "}
            cada mes.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            En AdomStudio diseñamos sistemas de captación predecibles para clínicas dentales:
            anuncios, embudos y agendamiento automático que convierten extraños en pacientes
            recurrentes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-navy-soft transition shadow-lg shadow-primary/20"
            >
              Quiero más pacientes
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary transition"
            >
              Ver cómo funciona
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {["Sin permanencia", "Resultados en 30 días", "Atención personalizada"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl bg-primary p-1 shadow-2xl shadow-primary/30">
            <div className="rounded-[22px] bg-background p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-primary">Agenda esta semana</h3>
                <span className="text-xs font-semibold text-mint bg-accent px-2 py-1 rounded-full">
                  +47 nuevas citas
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { name: "Implante dental", time: "09:30", new: true },
                  { name: "Limpieza profesional", time: "11:00", new: false },
                  { name: "Ortodoncia invisible", time: "13:15", new: true },
                  { name: "Blanqueamiento", time: "16:00", new: true },
                ].map((c) => (
                  <div
                    key={c.time}
                    className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-mint/20 flex items-center justify-center">
                        <CalendarCheck className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">{c.name}</p>
                        <p className="text-xs text-muted-foreground">Hoy · {c.time}</p>
                      </div>
                    </div>
                    {c.new && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-mint-foreground bg-mint px-2 py-1 rounded-full">
                        Nuevo
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Stat value="3.8x" label="ROI medio" />
                <Stat value="92%" label="Asistencia" />
                <Stat value="48h" label="Activación" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-secondary/70 py-3">
      <p className="text-lg font-bold text-primary">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

function Trust() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-medium text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Clínicas que confían en nosotros</span>
        {["Dental Vida", "Sonrisa+", "OrtoNova", "ClínicaBlanca", "DentalPro"].map((b) => (
          <span key={b} className="font-semibold text-primary/70">{b}</span>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Agenda con huecos cada semana",
    "Pacientes que no acuden a la cita",
    "Dependencia de recomendaciones",
    "Anuncios que no traen resultados",
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
          ¿Tu clínica vive de la incertidumbre?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          La mayoría de clínicas dentales no tiene un sistema previsible para conseguir nuevos
          pacientes. Si esto te suena familiar, podemos ayudarte:
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {items.map((t) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-left"
            >
              <div className="h-6 w-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-bold shrink-0">
                ✕
              </div>
              <p className="text-sm font-medium text-primary">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Target, title: "Campañas publicitarias", desc: "Anuncios en Meta y Google diseñados específicamente para tratamientos dentales de alto valor." },
    { icon: Users, title: "Embudos de captación", desc: "Páginas y formularios optimizados que convierten visitas en solicitudes reales de cita." },
    { icon: CalendarCheck, title: "Agendamiento automático", desc: "Sistema que confirma, recuerda y reduce las ausencias de tus pacientes en piloto automático." },
    { icon: TrendingUp, title: "Analítica y optimización", desc: "Dashboards claros para que sepas exactamente cuánto te cuesta cada paciente nuevo." },
    { icon: ShieldCheck, title: "Reputación online", desc: "Gestión de reseñas en Google para que seas la clínica más recomendada de tu zona." },
    { icon: Sparkles, title: "Branding clínico", desc: "Identidad visual moderna que transmite confianza y profesionalidad desde el primer click." },
  ];
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint">Servicios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Un sistema completo, no piezas sueltas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Integramos publicidad, conversión y agendamiento en un solo flujo medible.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-mint hover:shadow-xl hover:shadow-primary/5 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center group-hover:bg-mint transition">
                <Icon className="h-6 w-6 text-primary-foreground group-hover:text-mint-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Diagnóstico gratuito", desc: "Analizamos tu clínica, competencia y oportunidades reales en tu zona." },
    { n: "02", title: "Estrategia a medida", desc: "Diseñamos campañas, embudos y mensajes para los tratamientos que más te interesan." },
    { n: "03", title: "Lanzamiento en 7 días", desc: "Activamos el sistema y empezamos a generar solicitudes de cita cualificadas." },
    { n: "04", title: "Optimización continua", desc: "Medimos, ajustamos y escalamos lo que funciona mes tras mes." },
  ];
  return (
    <section id="proceso" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint">Proceso</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-primary">
            De cero a agenda llena en 30 días
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="rounded-2xl border border-border bg-card p-6 h-full">
                <span className="text-4xl font-bold text-mint/80">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const kpis = [
    { v: "+1.200", l: "Pacientes captados en 2024" },
    { v: "3.8x", l: "Retorno medio sobre inversión" },
    { v: "92%", l: "Tasa de asistencia a citas" },
    { v: "+40", l: "Clínicas activas" },
  ];
  return (
    <section id="resultados" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint">Resultados</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Números que hablan por sí solos
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            Trabajamos solo con clínicas dentales. Esa especialización se traduce en mejores
            resultados desde el primer mes.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.l} className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6">
              <p className="text-4xl md:text-5xl font-bold text-mint">{k.v}</p>
              <p className="mt-2 text-sm text-primary-foreground/80">{k.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "Pasamos de tener 5 huecos diarios a una agenda completa con lista de espera. El equipo entiende perfectamente el sector dental.", name: "Dra. Marta Ruiz", role: "Directora, Clínica SonrisaPlus" },
    { quote: "En tres meses recuperamos la inversión del año. Los pacientes llegan informados y deciden mucho más rápido.", name: "Dr. Javier León", role: "Fundador, Dental Vida" },
    { quote: "El sistema de recordatorios redujo nuestras ausencias en un 60%. Por fin podemos planificar el mes con tranquilidad.", name: "Lucía Fernández", role: "Gerente, OrtoNova" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint">Testimonios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Clínicas reales, resultados reales
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card border border-border p-6 flex flex-col">
              <div className="text-mint text-2xl leading-none">&ldquo;</div>
              <blockquote className="mt-2 text-sm text-foreground leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "¿En cuánto tiempo veré resultados?", a: "Las primeras solicitudes de cita suelen llegar en los primeros 7-14 días desde el lanzamiento del sistema." },
    { q: "¿Trabajáis con clínicas pequeñas?", a: "Sí. Adaptamos el sistema al tamaño y capacidad de tu clínica para no saturar tu agenda." },
    { q: "¿Qué inversión publicitaria necesito?", a: "Recomendamos un mínimo desde 600€/mes en anuncios, pero lo definimos juntos según tus objetivos." },
    { q: "¿Hay permanencia?", a: "No. Trabajamos mes a mes. Si no estás satisfecho, puedes parar cuando quieras." },
  ];
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint">Preguntas frecuentes</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Resolvemos tus dudas
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-card border border-border p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-primary">{f.q}</span>
                <span className="ml-4 h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-primary group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-16 text-center shadow-2xl shadow-primary/30">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground">
              Reserva tu diagnóstico gratuito
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              30 minutos en los que analizamos tu clínica y te mostramos qué podríamos hacer por
              ella. Sin compromiso.
            </p>
            <a
              href="mailto:hola@adomstudio.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint px-8 py-4 text-base font-semibold text-mint-foreground hover:opacity-90 transition shadow-lg"
            >
              Solicitar diagnóstico
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-mint" /> hola@adomstudio.com
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-mint" /> +34 600 000 000
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-mint" /> Madrid, España
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-primary">
            Adom<span className="text-mint">Studio</span>
          </span>
        </div>
        <p>© {new Date().getFullYear()} AdomStudio. Todos los derechos reservados.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-primary transition">Privacidad</a>
          <a href="#" className="hover:text-primary transition">Aviso legal</a>
        </div>
      </div>
    </footer>
  );
}
