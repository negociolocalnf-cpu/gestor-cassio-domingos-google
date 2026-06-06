import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

import almek from "@/assets/clients/almek.jpg";
import cmGourmet from "@/assets/clients/cm-gourmet.jpg";
import sagContabil from "@/assets/clients/sag-contabil.jpg";
import fermaq from "@/assets/clients/fermaq.jpg";
import panobianco from "@/assets/clients/panobianco.jpg";
import vitarisFit from "@/assets/clients/vitaris-fit.jpg";
import barberMachado from "@/assets/clients/barber-machado.jpg";
import bocao from "@/assets/clients/bocao.jpg";
import pradoPneus from "@/assets/clients/prado-pneus.jpg";
import ralykFestas from "@/assets/clients/ralyk-festas.jpg";

const clients = [
  { name: "Almek", img: almek },
  { name: "CM Gourmet", img: cmGourmet },
  { name: "SAG Contábil", img: sagContabil },
  { name: "Fermaq", img: fermaq },
  { name: "Panobianco", img: panobianco },
  { name: "Vitaris Fit", img: vitarisFit },
  { name: "Barber Shop Machado", img: barberMachado },
  { name: "Bocão Despachante", img: bocao },
  { name: "Prado Pneus", img: pradoPneus },
  { name: "Ralyk Festas", img: ralykFestas },
];

const LogosClientes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-border py-14 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Empresas que confiam no meu trabalho
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={client.img}
                alt={client.name}
                loading="lazy"
                className="h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogosClientes;
