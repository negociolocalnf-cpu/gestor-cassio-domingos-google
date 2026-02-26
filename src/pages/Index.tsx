import { motion } from "framer-motion";
import { MessageCircle, Instagram, Linkedin, Star, Palette, MapPin, Award, ShoppingBag, BarChart3 } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";
import LinkCard from "@/components/LinkCard";
import SocialButton from "@/components/SocialButton";

const links = [
  {
    title: "Gestor Cássio Domingos",
    description: "Fale comigo pelo WhatsApp",
    href: "https://wa.me/5522981605225",
    icon: <MessageCircle className="h-6 w-6" />,
  },
  {
    title: "Consultorgoogle_",
    description: "Siga no Instagram",
    href: "https://www.instagram.com/consultorgoogle_",
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    title: "Negócio Local NF",
    description: "Transformamos seu negócio local em referência online",
    href: "https://replica-rendere.lovable.app/",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "Portfólio Empresarial",
    description: "Veja nossos trabalhos e resultados",
    href: "https://www.canva.com/design/DAGuMDP9fg8/uPQbzqO0lW-6N37H-5FwkQ/edit",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Feedback (Depoimentos)",
    description: "O que nossos clientes dizem",
    href: "https://www.canva.com/design/DAGxbRxagfg/y-aIfgpSIMCrjW7XMGqyrQ/edit",
    icon: <Star className="h-6 w-6" />,
  },
  {
    title: "Meus Designs (Criativo)",
    description: "Veja nossos designs criativos",
    href: "https://www.canva.com/design/DAGvFfaUfEk/9PxXj_3-BK48jKEJLI5p-g/edit",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Plaquinhas Personalizadas",
    description: "Modelos de plaquinhas para avaliação",
    href: "https://www.canva.com/design/DAGwm_YwwjI/ZcFOkWPLjF7-VpMPwSBH5g/edit",
    icon: <ShoppingBag className="h-6 w-6" />,
  },
  {
    title: "Plaquinhas de Avaliação Google",
    description: "Adquira a sua plaquinha personalizada",
    href: "https://wa.me/5522981605225?text=Olá,%20gostaria%20de%20adquirir%20uma%20plaquinha%20de%20avaliação%20Google",
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

const socials = [
  {
    href: "https://api.whatsapp.com/send?phone=22981605225",
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
  },
  {
    href: "https://instagram.com/consultorgoogle_",
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/c%C3%A1ssio-d-a817371b6",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
];

const Index = () => {
  return (
    <div
      className="flex min-h-screen justify-center px-4 py-10"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="w-full max-w-lg">
        {/* Avatar & Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
            className="mb-4"
          >
            <div className="h-28 w-28 rounded-full border-4 border-primary/50 p-1" style={{ boxShadow: "var(--glow-primary)" }}>
              <img
                src={avatarImg}
                alt="Cássio Domingos"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold font-display text-foreground tracking-tight"
          >
            CÁSSIO DOMINGOS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground"
          >
            Destaque sua empresa no Google, sem investir em tráfego pago. Apareça para quem realmente tem interesse em adquirir seus produtos e serviços.
          </motion.p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-3">
            {socials.map((social, i) => (
              <SocialButton key={social.label} {...social} index={i} />
            ))}
          </div>
        </div>

        {/* Link Cards */}
        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <LinkCard key={link.title} {...link} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-center text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} Cássio Domingos · Consultor Google
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
