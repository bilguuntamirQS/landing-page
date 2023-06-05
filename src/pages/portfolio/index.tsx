import { type NextPage } from "next";
import { motion } from "framer-motion";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import Image from "next/image";
import intersectSvg from "~/assets/intersect.svg";
import BreadCumb from "~/components/bread-cumb";
import Title from "~/components/title";
import GetInTouch from "~/components/get-in-touch";

const Portfolio: NextPage = () => {
  return (
    <>
      <BreadCumb title="Portfolio" />
      {/* Project */}
      <section className="py-12 md:py-20">
        <div className="container">
          <Title
            label="Out Projects"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis."
          >
            Check Out
            <br /> Our <span className="text-blue-500">Latest</span> Project
          </Title>
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
      {/* Pricing Plan */}
      <section
        className="bg-top bg-no-repeat py-20 xl:bg-contain"
        style={{
          backgroundImage: `url(${(intersectSvg as { src: string }).src})`,
        }}
      >
        <div className="container">
          <Title
            label="Out Projects"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis."
          >
            <span>Choose Your </span>
            <br />
            <span className="text-blue-600">Best</span>
            <span>Pricing Plan</span>
          </Title>
          <div className="mb-10 flex flex-wrap sm:justify-center">
            <motion.label
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.3}
              className="mb-2 mr-8 flex items-center"
            >
              <input type="radio" name="billing" value="1" />
              <span className="mx-2 font-semibold">Monthly Billing</span>
              <span className="inline-flex h-10 w-12 items-center justify-center rounded bg-blue-500 font-semibold text-white">
                $59
              </span>
            </motion.label>
            <motion.label
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.5}
              className="mb-2 flex items-center"
            >
              <input type="radio" name="billing" value="2" />
              <span className="mx-2 font-semibold">Annual Billing</span>
              <span className="inline-flex h-10 w-12 items-center justify-center rounded bg-blue-500 font-semibold text-white">
                $99
              </span>
            </motion.label>
          </div>
          <motion.div
            variants={fadeInUpMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap rounded bg-white shadow"
          >
            <div className="w-full px-3 md:w-1/2 lg:w-2/5">
              <div className="p-8 text-center">
                <span className="text-blueGray-400">Sign In</span>
                <h4 className="mb-6 text-2xl">Setup your payment</h4>
                <div className="mb-4 flex rounded bg-blueGray-100 px-4">
                  <input
                    className="w-full bg-blueGray-100 py-4 text-xs font-semibold leading-none placeholder-blueGray-400 outline-none"
                    type="email"
                    placeholder="name@email.com"
                  />
                  <svg
                    className="my-auto ml-4 h-6 w-6 text-blueGray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </div>
                <div className="mb-6 flex rounded bg-blueGray-100 px-4">
                  <input
                    className="w-full bg-blueGray-100 py-4 text-xs font-semibold leading-none placeholder-blueGray-400 outline-none"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button className="ml-4">
                    <svg
                      className="my-auto h-6 w-6 text-blueGray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="mb-5 text-left text-sm text-blueGray-400">
                  <label>
                    <input type="checkbox" name="terms" value="1" />
                    <span className="ml-1">
                      I agree to terms and conditions.
                    </span>
                  </label>
                </div>
                <button className="block w-full rounded bg-blue-400 p-4 text-center text-xs font-semibold leading-none text-white hover:bg-blue-500">
                  Purchase now
                </button>
              </div>
            </div>
            <div className="relative w-full overflow-hidden rounded-r bg-blue-500 px-3 md:w-1/2 lg:w-3/5">
              <div className="max-w-sm px-12 pt-12">
                <span className="text-xs text-blue-200">
                  Various Analysis Options
                </span>
                <h3 className="mb-4 font-heading text-4xl font-bold text-white">
                  Techno Provides Realtime Best Data Solutions.
                </h3>
              </div>
              <div className="absolute bottom-0 right-0">
                <div className="flex h-full items-center">
                  <Image
                    src="https://wp.alithemes.com/html/monst/assets/imgs/illustrations/online-shopping.png"
                    alt=""
                    className="h-80"
                    width={158.16}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default Portfolio;
