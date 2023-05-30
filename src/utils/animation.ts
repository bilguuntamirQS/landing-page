import { type Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const MotionLink = motion(Link);
export const MotionImage = motion(Image);

export const fadeInMotion: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (custom: number) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay: custom,
    },
  }),
  hover: {
    y: "-5px",
    transition: {
      duration: 0.3,
    },
  },
};

export const fadeInUpMotion: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "just",
      delay: custom,
      duration: 1,
    },
  }),
  hover: {
    y: "-5px",
    transition: {
      duration: 0.3,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "just",
      delay: custom,
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  show: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "just",
      delay: custom,
      duration: 1,
    },
  }),
};

export const jumpMotion: Variants = {
  hidden: {
    y: "15px",
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
};
