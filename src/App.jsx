import { useEffect, useRef, useState } from "react";
// logo
import logo from "./assets/logo_red_creativa.png";
// team fotos
import nachoFoto from "./assets/team/nacho.png";
import angieFoto from "./assets/team/angie.png";
import lauraFoto from "./assets/team/laura.png";
// clientes fotos
import cliente1 from "./assets/clients/cliente1.jpg";
import cliente2 from "./assets/clients/cliente2.jpg";
import cliente3 from "./assets/clients/cliente3.jpg";
import cliente4 from "./assets/clients/cliente4.jpg";
import cliente5 from "./assets/clients/cliente5.jpg";
import cliente6 from "./assets/clients/cliente6.jpg";
//casos fotos
import portRest from "./assets/portfolio/restaurante.jpg";
import portEcom from "./assets/portfolio/ecommerce.jpg";
import portMarca from "./assets/portfolio/marca-personal.jpg";
import portClinica from "./assets/portfolio/clinica.jpg";

import { motion } from "framer-motion";
import {
  BarChart3,
  Megaphone,
  PenTool,
  LineChart,
  CheckCircle2,
  Quote,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Sparkles,
  Sun,
  Moon,
  Users,
  Target,
  Zap,
  ShieldCheck,
  Building2,
  TrendingUp,
  BriefcaseBusiness,
  Search,
  ClipboardList,
  Rocket,
  Gauge,
  Globe,
  Play, VideoOff,

} from "lucide-react";



/* ---------------------- CONFIG ---------------------- */
// VIDEO ONLINE (embed). Cambia por el tuyo.
const VIDEO_URL =
  "https://www.youtube.com/embed/SWUC9VALrnA?autoplay=1&mute=1&loop=1&playlist=SWUC9VALrnA&controls=1&modestbranding=1&rel=0";


/* ---------------------- DATA ---------------------- */
const services = [
  {
    title: "Estrategia de Marketing",
    desc: "Planes a medida para crecer con foco en audiencia, canales y objetivos.",
    icon: BarChart3,
    tone: "from-brand-500/10 to-brand-700/10",
    iconColor: "text-brand-600",
  },
  {
    title: "Publicidad Digital",
    desc: "Meta/Google/TikTok Ads optimizados para resultados reales.",
    icon: Megaphone,
    tone: "from-accent-500/10 to-violet-500/10",
    iconColor: "text-accent-500",
  },
  {
    title: "Branding & Diseño",
    desc: "Identidad visual sólida que conecta y destaca tu marca.",
    icon: PenTool,
    tone: "from-violet-500/10 to-brand-500/10",
    iconColor: "text-violet-500",
  },
  {
    title: "Contenido & Social Media",
    desc: "Contenido que atrapa y convierte seguidores en clientes.",
    icon: LineChart,
    tone: "from-mint-500/10 to-brand-500/10",
    iconColor: "text-mint-500",
  },
];

const steps = [
  {
    title: "Diagnóstico",
    desc: "Entendemos tu negocio, objetivos, data y oportunidades reales.",
    icon: Search,
    color: "from-brand-500/15 to-brand-700/10",
    dot: "bg-brand-500",
  },
  {
    title: "Estrategia",
    desc: "Definimos el plan, canales, contenidos y KPIs con foco en ventas.",
    icon: ClipboardList,
    color: "from-accent-500/15 to-violet-500/10",
    dot: "bg-accent-500",
  },
  {
    title: "Ejecución",
    desc: "Lanzamos campañas y contenido con velocidad, creatividad y control.",
    icon: Rocket,
    color: "from-violet-500/15 to-brand-500/10",
    dot: "bg-violet-500",
  },
  {
    title: "Optimización",
    desc: "Medimos, iteramos y escalamos lo que funciona semana a semana.",
    icon: Gauge,
    color: "from-mint-500/15 to-brand-500/10",
    dot: "bg-mint-500",
  },
];



