import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Search, Settings, TrendingUp } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const icons = [MessageCircle, Search, Settings, TrendingUp];

const ComoFunciona = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  const steps = t.comoFunciona.steps.map((s, i) => ({
    ...s,
    icon: icons[i],
    step: String(i + 1).padStart(2, "0"),
  }));

  return (
    <section className="bg-muted/50 py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">
            {t.comoFunciona.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t.comoFunciona.title}
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-0.5 w-full translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-card"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <s.icon className="h-8 w-8 text-primary" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-secondary font-display text-xs font-bold text-secondary-foreground">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
