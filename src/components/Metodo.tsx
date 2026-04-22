import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Settings2, LineChart, TrendingUp, Users, Star, Search } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico",
    desc: "Analiso seu perfil no Google Meu Negócio, concorrência local e palavras-chave estratégicas para identificar oportunidades.",
  },
  {
    icon: Settings2,
    title: "Otimizações",
    desc: "Aplico melhorias técnicas no perfil, categorias, descrição, fotos, postagens e estratégia de avaliações para subir no ranking.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento",
    desc: "Monitoro métricas mensalmente, ajusto a estratégia e envio relatórios claros mostrando a evolução do seu negócio.",
  },
];

const metrics = [
  { icon: TrendingUp, value: "+250%", label: "Visualizações no perfil" },
  { icon: Search, value: "Top 3", label: "Posicionamento no Google Maps" },
  { icon: Star, value: "+180%", label: "Avaliações positivas" },
  { icon: Users, value: "+3x", label: "Contatos via Google" },
];

const Metodo = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metodo" className="py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">Meu Método</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Como entrego resultados reais
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Um processo estruturado em 3 etapas que transforma seu perfil no Google em uma máquina de captação de clientes.
          </p>
        </motion.div>

        {/* Etapas do método */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              className="relative rounded-2xl bg-card p-7"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-secondary-foreground" style={{ background: "var(--cta-gradient)" }}>
                {i + 1}
              </div>
              <div className="mb-4 mt-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Métricas típicas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="rounded-3xl border border-border bg-muted/40 p-8 md:p-12"
        >
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Métricas típicas</span>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Resultados médios em 90 dias
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Números baseados na média dos clientes atendidos. Resultados podem variar de acordo com o segmento e localização.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-2xl bg-card p-6 text-center"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <m.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-3xl font-extrabold text-primary">{m.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metodo;
