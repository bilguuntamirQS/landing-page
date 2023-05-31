import { motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";

const Hero: FC = () => {
  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div
          className="absolute inset-0 z-0 ml-auto hidden w-1/2 bg-blueGray-100 lg:block"
          style={{ zIndex: -1 }}
        ></div>
        <div className="container">
          <div className="-mx-3 flex flex-wrap items-center">
            <div className="w-full px-3 lg:w-1/2">
              <div className="py-12">
                <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                  <motion.h2
                    variants={fadeInMotion}
                    initial="hidden"
                    animate="show"
                    className="mb-4 font-heading text-3xl font-bold lg:text-4xl"
                  >
                    Committed to <span className="text-blue-500">People</span>
                    ,
                    <br />
                    Commited to the Future
                  </motion.h2>
                  <motion.p
                    variants={fadeInMotion}
                    initial="hidden"
                    animate="show"
                    className="leading-relaxed text-blueGray-400"
                  >
                    We are
                    <strong className="text-blue-500">Monst</strong>, a Creative
                    Design
                  </motion.p>
                  <motion.p
                    variants={fadeInMotion}
                    initial="hidden"
                    animate="show"
                    className="leading-relaxed text-blueGray-400"
                  >
                    Helping you maximize operations managment with digitization
                  </motion.p>
                </div>
                <div className="text-center lg:text-left">
                  <MotionLink
                    variants={fadeInUpMotion}
                    initial="hidden"
                    animate="show"
                    href="#key-features"
                    scroll={false}
                    className="mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold leading-none tracking-wide text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block"
                  >
                    Key Features
                  </MotionLink>
                  <MotionLink
                    href="#how-we-work"
                    variants={fadeInUpMotion}
                    initial="hidden"
                    animate="show"
                    scroll={false}
                    className="block border border-blueGray-200 px-8 py-4 text-xs text-blueGray-400 hover:border-blueGray-300 hover:text-blueGray-600 sm:inline-block"
                  >
                    How We Work?
                  </MotionLink>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full px-3 pb-10 lg:mb-0 lg:w-1/2 lg:bg-blueGray-100">
              <div className="flex items-center justify-center">
                <Image
                  className="lg:max-w-lg"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/illustrations/team.svg"
                  alt="team"
                  width={810}
                  height={463}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
