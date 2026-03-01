import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  Search,
  MapPin,
  Star,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import Depoimentos from "@/components/Depoimentos";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import heroImg from "@/assets/hero-photo.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";
import consultingImg from "@/assets/consulting-new.jpg";
import meetingImg from "@/assets/meeting.jpg";
import resultados2Img from "@/assets/resultados-2.jpg";

/* ───────── NAVBAR ───────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="font-display text-lg font-bold">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>Cássio</span>{" "}
          <span className="text-secondary">Domingos</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5522981605225"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
            style={{ background: "var(--cta-gradient)" }}
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-b border-border bg-card px-5 pb-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ───────── HERO ───────── */
const Hero = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Cássio Domingos" className="h-full w-full object-cover object-top" />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-32 lg:px-8">
      <div className="max-w-xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary"
        >
          Consultor Google · Gestor Comercial
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-extrabold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          Posicione sua empresa no{" "}
          <span className="text-secondary">topo do Google</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg leading-relaxed text-primary-foreground/65"
        >
          Mais de 100 empresas atendidas. Aumente sua visibilidade sem investir em anúncios pagos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="https://wa.me/5522981605225"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-secondary-foreground shadow-lg shadow-secondary/20 transition-transform hover:scale-105"
            style={{ background: "var(--cta-gradient)" }}
          >
            <MessageCircle className="h-5 w-5" /> Fale Comigo
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Ver Serviços <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </div>

    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
    >
      <ChevronDown className="h-6 w-6 text-primary-foreground/40" />
    </motion.div>
  </section>
);

/* ───────── SOBRE ───────── */
const Sobre = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-24 px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={aboutPhoto}
            alt="Cássio Domingos"
            className="w-full rounded-2xl object-cover shadow-xl"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Quem Sou</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">Cássio Domingos</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Sou Gestor Comercial especializado em posicionamento orgânico no Google.
            Transformo negócios locais em referências online, ajudando empresas a
            serem encontradas por clientes qualificados — sem gastar com anúncios.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "100+", l: "Empresas" },
              { n: "10+", l: "Anos" },
              { n: "100%", l: "Satisfação" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-xl bg-muted p-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-primary"><AnimatedCounter target={s.n} /></div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────── SERVIÇOS ───────── */
const services = [
  { icon: Search, title: "SEO Local", desc: "Otimização para aparecer no topo das pesquisas locais." },
  { icon: MapPin, title: "Google Meu Negócio", desc: "Criação e gestão do seu perfil no Google Business." },
  { icon: Star, title: "Gestão de Avaliações", desc: "Estratégias para multiplicar suas avaliações positivas." },
  { icon: BarChart3, title: "Relatórios", desc: "Acompanhamento detalhado de resultados e métricas." },
];

const Servicos = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="bg-muted/50 py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Serviços</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Como Posso Ajudar
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-card p-7 transition-shadow"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── RESULTADOS ───────── */
const Resultados = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    "Apareça nas primeiras posições do Google Maps",
    "Aumente suas avaliações e credibilidade",
    "Atraia clientes qualificados organicamente",
    "Resultados mensuráveis e transparentes",
  ];

  return (
    <section className="py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-6 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Resultados</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Destaque e posicionamento para o seu negócio
          </h2>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <img
            src={consultingImg}
            alt="Consultoria com dados"
            className="h-64 w-full rounded-2xl object-cover shadow-xl sm:h-72"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
          <img
            src={resultados2Img}
            alt="Reunião de resultados"
            className="h-64 w-full rounded-2xl object-cover shadow-xl sm:h-72"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ───────── GALERIA ───────── */
const Galeria = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="bg-muted/50 py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Galeria</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            +100 Empresas Atendidas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center"
        >
          <video
            src="/video/empresas-video.mp4"
            controls
            className="mx-auto max-h-[450px] w-auto rounded-2xl shadow-xl"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ───────── CONTATO ───────── */
const Contato = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(22) 98160-5225",
      href: "https://wa.me/5522981605225",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "suporte13online@gmail.com",
      href: "mailto:suporte13online@gmail.com",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@consultorgoogle_",
      href: "https://www.instagram.com/consultorgoogle_/",
      color: "bg-pink-500/10 text-pink-600",
    },
  ];

  return (
    <section
      id="contato"
      className="py-24 px-5 lg:px-8"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Contato</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Vamos Conversar?
          </h2>
          <p className="mt-4 text-primary-foreground/50">
            Entre em contato e descubra como posicionar sua empresa no topo do Google.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${ch.color}`}>
                <ch.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                {ch.label}
              </span>
              <span className="text-sm font-semibold text-primary-foreground">{ch.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          href="https://wa.me/5522981605225"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-bold text-secondary-foreground shadow-lg shadow-secondary/20 transition-transform hover:scale-105"
          style={{ background: "var(--cta-gradient)" }}
        >
          <MessageCircle className="h-5 w-5" /> Solicitar Orçamento
        </motion.a>
      </div>
    </section>
  );
};

/* ───────── FOOTER ───────── */
const Footer = () => (
  <footer className="border-t border-border bg-card py-8 px-5 text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} Cássio Domingos · Gestor Comercial · Todos os direitos reservados
    </p>
  </footer>
);

/* ───────── FLOATING WHATSAPP ───────── */
const FloatingWA = () => (
  <a
    href="https://wa.me/5522981605225"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-primary-foreground shadow-lg shadow-green-500/30 transition-transform hover:scale-110"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

/* ───────── PAGE ───────── */
const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Resultados />
      <Depoimentos />
      <Galeria />
      <FAQ />
      <Contato />
      <Footer />
      <FloatingWA />
    </>
  );
};

export default Index;
