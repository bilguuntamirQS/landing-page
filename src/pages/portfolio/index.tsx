import { type NextPage } from "next";
import { motion } from "framer-motion";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import Link from "next/link";
import Image from "next/image";
import intersectSvg from "~/assets/intersect.svg";
import Footer from "~/components/footer";

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
      {/* Pricing Plan */}
      <section
        className="bg-top bg-no-repeat py-20 xl:bg-contain"
        style={{
          backgroundImage: `url(${(intersectSvg as { src: string }).src})`,
        }}
      >
        <div className="container">
          <div className="mb-8 text-center">
            <motion.h2
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mx-auto mb-4 max-w-lg font-heading text-4xl font-bold"
            >
              <span>Choose Your </span>
              <br />
              <span className="text-blue-600">Best</span>
              <span>Pricing Plan</span>
            </motion.h2>
            <motion.p
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.3}
              className="mx-auto max-w-sm text-lg text-blueGray-400"
            >
              Great Things In Business Are Never Done By One Person
            </motion.p>
          </div>
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
      {/* Get in Touch */}
      <section className="pb-20">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:max-w-3xl">
            <div className="mb-12 text-center">
              <motion.h2
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.1}
                className="font-heading text-4xl font-bold"
              >
                Get in touch!
              </motion.h2>
              <motion.p
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.5}
                className="text-blueGray-400"
              >
                We will be glad to hear from you
              </motion.p>
            </div>
            <div className="-mx-3 flex flex-wrap text-center">
              <motion.div
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.1}
                className="mb-12 w-1/2 px-3 lg:w-1/3"
              >
                <svg
                  className="mx-auto mb-6 h-8 w-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div className="leading-relaxed">
                  <span className="text-sm text-blueGray-400">Phone</span>
                  <p>+ 48 654-430-309</p>
                  <p>+ 1 6532-430-309</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.3}
                className="mb-12 w-1/2 px-3 lg:w-1/3"
              >
                <svg
                  className="mx-auto mb-6 h-8 w-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div className="leading-relaxed">
                  <span className="text-sm text-blueGray-400">E-mail</span>
                  <p>contact@monst.com</p>
                  <p>pat@example.com</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.5}
                className="mb-12 w-full px-3 lg:w-1/3"
              >
                <svg
                  className="mx-auto mb-6 h-8 w-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div className="leading-relaxed">
                  <span className="text-sm text-blueGray-400">Address</span>
                  <p>11567 E Broadview Dr</p>
                  <p>Colorado(CO), 80117</p>
                </div>
              </motion.div>
            </div>
            <div>
              <form>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.1}
                  className="mb-4 text-sm"
                >
                  <span className="mr-4 font-semibold">Departament:</span>
                  <label className="mr-4">
                    <input
                      className="mr-1"
                      type="radio"
                      name="department"
                      value="1"
                      checked
                    />
                    <span>Support</span>
                  </label>
                  <label>
                    <input
                      className="mr-1"
                      type="radio"
                      name="department"
                      value="2"
                    />
                    <span>Sales</span>
                  </label>
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.3}
                  className="-mx-3 mb-4 flex flex-wrap"
                >
                  <div className="mb-4 w-full px-3 lg:mb-0 lg:w-1/2">
                    <div className="mb-4">
                      <input
                        className="w-full rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="w-full rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="w-full rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div>
                      <label className="flex rounded bg-blueGray-50 px-2">
                        <input
                          className="hidden"
                          type="file"
                          name="Choose file"
                        />
                        <span className="my-1 ml-auto cursor-pointer rounded bg-blueGray-500 px-4 py-3 text-xs font-semibold leading-none text-white hover:bg-blueGray-600">
                          {" "}
                          Browse
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="w-full px-3 lg:w-1/2">
                    <textarea
                      className="h-full w-full resize-none rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                </motion.div>
                <div className="flex items-center justify-between">
                  <label>
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      value="1"
                    />
                    <span className="text-sm font-semibold">
                      I agree to terms and conditions.
                    </span>
                  </label>
                  <button
                    className="rounded bg-blue-400 px-8 py-4 text-sm font-semibold leading-none text-white hover:bg-blue-500"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