const portfolio = [
  { title: "Campaña Restaurante", tag: "Meta Ads + Creatividad", img: portRest, focus: "center" },
  { title: "Lanzamiento Ecommerce", tag: "Google Ads + CRO", img: portEcom, focus: "center" },
  { title: "Marca Personal", tag: "Branding + Social Media", img: portMarca, focus: "top" }, // suele servir para retratos verticales
  { title: "Clínica Estética", tag: "Full Funnel", img: portClinica, focus: "center" },
];


const testimonials = [
  {
    name: "Cliente A",
    role: "CEO, Comercio Local",
    text: "Duplicamos las ventas en 3 meses. El equipo es rápido, creativo y claro con métricas.",
  },
  {
    name: "Cliente B",
    role: "Founder, Startup",
    text: "Nos ayudaron a posicionarnos y tener leads constantes. Súper recomendados.",
  },
];

const team = [
  {
    name: "Nacho Galindo",
    role: "Desarrollador Web",
    tag: "Desarrollador Web",
    img: nachoFoto, // o null si no hay
    color: "from-brand-500/20 to-brand-700/10",
    socials: {
      instagram: "https://instagram.com/tuusuario",
      linkedin: "https://linkedin.com/in/tuusuario",
      web: "https://redcreativa.col",
    },
  },
  {
    name: "Angie Castiblanco.",
    role: "Fundadora & Estratega",
    tag: "CEO & Estrategia",
    img: angieFoto,
    color: "from-accent-500/20 to-violet-500/10",
    socials: {
      instagram: "#",
      linkedin: "#",
      web: "#",
    },
  },
  {
    name: "Laura Ramirez.",
    role: "Diseñadora Gráfica",
    tag: "Diseñadora gráfica",
    img: lauraFoto,
    color: "from-mint-500/20 to-brand-500/10",
    socials: {
      instagram: "#",
      linkedin: "#",
      web: "#",
    },
  },
];



const whyUs = [
  {
    title: "Resultados medibles",
    desc: "Todo lo que hacemos tiene KPI, seguimiento y optimización.",
    icon: Target,
    tone: "from-brand-500/10 to-brand-700/10",
    iconColor: "text-brand-600",
  },
  {
    title: "Creatividad que vende",
    desc: "Ideas bonitas sí, pero siempre con intención de conversión.",
    icon: Zap,
    tone: "from-accent-500/10 to-violet-500/10",
    iconColor: "text-accent-500",
  },
  {
    title: "Equipo ágil",
    desc: "Planificamos rápido, ejecutamos mejor y mejoramos semanalmente.",
    icon: Users,
    tone: "from-violet-500/10 to-brand-500/10",
    iconColor: "text-violet-500",
  },
  {
    title: "Cero humo",
    desc: "Te hablamos claro: qué hacemos, por qué y qué resultado esperar.",
    icon: ShieldCheck,
    tone: "from-mint-500/10 to-brand-500/10",
    iconColor: "text-mint-500",
  },
];

// MÉTRICAS FULL WIDTH
const metrics = [
  { label: "Clientes activos", value: 48, suffix: "+", icon: Building2, tone: "bg-brand-500/10 text-brand-700 dark:text-brand-300" },
  { label: "Leads generados", value: 312, suffix: "+", icon: Users, tone: "bg-accent-500/10 text-accent-700 dark:text-accent-300" },
  { label: "ROAS promedio", value: 4.2, suffix: "x", icon: TrendingUp, tone: "bg-violet-500/10 text-violet-700 dark:text-violet-300" },
  { label: "Proyectos entregados", value: 120, suffix: "+", icon: BriefcaseBusiness, tone: "bg-mint-500/10 text-mint-700 dark:text-mint-300" },
];

/* -------- LOGOS CLIENTES (pon tus links aquí) --------
   Si aún no tienes logos, deja img = null, 
   el carrusel muestra placeholders elegantes. */
const clientLogos = [
  { name: "SOLFINEX", img: cliente1 },
  { name: "HOTEL EL MORROCOY", img: cliente2 },
  { name: "BETANIA COFFE SHOP", img: cliente3 },
  { name: "AVICOLA DEL CESAR", img: cliente4 },
  { name: "DONAIDID ROBLES", img: cliente5 },
  { name: "LING MODA", img: cliente6 },
];

