import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const faqs = t.faq.items;

  return (
    <section className="py-24 px-5 lg:px-8">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t.faq.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-card-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
