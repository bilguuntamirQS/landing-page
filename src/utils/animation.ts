import type { Variants } from "framer-motion";

export const fadeUpMotion: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.4,
      duration: 1.2,
    },
  }),
};
