import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo leva para minha empresa aparecer no topo do Google?",
    a: "Os primeiros resultados costumam surgir entre 30 e 90 dias, dependendo do nicho e da concorrência local. O trabalho é contínuo e os resultados crescem ao longo do tempo.",
  },
  {
    q: "Preciso investir em anúncios pagos?",
    a: "Não. Meu trabalho é focado em posicionamento orgânico — ou seja, sua empresa aparece nas primeiras posições sem gastar com Google Ads ou impulsionamentos.",
  },
  {
    q: "Como funciona a gestão do Google Meu Negócio?",
    a: "Eu cuido de todo o perfil: otimização de informações, publicação de posts, resposta a avaliações e estratégias para aumentar a visibilidade no Google Maps.",
  },
  {
    q: "O serviço funciona para qualquer tipo de empresa?",
    a: "Sim, atendo negócios locais de diversos segmentos — clínicas, restaurantes, escritórios, lojas, prestadores de serviço e muito mais.",
  },
  {
    q: "Como acompanho os resultados?",
    a: "Envio relatórios periódicos com métricas de visualizações, cliques, ligações e solicitações de rota, para que você veja o crescimento de forma transparente.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">
            FAQ
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-card-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
