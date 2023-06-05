import type { NextPage } from "next";
import {
  MotionImage,
  MotionLink,
  fadeInMotion,
  fadeInUpMotion,
} from "~/utils/animation";
import { motion } from "framer-motion";

const NotFound: NextPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pb-32 pt-20">
        <div className="container text-center">
          <MotionImage
            src="https://wp.alithemes.com/html/monst/assets/imgs/illustrations/error2.png"
            variants={fadeInMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-12 md:max-w-md"
            width={1320}
            height={908}
            alt=""
          />
          <motion.span
            variants={fadeInMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="font-heading text-4xl font-bold text-blue-500"
          >
            Error 404
          </motion.span>
          <motion.h2
            variants={fadeInMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.3}
            className="mb-2 font-heading text-4xl font-bold"
          >
            Something went wrong!
          </motion.h2>
          <motion.p
            variants={fadeInUpMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.4}
            className="mb-6 text-blueGray-400"
          >
            Sorry, but we are unable to open this page.
          </motion.p>
          <div>
            <MotionLink
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.5}
              className="mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold leading-none text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block"
              href="/"
            >
              Go back to Homepage
            </MotionLink>
            <MotionLink
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.6}
              className="hover:text-blueGray-800 block rounded bg-blueGray-50 px-8 py-4 text-center text-xs font-semibold leading-none text-blueGray-500 hover:bg-blueGray-100 sm:inline-block"
              href="/contact"
            >
              Contact Us
            </MotionLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
