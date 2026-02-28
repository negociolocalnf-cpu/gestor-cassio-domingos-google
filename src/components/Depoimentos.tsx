import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Renata Oliveira",
    role: "Proprietária · Clínica Estética Renova",
    text: "O Cássio transformou a presença digital da minha clínica. Em menos de 3 meses, saímos da página 3 para o topo do Google Maps. O número de agendamentos pelo Google triplicou. Profissional excepcional, dedicado e que entrega resultados reais.",
  },
  {
    name: "Marcos Vinícius",
    role: "Sócio · MV Contabilidade",
    text: "Contratei o Cássio sem muitas expectativas, mas ele superou tudo. Nossas avaliações saltaram de 12 para mais de 80, e hoje somos o escritório contábil mais bem avaliado da região. Recomendo de olhos fechados para quem quer crescer no digital.",
  },
  {
    name: "Juliana Ferreira",
    role: "CEO · Espaço Gourmet JF",
    text: "Antes do Cássio, nosso restaurante era praticamente invisível online. Hoje aparecemos em primeiro lugar nas buscas locais e recebemos clientes novos todos os dias dizendo que nos encontraram no Google. Investimento que se paga sozinho.",
  },
  {
    name: "André Luís",
    role: "Diretor · AL Imóveis",
    text: "O trabalho do Cássio é cirúrgico. Ele entende exatamente o que o algoritmo do Google precisa e entrega um plano claro, com métricas e acompanhamento semanal. Nossa imobiliária dobrou o volume de leads orgânicos em 4 meses. Simplesmente o melhor do mercado.",
  },
  {
    name: "Camila Rodrigues",
    role: "Fundadora · Studio Pilates Corpo & Mente",
    text: "Eu já tinha tentado agências e freelancers, mas nenhum entregou o que o Cássio entregou. Ele é transparente, pontual e os resultados falam por si. Meu studio aparece em todas as buscas relevantes da cidade. Gratidão total por esse profissional incrível.",
  },
];

const Depoimentos = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  };

  return (
    <section className="py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">
            Depoimentos
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            O Que Dizem Sobre Meu Trabalho
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Empresários que confiaram no meu trabalho e hoje colhem resultados reais no Google.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12" style={{ boxShadow: "var(--card-shadow)" }}>
            <Quote className="mx-auto mb-6 h-10 w-10 text-secondary/25" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  "{t.text}"
                </p>

                <div className="mt-8 flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-md transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-secondary" : "w-2.5 bg-border hover:bg-muted-foreground/40"}`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
