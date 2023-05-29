import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";

export interface IExpert {
  top?: boolean;
  image: string;
  name: string;
  role: string;
  delay?: number;
}

const Expert: FC<IExpert> = ({ top, image, name, role, delay }) => {
  return (
    <div className={`w-1/2 px-5 lg:w-1/4 ${top ? "mb-12" : ""}`}>
      <motion.div
        variants={fadeInUpMotion}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        viewport={{ once: true }}
        custom={delay}
        className="py-8 px-4 text-center bg-white rounded border border-gray-100 shadow hover:border-gray-200"
      >
        <Image
          src={image}
          width={500}
          height={500}
          alt="avatar"
          className="object-cover object-top mx-auto mb-6 w-24 h-24 rounded-full"
        />
        <strong className="mt-6 mb-2 text-base">{name}</strong>
        <p className="mt-3 text-xs text-gray-500">{role}</p>
      </motion.div>
    </div>
  );
};

Expert.defaultProps = {
  top: false,
  delay: 0,
};

export default Expert;
