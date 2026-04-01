import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";

const clients = [
  "Clínica Renova",
  "MV Contabilidade",
  "Espaço Gourmet JF",
  "AL Imóveis",
  "Studio Pilates",
  "Auto Center Premium",
  "Ótica Central",
  "Pet Shop Amigo",
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
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="flex items-center gap-2 rounded-lg bg-muted/60 px-5 py-3 text-sm font-medium text-muted-foreground"
            >
              <Building2 className="h-4 w-4 text-primary/60" />
              {name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogosClientes;
