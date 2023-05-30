import { type NextPage } from "next";
import { motion } from "framer-motion";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import Link from "next/link";
import Image from "next/image";

const Portfolio: NextPage = () => {
  return (
    <>
      {/* Header */}
      <section className="-mt-24 bg-blueGray-100 pb-12 pt-40">
        <div className="container text-center">
          <motion.h1
            variants={fadeInUpMotion}
            initial="hidden"
            animate="show"
            className="mb-5 text-2xl font-bold lg:text-4xl"
          >
            Our Portfolio
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
      {/* Project */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-lg text-center">
            <motion.span
              variants={fadeInUpMotion}
              custom={0.1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600"
            >
              Out Projects
            </motion.span>
            <motion.h2
              variants={fadeInUpMotion}
              custom={0.3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 mt-2 font-heading text-3xl font-bold md:text-4xl"
            >
              Check Out
              <br /> Our <span className="text-blue-500">Latest</span> Project
            </motion.h2>
            <motion.p
              variants={fadeInUpMotion}
              custom={0.5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="leading-loose text-blueGray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </motion.p>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap lg:mb-0">
            <div className="lg:md-0 mb-6 flex w-full flex-wrap px-3 lg:w-1/2">
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pb-3 pr-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-10.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pb-3 pl-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-11.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pr-3 pt-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-12.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pl-3 pt-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-13.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
            </div>
            <motion.div
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover="hover"
              custom={0.6}
              className="relative w-full px-3 lg:w-1/2"
            >
              <Image
                className="w-full rounded object-cover lg:h-128"
                alt=""
                src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-9.jpg"
                width={800}
                height={891}
              />
              <div className="card-label-center absolute rounded bg-white px-4 py-12 text-center">
                <div className="flex w-full place-content-center">
                  <p className="text-center text-2xl font-bold capitalize">
                    Web Design
                  </p>
                </div>
                <div className="flex w-full place-content-center">
                  <p className="mb-6 mt-5 text-center font-sans">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi eveniet rem fugiat deserunt molestias.
                  </p>
                </div>
                <MotionLink
                  whileHover={{
                    y: "-2px",
                    transitionDuration: "0.3s",
                  }}
                  href="#"
                  className="inline-block rounded bg-blue-400 px-4 py-3 text-xs font-semibold leading-none tracking-wide text-white hover:bg-blue-500"
                >
                  View Details
                </MotionLink>
              </div>
            </motion.div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap lg:mb-0">
            <motion.div
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover="hover"
              custom={0.6}
              className="relative w-full px-3 lg:w-1/2"
            >
              <Image
                className="w-full rounded object-cover lg:h-128"
                alt=""
                src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-9.jpg"
                width={800}
                height={891}
              />
              <div className="card-label-center absolute rounded bg-white px-4 py-12 text-center">
                <div className="flex w-full place-content-center">
                  <p className="text-center text-2xl font-bold capitalize">
                    CMS Development
                  </p>
                </div>
                <div className="flex w-full place-content-center">
                  <p className="mb-6 mt-5 text-center font-sans">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi eveniet rem fugiat deserunt molestias.
                  </p>
                </div>
                <MotionLink
                  whileHover={{
                    y: "-2px",
                    transitionDuration: "0.3s",
                  }}
                  href="#"
                  className="inline-block rounded bg-blue-400 px-4 py-3 text-xs font-semibold leading-none tracking-wide text-white hover:bg-blue-500"
                >
                  View Details
                </MotionLink>
              </div>
            </motion.div>
            <div className="lg:md-0 mb-6 flex w-full flex-wrap px-3 lg:w-1/2">
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pb-3 pr-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-10.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pb-3 pl-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-11.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pr-3 pt-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-12.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover="hover"
                className="h-64 w-1/2 pl-3 pt-3"
                custom={0.1}
              >
                <Image
                  className="h-full rounded object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-13.jpg"
                  alt=""
                  width={800}
                  height={534}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
