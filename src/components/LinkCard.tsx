import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
  index: number;
}

const LinkCard = ({ title, description, href, icon, index }: LinkCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-secondary"
    >
      {icon && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-card-foreground truncate">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">{description}</p>
        )}
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.a>
  );
};

export default LinkCard;
