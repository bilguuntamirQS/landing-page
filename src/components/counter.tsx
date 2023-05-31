import type { FC } from "react";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";
import CounterItem from "./counter-item";

const Counter: FC = () => {
  return (
    <section className="pb-2 pt-6">
      <div className="container">
        <div className="flex flex-wrap justify-between pb-16 pt-8">
          <motion.div
            variants={fadeInUpMotion}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="flex w-1/2 py-4 lg:w-auto"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blueGray-50 text-blue-500 sm:h-20 sm:w-20">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <span className="font-heading font-bold sm:text-2xl">+ </span>
              <CounterItem to={150} />
              <p className="text-xs text-blueGray-400 sm:text-base">
                Annual Partner
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUpMotion}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="flex w-1/2 py-4 lg:w-auto"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blueGray-50 text-blue-500 sm:h-20 sm:w-20">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <span className="font-heading font-bold sm:text-2xl">+ </span>
              <CounterItem to={57} />
              <span className="font-heading font-bold sm:text-2xl"> K</span>
              <p className="text-xs text-blueGray-400 sm:text-base">
                Completed Projects
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUpMotion}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="flex w-1/2 py-4 lg:w-auto"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blueGray-50 text-blue-500 sm:h-20 sm:w-20">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <span className="font-heading font-bold sm:text-2xl">+ </span>
              <CounterItem to={500} />
              <p className="text-xs text-blueGray-400 sm:text-base">
                Happy Customers
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUpMotion}
            initial="hidden"
            animate="show"
            custom={0.8}
            className="flex w-1/2 py-4 lg:w-auto"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blueGray-50 text-blue-500 sm:h-20 sm:w-20">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <span className="font-heading font-bold sm:text-2xl">+ </span>
              <CounterItem to={320} />
              <p className="text-xs text-blueGray-400 sm:text-base">
                Research Work
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
