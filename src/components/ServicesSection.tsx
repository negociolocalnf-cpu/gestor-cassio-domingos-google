import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, MapPin, Star, BarChart3, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Local",
    description: "Otimização completa para sua empresa aparecer no topo das pesquisas locais do Google.",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    description: "Criação e gestão profissional do seu perfil no Google Business Profile.",
  },
  {
    icon: Star,
    title: "Gestão de Avaliações",
    description: "Estratégias para aumentar suas avaliações positivas e reputação online.",
  },
  {
    icon: BarChart3,
    title: "Relatórios & Análise",
    description: "Acompanhamento detalhado dos resultados e métricas do seu negócio.",
  },
  {
    icon: Globe,
    title: "Presença Digital",
    description: "Construção de uma presença digital sólida e consistente para sua marca.",
  },
  {
    icon: Smartphone,
    title: "Plaquinhas Google",
    description: "Plaquinhas personalizadas com QR Code para facilitar avaliações dos clientes.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">O Que Faço</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
            Serviços Especializados
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2 font-sans">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
