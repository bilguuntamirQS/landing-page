import { type NextPage } from "next";
import Intersect from "~/assets/intersect.svg";
import { type Variants, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Dashboard from "~/assets/dashboard.png";
import Pattern from "~/assets/pattern.png";
import Counter from "~/components/counter";
import Feature from "~/assets/img-1.png";
import BlobTear from "~/assets/blob-tear.svg";
import eatingSvg from "~/assets/eating.svg";
import spaceSvg from "~/assets/space.svg";
import tasksSvg from "~/assets/tasks.svg";

const Home: NextPage = () => {
  const featuresMotion: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.4,
        duration: 1.2,
      },
    }),
  };
  const howWeWorkMotion: Variants = {
    ...featuresMotion,
    hover: {
      y: -10,
    },
  };

  return (
    <>
      {/* Hero */}
      <section
        className="-mt-24 bg-top bg-no-repeat pt-24 xl:bg-contain"
        style={{
          backgroundImage: `url(${(Intersect as { src: string }).src})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="pt-12 text-center">
            <div className="mx-auto mb-8 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-4 font-heading text-3xl font-bold lg:text-5xl lg:leading-normal"
              >
                Committed to People
                <br />
                Commited <span className="text-blue-500">to the Future</span>
              </motion.h2>
              <p className="leading-relaxed text-blueGray-500">
                We are <strong className="text-blue-500">Monst</strong>, a
                Creative Design{" "}
              </p>
            </div>
            <div>
              <Link href="#key-features" className="btn-primary mr-2 px-8 py-4">
                Key Features
              </Link>
              <Link href="#how-we-work" className="btn-white mr-2 px-8 py-4">
                Key Features
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mb-8 mt-16 max-w-6xl md:mt-8">
          <Image
            src={Pattern}
            alt="pattern"
            className="w-full"
            width={942}
            height={485}
          />
          <motion.div
            animate={{
              y: -20,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              repeatType: "mirror",
            }}
            className="absolute left-[14%] top-[9%] h-[66%] w-[72%]"
          >
            <Image
              className="w-full rounded"
              src={Dashboard}
              width={678}
              height={436}
              alt="dashboard"
            />
          </motion.div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between pb-16 pt-8">
            <div className="flex w-1/2 py-4 lg:w-auto">
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
                <Counter to={150} />
                <p className="text-xs text-blueGray-500 sm:text-base">
                  Annual Partner
                </p>
              </div>
            </div>
            <div className="flex w-1/2 py-4 lg:w-auto">
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
                <Counter to={57} />
                <span className="font-heading font-bold sm:text-2xl"> K</span>
                <p className="text-xs text-blueGray-500 sm:text-base">
                  Completed Projects
                </p>
              </div>
            </div>
            <div className="flex w-1/2 py-4 lg:w-auto">
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
                <Counter to={500} />
                <p className="text-xs text-blueGray-500 sm:text-base">
                  Happy Customers
                </p>
              </div>
            </div>
            <div className="flex w-1/2 py-4 lg:w-auto">
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
                <Counter to={320} />
                <p className="text-xs text-blueGray-500 sm:text-base">
                  Research Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section
        className="overflow-x-hidden py-12 md:py-16 lg:py-32"
        id="key-featuers"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-none">
            <div className="w-full lg:w-1/2">
              <motion.div className="lg:py-6 lg:pr-32">
                <div className="mb-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="rounded-xl bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-500"
                  >
                    Why choose us
                  </motion.span>
                  <motion.h2
                    variants={featuresMotion}
                    initial="hidden"
                    whileInView="show"
                    custom={0}
                    className="mt-5 font-heading text-4xl font-bold"
                  >
                    Key Features
                  </motion.h2>
                </div>
                <motion.div
                  variants={featuresMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={1}
                  className="flex items-start py-4"
                >
                  <div className="mr-5 w-8 text-blue-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold">
                      Expand Your Reach
                    </h3>
                    <p className="leading-loose text-blueGray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur nostrum pariatur ab.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={featuresMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={2}
                  className="flex items-start py-4"
                >
                  <div className="mr-5 w-8 text-blue-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold">
                      Annualized Growth
                    </h3>
                    <p className="leading-loose text-blueGray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur nostrum pariatur ab.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={featuresMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={3}
                  className="flex items-start py-4"
                >
                  <div className="mr-5 w-8 text-blue-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold">
                      Book Your Providers
                    </h3>
                    <p className="leading-loose text-blueGray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur nostrum pariatur ab.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="relative my-12 w-full lg:my-0 lg:w-1/2">
              <motion.div>
                <motion.div
                  animate={{
                    y: -20,
                  }}
                  initial={{
                    opacity: 0,
                    x: 300,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 1.2,
                      repeatType: "mirror",
                    },
                    x: {
                      duration: 1.2,
                    },
                  }}
                >
                  <Image
                    className="relative z-10 mx-auto w-full rounded-xl"
                    src={Feature}
                    alt="feature-image"
                  />
                </motion.div>
                <Image
                  className="absolute left-0 top-0 -ml-12 -mt-12 w-40"
                  src={BlobTear as string}
                  alt="blog-tear"
                />
                <Image
                  className="absolute bottom-0 right-0 -mb-12 -mr-12 w-40"
                  src={BlobTear as string}
                  alt="blob-tear"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* How We Work*/}
      <section className="bg-blueGray-50 py-20" id="how-we-work">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
            <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
              <motion.h2
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -80,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                className="font-heading text-3xl font-bold md:text-4xl"
              >
                We are <span className="text-blue-500">awesome team</span>
                <br />
                for your business dream
              </motion.h2>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16">
              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 80,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                className="leading-loose text-blueGray-500"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
                imperdiet.
              </motion.p>
            </div>
          </div>
          <div className="-mx-3 -mb-6 flex flex-wrap text-center">
            <motion.div
              variants={howWeWorkMotion}
              custom={0}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              className="mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
            >
              <div className="rounded bg-white p-12 shadow">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 font-heading font-bold text-blue-800">
                  1
                </div>
                <Image
                  className="mx-auto my-4 h-48"
                  src={eatingSvg as string}
                  alt="eating"
                />
                <h3 className="mb-2 font-heading font-bold">
                  Project Initialization
                </h3>
                <p className="text-sm leading-relaxed text-blueGray-500">
                  Sed ac magna sit amet risus tristique interdum at vel velit.
                  In hac habitasse platea dictumst.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={howWeWorkMotion}
              custom={1}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              className="mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
            >
              <div className="rounded bg-white p-12 shadow">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 font-heading font-bold text-blue-800">
                  2
                </div>
                <Image
                  className="mx-auto my-4 h-48"
                  src={spaceSvg as string}
                  alt="space"
                />
                <h3 className="mb-2 font-heading font-bold">
                  Looking for Creative
                </h3>
                <p className="text-sm leading-relaxed text-blueGray-500">
                  Sed ac magna sit amet risus tristique interdum at vel velit.
                  In hac habitasse platea dictumst.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={howWeWorkMotion}
              custom={2}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              className="mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
            >
              <div className="rounded bg-white p-12 shadow">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 font-heading font-bold text-blue-800">
                  3
                </div>
                <Image
                  className="mx-auto my-4 h-48"
                  src={tasksSvg as string}
                  alt="space"
                />
                <h3 className="mb-2 font-heading font-bold">
                  Market Development
                </h3>
                <p className="text-sm leading-relaxed text-blueGray-500">
                  Sed ac magna sit amet risus tristique interdum at vel velit.
                  In hac habitasse platea dictumst.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
