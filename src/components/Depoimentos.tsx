import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

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

  return (
    <section className="py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl" ref={ref}>
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-card p-7"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <Quote className="mb-4 h-8 w-8 text-secondary/20" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
