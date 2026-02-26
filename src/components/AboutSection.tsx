import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import meetingImg from "@/assets/meeting.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "100+", label: "Empresas Atendidas" },
    { value: "5+", label: "Anos de Experiência" },
    { value: "98%", label: "Clientes Satisfeitos" },
  ];

  return (
    <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={meetingImg}
                alt="Cássio Domingos em reunião"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-secondary/20 -z-10" />
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-xl bg-primary/10 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Sobre Mim</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-6 text-foreground">
              Cássio Domingos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sou Gestor Comercial especializado em posicionamento orgânico no Google. 
              Ajudo empresas a se destacarem nas pesquisas locais, aumentando sua 
              visibilidade e atraindo clientes qualificados — tudo sem gastar com anúncios pagos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com mais de 100 empresas atendidas, minha missão é transformar negócios 
              locais em referências online na sua região.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary font-display">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
