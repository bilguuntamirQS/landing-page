import { type Variants, motion } from "framer-motion";
import Link from "next/link";

export const MotionLink = motion(Link);

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

export const fadeInMotion: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const fadeInUpMotion: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "just",
      delay: custom,
    },
  }),
  hover: {
    y: "-5px",
    transitionDuration: "0.3s",
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "just",
    },
  },
};
