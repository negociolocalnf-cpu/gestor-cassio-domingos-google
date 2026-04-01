import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "hsl(220 30% 6%)" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-display text-3xl font-bold"
            >
              <span className="text-white">Cássio</span>{" "}
              <span className="text-secondary">Domingos</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, delay: 0.3, ease: "easeInOut" }}
              className="mx-auto mt-4 h-0.5 rounded-full bg-secondary"
              style={{ maxWidth: 120 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
