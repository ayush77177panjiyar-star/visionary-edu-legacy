import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Monogram } from "@/components/monogram";

/** Cinematic first-visit loading curtain. Shows once per session. */
export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("ab-loaded")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.sessionStorage.setItem("ab-loaded", "1");
      return;
    }
    setVisible(true);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      window.sessionStorage.setItem("ab-loaded", "1");
      setVisible(false);
      document.body.style.overflow = "";
    }, 2300);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Monogram className="h-24 w-24" />
          </motion.div>

          <motion.p
            className="eyebrow mt-8 text-gold-soft"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transforming Education. Inspiring Generations.
          </motion.p>

          <div className="mt-8 h-px w-56 overflow-hidden bg-white/15">
            <motion.div
              className="h-full bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