/* ---------------------- ANIMATIONS ---------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

function Section({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ---------------------- COUNTER ---------------------- */
function useCountUp(target, start = 0, duration = 1200, decimals = 0) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let raf;
    const t0 = performance.now();

    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const next = start + (target - start) * p;
      setValue(Number(next.toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration, decimals]);

  return value;
}

function MetricCard({ m, inView }) {
  const decimals = Number.isInteger(m.value) ? 0 : 1;
  const animated = useCountUp(inView ? m.value : 0, 0, 1200, decimals);
  const Icon = m.icon;

  return (
    <div className={`rounded-2xl p-5 ${m.tone} border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 shadow-lg`}>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold opacity-70">{m.label}</div>
        <Icon size={18} className="opacity-70" />
      </div>
      <div className="mt-2 text-3xl font-black tracking-tight">
        {animated}
        <span className="text-lg font-bold opacity-80 ml-1">{m.suffix}</span>
      </div>
    </div>
  );
}

/* ---------------------- LOGOS CAROUSEL (CSS infinite, no reset) ---------------------- */
function LogosCarousel({ logos }) {
  const track = [...logos, ...logos]; // duplicado para loop real

  return (
    <div className="relative overflow-hidden pt-10 pb-2 marquee">
      {/* fades laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10" />

      <div className="marquee__track">
        {track.map((c, i) => (
          <div key={c.name + i} className="relative group flex items-center">
            
            {/* SLOT NORMALIZADO */}
            <div
              className="
                h-16 md:h-20 w-40 md:w-48
                flex items-center justify-center
                bg-transparent
                transition-transform duration-300
                group-hover:-translate-y-1
              "
            >
              {c.img ? (
                <img
                  src={c.img}
                  alt={c.name}
                  className="
                    object-contain
                    max-h-9 md:max-h-11
                    max-w-[130px] md:max-w-[160px]
                    opacity-90 grayscale
                    group-hover:grayscale-0 group-hover:opacity-100
                    transition duration-300
                  "
                />
              ) : (
                <div className="text-sm font-semibold text-slate-500 dark:text-white/50">
                  {c.name}
                </div>
              )}
            </div>

            {/* TOOLTIP (NO LO QUITAMOS) */}
            <div
              className="
                pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10
                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
              "
            >
              <div className="relative rounded-lg bg-slate-900 text-white text-xs px-3 py-1 shadow-lg whitespace-nowrap dark:bg-white dark:text-slate-900">
                {c.name}
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 
                    border-l-[6px] border-l-transparent
                    border-r-[6px] border-r-transparent
                    border-t-[6px] border-t-slate-900
                    dark:border-t-white
                  "
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}




/* ---------------------- METRICS FULL WIDTH ---------------------- */
function MetricsFullWidth() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.35 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-14 bg-gradient-to-r from-brand-50 via-white to-accent-50 dark:from-white/5 dark:via-black dark:to-white/5 border-y border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7">
          <div>
            <h2 className="text-3xl font-extrabold">Resultados en números</h2>
            <p className="text-slate-700 dark:text-white/70 mt-1">
              Crecemos con marcas reales y métricas reales.
            </p>
          </div>
          <div className="text-sm text-slate-600 dark:text-white/60">
            Actualizado este mes
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} m={m} inView={inView} />
          ))}
        </div>

        {/* Logos aliados */}
        <div className="mt-10">
          <div className="text-sm font-semibold text-slate-700 dark:text-white/70 mb-3">
            Marcas aliadas
          </div>
          <LogosCarousel logos={clientLogos} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------- PARALLAX BLOBS ---------------------- */
