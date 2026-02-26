import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import consultingImg from "@/assets/consulting.png";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Resultados Reais</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-6 text-foreground">
              Destaque e posicionamento para o seu negócio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Veja como ajudo empresas a se tornarem referência no Google. 
              Através de estratégias comprovadas de SEO local, seus clientes encontram 
              você antes da concorrência.
            </p>
            <ul className="space-y-3">
              {[
                "Apareça nas primeiras posições do Google Maps",
                "Aumente suas avaliações e credibilidade",
                "Atraia clientes qualificados organicamente",
                "Resultados mensuráveis e transparentes",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Video / Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={consultingImg}
                className="w-full h-[400px] md:h-[500px] object-cover"
              >
                <source src="/video/avatar-video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
