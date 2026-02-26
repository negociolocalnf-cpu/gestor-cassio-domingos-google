import { motion } from "framer-motion";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  index: number;
}

const SocialButton = ({ href, icon, label, index }: SocialButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {icon}
    </motion.a>
  );
};

export default SocialButton;
