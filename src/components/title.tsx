import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";

interface Props {
  children: ReactNode;
  desc: string;
  label: string;
}

const Title: FC<Props> = ({ children, desc, label }) => {
  return (
    <div className="mx-auto mb-12 max-w-lg text-center">
      <motion.span
        variants={fadeInUpMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.1}
        className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeInUpMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.1}
        className="mb-4 mt-2 font-heading text-3xl font-bold md:text-4xl"
      >
        {children}
      </motion.h2>
      <motion.p
        variants={fadeInUpMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.1}
        className="leading-loose text-blueGray-400"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default Title;