function ParallaxBlobs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t1 = `translate3d(${scrollY * 0.03}px, ${scrollY * 0.05}px, 0)`;
  const t2 = `translate3d(${scrollY * -0.04}px, ${scrollY * 0.02}px, 0)`;
  const t3 = `translate3d(${scrollY * 0.02}px, ${scrollY * -0.03}px, 0)`;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        style={{ transform: t1 }}
        className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-400/30 blur-[120px]"
      />
      <div
        style={{ transform: t2 }}
        className="absolute top-40 -left-20 h-[460px] w-[460px] rounded-full bg-accent-400/30 blur-[140px]"
      />
      <div
        style={{ transform: t3 }}
        className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-violet-400/30 blur-[150px]"
      />
    </div>
  );
}



/* ---------------------- APP ---------------------- */
export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : false;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Hook simple para detectar cuando entra en pantalla
  function useInViewOnce(threshold = 0.35) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setInView(true);
        },
        { threshold }
      );
      if (ref.current) io.observe(ref.current);
      return () => io.disconnect();
    }, [threshold]);

    return { ref, inView };
  }

  function ProcessParallax() {
    const sectionRef = useRef(null);
    const [p, setP] = useState(0);

    useEffect(() => {
      const onScroll = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        // progreso 0..1 dentro de la sección
        const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
        setP(progress);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const t1 = `translate3d(${p * 30}px, ${p * -20}px, 0)`;
    const t2 = `translate3d(${p * -25}px, ${p * 18}px, 0)`;

    return (
      <div ref={sectionRef} className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
        <div
          style={{ transform: t1 }}
          className="absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-brand-400/25 blur-[90px]"
        />
        <div
          style={{ transform: t2 }}
          className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent-400/20 blur-[110px]"
        />
      </div>
    );
  }


  // CountUp para numeración animada
  function useCountUp(target, duration = 900) {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let raf;
      const t0 = performance.now();

      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const next = target * p;
        setValue(Math.round(next));
        if (p < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return value;
  }



  return (
    <div className="min-h-screen overflow-x-hidden bg-surface-50 text-slate-900 dark:bg-black dark:text-white">
      <ParallaxBlobs />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/50 border-b border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="RedCreativa"
              className="h-10 md:h-12 w-auto object-contain"
            />

          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-white/80">
            <a href="#servicios" className="hover:text-brand-600 dark:hover:text-white">Servicios</a>
            <a href="#portafolio" className="hover:text-brand-600 dark:hover:text-white">Portafolio</a>
            <a href="#equipo" className="hover:text-brand-600 dark:hover:text-white">Equipo</a>
            <a href="#proceso" className="hover:text-brand-600 dark:hover:text-white">Proceso</a>
            <a href="#testimonios" className="hover:text-brand-600 dark:hover:text-white">Testimonios</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm hover:bg-white dark:hover:bg-white/10 transition"
              title="Cambiar tema"
            >
              {dark ? (
                <span className="inline-flex items-center gap-2">
                  <Sun size={16} /> Claro
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Moon size={16} /> Oscuro
                </span>
              )}
            </button>

            <a
              href="https://wa.me/message/WO43764SNIMKG1"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-mint-500 px-4 py-2 text-sm font-semibold text-white hover:bg-mint-400 transition shadow-glow"
            >
              <MessageCircle size={16} />
              Hablemos
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-slate-700 dark:text-white/70 border border-black/5 dark:border-white/10">
              <Sparkles size={14} className="text-brand-600 dark:text-brand-400" />
              Agencia de Marketing Digital
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Creamos campañas que{" "}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                convierten
              </span>{" "}
              y marcas que crecen 🚀
            </h1>

            <p className="text-slate-700 dark:text-white/70 text-lg">
              Estrategia + Creatividad + Ads.
              Te ayudamos a escalar ventas con método y contenido que atrapa.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/message/WO43764SNIMKG1"
                target="_blank"
                className="rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black px-5 py-3 font-semibold inline-flex items-center gap-2 hover:opacity-90 transition shadow-lg"
              >
                Empezar ahora <ArrowRight size={18} />
              </a>

              <a
                href="#servicios"
                className="rounded-xl bg-white/80 dark:bg-white/5 px-5 py-3 font-semibold border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition"
              >
                Ver servicios
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-slate-600 dark:text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-mint-500" />
                +3000 seguidores
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-sun-500" />
                Resultados reales
              </div>
            </div>
          </motion.div>

          {/* MARCO SOLO PARA VIDEO (como tu captura) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/95 dark:bg-white/5 p-5 shadow-2xl">
              {/* video frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-brand-500/20 via-accent-500/10 to-violet-500/20">
                <iframe
                  src={VIDEO_URL}
                  title="RedCreativa video"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* mini stats debajo */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "ROAS", value: "4.2x", color: "bg-brand-500/10 text-brand-700 dark:text-brand-300" },
                  { label: "Leads", value: "+312", color: "bg-accent-500/10 text-accent-600 dark:text-accent-300" },
                  { label: "Ventas", value: "+78%", color: "bg-mint-500/10 text-mint-600 dark:text-mint-300" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl px-3 py-2 text-center ${s.color}`}>
                    <div className="text-xs font-semibold opacity-70">{s.label}</div>
                    <div className="text-lg font-black">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS FULL WIDTH + LOGOS CARRUSEL */}
      <MetricsFullWidth />

      {/* SERVICES */}
      <Section id="servicios" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Servicios</h2>
          <p className="text-slate-700 dark:text-white/70 mt-2">
            Soluciones completas para crecer en digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i + 1}
              variants={fadeUp}
              className="rounded-2xl bg-white/90 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 hover:scale-[1.02] transition shadow-lg"
            >
              <div className={`rounded-xl p-2 bg-gradient-to-br ${s.tone} w-fit`}>
                <s.icon className={s.iconColor} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO */}
<Section id="portafolio" className="mx-auto max-w-6xl px-4 py-16">
  <div className="mb-10 flex items-end justify-between gap-4">
    <div>
      <h2 className="text-3xl font-bold">Casos recientes</h2>
      <p className="text-slate-700 dark:text-white/70 mt-2">
        Algunas marcas que han crecido con nosotros.
      </p>
    </div>
    <div className="hidden md:flex text-sm text-slate-500 dark:text-white/60">
      Resultados • Creatividad • Performance
    </div>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {portfolio.map((p, i) => (
      <motion.article
        key={p.title}
        custom={i + 1}
        variants={fadeUp}
        className="
          group relative rounded-3xl bg-white/90 dark:bg-white/5
          border border-black/5 dark:border-white/10
          p-4 shadow-xl transition-all duration-300
          hover:-translate-y-1 hover:shadow-2xl
        "
      >
        {/* MEDIA BOX (proporción fija para todas) */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
          {p.img ? (
            <img
              src={p.img}
              alt={p.title}
              className="
                h-full w-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-[1.08]
              "
              style={{ objectPosition: p.focus || "center" }}
            />
          ) : (
            <div className="
              h-full w-full grid place-items-center text-sm
              bg-gradient-to-br from-brand-500/10 via-accent-500/10 to-violet-500/10
              border border-black/5 dark:border-white/10
              text-slate-500 dark:text-white/50
            ">
              Imagen próximamente
            </div>
          )}

          {/* overlay gradient hover */}
          <div className="
            absolute inset-0
            bg-gradient-to-t from-black/70 via-black/10 to-transparent
            opacity-0 group-hover:opacity-100
            transition duration-500
          "/>

          {/* chip flotante */}
          <div className="
            absolute top-3 left-3
            opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
            transition duration-500
          ">
            <span className="
              text-[11px] font-bold px-3 py-1 rounded-full
              bg-white/95 text-slate-900 shadow-sm
              dark:bg-black/70 dark:text-white
              backdrop-blur
            ">
              Caso real
            </span>
          </div>

          {/* texto que aparece sobre la foto */}
          <div className="
            absolute bottom-3 left-3 right-3
            opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0
            transition duration-500
          ">
            <div className="text-white font-semibold text-sm drop-shadow">
              {p.tag}
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-4 space-y-1">
          <h3 className="font-semibold text-slate-900 dark:text-white leading-snug">
            {p.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-white/60">
            {p.tag}
          </p>
        </div>

        {/* borde glow sutil en hover */}
        <div className="
          pointer-events-none absolute inset-0 rounded-3xl
          ring-0 ring-brand-500/0
          group-hover:ring-2 group-hover:ring-brand-500/20
          transition duration-500
        "/>
      </motion.article>
    ))}
  </div>
</Section>


      {/* TEAM / WHY US */}
      <Section id="equipo" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* WHY US */}
          <div>
            <h2 className="text-3xl font-bold">¿Por qué RedCreativa?</h2>
            <p className="text-slate-700 dark:text-white/70 mt-2">
              No somos “otra agencia”. Somos tu equipo de crecimiento.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {whyUs.map((w, i) => (
                <motion.div
                  key={w.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="rounded-2xl bg-white/90 dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 shadow-lg"
                >
                  <div className={`rounded-xl p-2 bg-gradient-to-br ${w.tone} w-fit`}>
                    <w.icon className={w.iconColor} />
                  </div>
                  <h3 className="mt-3 font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-white/70">
                    {w.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TEAM */}
          <div className="rounded-3xl bg-white/90 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 shadow-2xl">
            <div className="flex items-center gap-2">
              <Users className="text-brand-600 dark:text-brand-400" />
              <h3 className="text-2xl font-bold">Nuestro equipo</h3>
            </div>
            <p className="text-slate-600 dark:text-white/70 mt-2">
              Especialistas en estrategia, diseño y performance.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="
              group rounded-2xl border border-black/5 dark:border-white/10
              bg-gradient-to-br from-white to-surface-100 dark:from-white/5 dark:to-white/0
              p-4 shadow-lg transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
                >


                  {/* HEADER centrado dentro de la tarjeta */}
                  <div className="flex flex-col items-center text-center">
                    {/* FOTO circular dentro */}
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-black shadow-lg">
                      {m.img ? (
                        <img
                          src={m.img}
                          alt={m.name}
                          className="
          w-full h-full object-cover object-top
          transition-transform duration-500
          group-hover:scale-[1.07]
        "
                        />
                      ) : (
                        <div
                          className={`
          w-full h-full rounded-full
          bg-gradient-to-br ${m.color}
          grid place-items-center text-3xl font-black
          text-slate-900/70 dark:text-white/70
        `}
                        >
                          {m.name[0]}
                        </div>
                      )}

                      {/* Glow overlay suave */}
                      <div
                        className="
        absolute inset-0
        bg-gradient-to-t from-black/35 via-black/5 to-transparent
        opacity-0 group-hover:opacity-100 transition duration-500
      "
                      />

                      {/* Redes en hover (abajo del círculo) */}
                      <div className="
      absolute inset-0 flex items-end justify-center pb-2 gap-2
      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300
    ">
                        {m.socials?.instagram && (
                          <a
                            href={m.socials.instagram}
                            target="_blank"
                            className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-white transition shadow
                     dark:bg-black/70 dark:text-white"
                            title="Instagram"
                          >
                            <Instagram size={14} />
                          </a>
                        )}
                        {m.socials?.linkedin && (
                          <a
                            href={m.socials.linkedin}
                            target="_blank"
                            className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-white transition shadow
                     dark:bg-black/70 dark:text-white"
                            title="LinkedIn"
                          >
                            <Linkedin size={14} />
                          </a>
                        )}
                        {m.socials?.web && (
                          <a
                            href={m.socials.web}
                            target="_blank"
                            className="p-2 rounded-full bg-white/90 text-slate-900 hover:bg-white transition shadow
                     dark:bg-black/70 dark:text-white"
                            title="Sitio web"
                          >
                            <Globe size={14} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* TAG debajo del círculo */}
                    <span
                      className="
      mt-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold
      bg-white text-slate-900 border border-black/5 shadow-sm
      dark:bg-white/10 dark:text-white dark:border-white/10
    "
                    >
                      {m.tag}
                    </span>

                    {/* INFO centrada */}
                    <div className="mt-3">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {m.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-white/60">
                        {m.role}
                      </div>
                    </div>
                  </div>




                </div>
              ))}
            </div>

            {/* BLOQUE FINAL */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-brand-600/10 via-accent-500/10 to-violet-500/10 p-4 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2 font-semibold">
                <Target size={18} className="text-brand-600 dark:text-brand-400" />
                Trabajamos por objetivos, no por “likes”.
              </div>
              <p className="text-sm text-slate-600 dark:text-white/70 mt-1">
                Tu negocio manda. Nosotros lo escalamos.
              </p>
            </div>
          </div>
        </div>
      </Section>



      {/* PROCESS - STORY STEPS responsive */}
      <section id="proceso" className="relative mx-auto max-w-6xl px-4 py-16">
        {/* Parallax SOLO en esta sección */}
        <ProcessParallax />

        <div className="relative z-10 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Nuestro proceso
          </h2>
          <p className="text-slate-700 dark:text-white/70 mt-2 text-lg">
            Un paso a paso claro, tipo “story”, para escalar tu negocio.
          </p>
        </div>

        <div className="relative z-10">
          {/* Línea guía: vertical en móvil, horizontal en lg */}
          <div
            className="
        absolute left-4 top-0 h-full w-[2px]
        bg-gradient-to-b from-brand-500/40 via-accent-500/40 to-violet-500/40
        lg:left-0 lg:top-6 lg:h-[2px] lg:w-full lg:bg-gradient-to-r
      "
          />

          {/* 
      - En móvil: flex + scroll + snap
      - En lg+: grid sin overflow (se ven las 4)
    */}
          <div
            className="
        flex gap-5 overflow-x-auto pb-4 pt-2
        snap-x snap-mandatory scroll-smooth
        [-ms-overflow-style:none] [scrollbar-width:none]
        lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:snap-none
      "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>

            {steps.map((st, i) => {
              const Icon = st.icon;

              const { ref, inView } = useInViewOnce(0.4);
              const num = useCountUp(inView ? i + 1 : 0);

              return (
                <motion.div
                  key={st.title}
                  ref={ref}
                  className="
              snap-center shrink-0
              w-[85%] sm:w-[60%] md:w-[40%]
              lg:w-auto lg:snap-none
              relative
            "
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Punto sobre línea */}
                  <div
                    className={`
                absolute left-[10px] top-2 h-4 w-4 rounded-full
                ${st.dot} ring-4 ring-white dark:ring-black shadow-glow
                lg:left-1/2 lg:-translate-x-1/2 lg:top-0
              `}
                  />

                  {/* Card */}
                  <div
                    className="
                mt-10 rounded-2xl bg-white/95 dark:bg-white/5
                border border-black/5 dark:border-white/10
                p-6 shadow-xl hover:-translate-y-1 transition
              "
                  >
                    <div className="flex items-center justify-between">
                      {/* Icon micro-animación */}
                      <motion.div
                        initial={{ scale: 0.7, rotate: -6, opacity: 0 }}
                        animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 16,
                          delay: 0.08,
                        }}
                        className={`rounded-xl p-3 bg-gradient-to-br ${st.color} border border-black/5 dark:border-white/10`}
                      >
                        <Icon className="text-slate-900 dark:text-white" size={20} />
                      </motion.div>

                      {/* número con count */}
                      <div className="
                  text-4xl font-black tracking-tight
                  bg-gradient-to-r from-brand-600 via-accent-500 to-violet-500
                  bg-clip-text text-transparent
                ">
                        {String(num).padStart(2, "0")}
                      </div>
                    </div>

                    <h3 className="mt-4 text-lg font-bold">{st.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                      {st.desc}
                    </p>

                    {/* barra de progreso visual */}
                    <div className="mt-5 h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${(i + 1) * (100 / steps.length)}%` } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-500 via-accent-500 to-violet-500 rounded-full"
                      />
                    </div>

                    <div className="mt-3 text-xs font-semibold text-slate-700 dark:text-white/80 inline-flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-mint-500" />
                      Entregables y resultados
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* hint solo en móvil */}
          <div className="mt-3 text-xs text-slate-500 dark:text-white/50 lg:hidden">
            Desliza horizontalmente para ver todos los pasos →
          </div>
        </div>
      </section>





      {/* TESTIMONIALS */}
      <Section id="testimonios" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Testimonios</h2>
          <p className="text-slate-700 dark:text-white/70 mt-2">
            Lo que dicen nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i + 1}
              variants={fadeUp}
              className="rounded-2xl bg-white/90 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 shadow-xl"
            >
              <Quote className="text-accent-500" />
              <p className="mt-3 text-slate-800 dark:text-white/80">“{t.text}”</p>
              <div className="mt-4 text-sm text-slate-600 dark:text-white/60">
                <div className="font-semibold text-slate-900 dark:text-white">{t.name}</div>
                {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-brand-600/20 via-accent-500/20 to-violet-500/20 border border-black/5 dark:border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <h3 className="text-2xl font-bold">¿Listo para crecer?</h3>
            <p className="text-slate-700 dark:text-white/70 mt-2">
              Agenda una asesoría y empecemos hoy.
            </p>
          </div>

          <a
            href="https://wa.me/message/WO43764SNIMKG1"
            target="_blank"
            className="rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black px-6 py-3 font-semibold inline-flex items-center gap-2 hover:opacity-90 transition shadow-lg"
          >
            Contactar por WhatsApp <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 dark:border-white/10 mt-10 bg-white/50 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-white/60">
          <div>© {new Date().getFullYear()} RedCreativa. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-600 dark:hover:text-white"><Instagram size={18} /></a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-white"><Facebook size={18} /></a>
            <a href="#" className="hover:text-brand-600 dark:hover:text-white"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>

  {/* WhatsApp Floating ULTRA PREMIUM */}
<a
  href="https://wa.me/message/WO43764SNIMKG1"
  target="_blank"
  rel="noreferrer"
  aria-label="WhatsApp"
  className="
    fixed bottom-6 right-6 z-50
    h-16 w-16 md:h-[74px] md:w-[74px]
    rounded-full grid place-items-center
    bg-[#25D366]
    shadow-[0_14px_40px_rgba(37,211,102,0.45)]
    hover:shadow-[0_20px_60px_rgba(37,211,102,0.7)]
    transition-all duration-300 ease-out
    hover:-translate-y-1 active:scale-95
    group
  "
>
  {/* BORDE DEGRADADO animado */}
  <span
    className="
      absolute -inset-[2px] rounded-full
      bg-[conic-gradient(from_180deg_at_50%_50%,#00ff8a,#25D366,#00c2ff,#7c3aed,#00ff8a)]
      opacity-0 group-hover:opacity-100
      blur-[2px] transition duration-500
      animate-spin-slow
      -z-20
    "
  />

  {/* halo externo suave */}
  <span
    className="
      absolute inset-0 rounded-full
      bg-[#25D366]/35 blur-2xl opacity-60
      group-hover:opacity-90 transition duration-300
      -z-10
    "
  />

  {/* brillo interno tipo app */}
  <span
    className="
      absolute inset-0 rounded-full
      bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.8),transparent_55%)]
      opacity-70
    "
  />

  {/* pulse muy sutil */}
  <span
    className="
      absolute inset-0 rounded-full
      bg-[#25D366]/25
      animate-pulse-soft
    "
  />

  {/* ICONO oficial WhatsApp (limpio) */}
  <svg
    viewBox="0 0 24 24"
    className="h-9 w-9 md:h-10 md:w-10 fill-white drop-shadow-sm"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.48 0 .12 5.36.12 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.26-1.64a11.9 11.9 0 0 0 5.81 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.2-1.25-6.21-3.51-8.41ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.9 9.9 0 1 1 8.37 4.61Zm5.73-7.38c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.15-.21.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.7-.96-2.33-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.38-.28.31-1.07 1.05-1.07 2.57 0 1.51 1.1 2.98 1.25 3.19.15.2 2.16 3.3 5.23 4.63.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.82-.74 2.07-1.43.26-.7.26-1.3.18-1.43-.08-.13-.28-.2-.59-.36Z"/>
  </svg>
</a>



    </div>
  );
}
