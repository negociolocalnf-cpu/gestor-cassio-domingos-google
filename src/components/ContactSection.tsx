import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="py-24 px-6 md:px-12 lg:px-24 bg-foreground">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-background">
            Vamos Conversar?
          </h2>
          <p className="mt-4 text-background/60 max-w-md mx-auto">
            Entre em contato e descubra como posicionar sua empresa no topo do Google.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Phone,
              label: "Telefone",
              value: "(22) 98160-5225",
              href: "tel:+5522981605225",
            },
            {
              icon: Mail,
              label: "WhatsApp",
              value: "Enviar Mensagem",
              href: "https://wa.me/5522981605225",
            },
            {
              icon: MapPin,
              label: "Atendimento",
              value: "Online · Todo Brasil",
              href: "#",
            },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-background/10 bg-background/5 p-8 text-center transition-colors hover:bg-background/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-widest text-background/40">{item.label}</span>
              <span className="font-semibold text-background">{item.value}</span>
            </motion.a>
          ))}
        </div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          {[
            { icon: MessageCircle, href: "https://wa.me/5522981605225", label: "WhatsApp" },
            { icon: Instagram, href: "https://instagram.com/consultorgoogle_", label: "Instagram" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/c%C3%A1ssio-d-a817371b6", label: "LinkedIn" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-background/10 text-background/60 transition-all hover:border-secondary hover:text-secondary hover:scale-110"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
