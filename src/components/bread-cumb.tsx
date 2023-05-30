import { type FC } from "react";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";
import Link from "next/link";

interface Props {
  title: string;
}

const BreadCumb: FC<Props> = ({ title }) => {
  return (
    <section className="-mt-24 bg-blueGray-100 pb-12 pt-40">
      <div className="container text-center">
        <motion.h1
          variants={fadeInUpMotion}
          initial="hidden"
          animate="show"
          className="mb-5 text-2xl font-bold lg:text-4xl"
        >
          {title}
        </motion.h1>
        <motion.ul
          variants={fadeInUpMotion}
          initial="hidden"
          animate="show"
          className="mx-auto pb-12 text-sm text-gray-500 lg:text-sm"
        >
          <li className="inline-flex items-center">
            <Link href="#" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-5 w-auto text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
          <li className="inline-flex items-center text-gray-400">
            <span>Portfolio</span>
          </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default BreadCumb;
