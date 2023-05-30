import type { NextPage } from "next";
import Image from "next/image";
import Counter from "~/components/counter";
import Expert, { type IExpert } from "~/components/expert";
import HowWeWork from "~/components/howWeWork";
import { motion } from "framer-motion";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import Footer from "~/components/footer";

const About: NextPage = () => {
  const experts: IExpert[] = [
    {
      top: true,
      name: "Geraldine Tusoy",
      role: "CEO, Co Founders",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-1.png",
    },
    {
      top: true,
      name: "Clara Kolawole",
      role: "CEO-Founder",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-2.png",
    },
    {
      top: true,
      name: "Chris Fulton",
      role: "Project-Manager",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-3.png",
    },
    {
      top: true,
      name: "Dany Connolly",
      role: "Direct-Founder",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-4.png",
    },
    {
      name: "Al-amin Bishash",
      role: "Director",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-5.png",
    },
    {
      name: "Sanuya Santa",
      role: "Marketing",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-6.png",
    },
    {
      name: "Steven Job",
      role: "Designer",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-7.png",
    },
    {
      name: "Romario",
      role: "Designer",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-8.png",
    },
  ];

  return (
    <>
      {/* Hero */}
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
      {/* Counter */}
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
                <Counter to={150} />
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
                <Counter to={57} />
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
                <Counter to={500} />
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
                <Counter to={320} />
                <p className="text-xs text-blueGray-400 sm:text-base">
                  Research Work
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <HowWeWork />
      {/* Experts */}
      <section className="py-20">
        <div className="container text-center">
          <div className="mx-auto mb-16 max-w-lg">
            <span className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
              About Our Expert
            </span>
            <h2 className="mb-4 mt-2 font-heading text-3xl font-bold md:text-4xl">
              Entrust Your Project To Our
              <span className="text-blue-500"> Specialists</span>
            </h2>
            <p className="leading-loose text-blueGray-400">
              Our IT services converge business and technology experts to help
              to manage business categories
            </p>
          </div>
          <div className="-mx-5 flex flex-wrap">
            {experts.map((i, index) => (
              <Expert
                key={`expert-${i.name}`}
                name={i.name}
                image={i.image}
                top={i.top}
                role={i.role}
                delay={(index % 4) * 0.2 + 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section className="pb-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-8 max-w-md">
              <motion.span
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                custom={0.1}
                viewport={{ once: true }}
                className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600"
              >
                Contact Us
              </motion.span>
              <motion.h2
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-2 font-heading text-4xl font-bold"
              >
                We will<span className="text-blue-500"> be glad</span> to hear
                from you!
              </motion.h2>
            </div>
            <div>
              <form>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.5}
                  viewport={{ once: true }}
                  className="mb-4 text-sm"
                >
                  <span className="mr-4 font-semibold">Departament: </span>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="department"
                      value={1}
                      defaultChecked
                      className="mr-1"
                    />
                    <span>Support</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      className="mr-1"
                      name="department"
                      value={2}
                    />
                    <span>Sales</span>
                  </label>
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.3}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <input
                    type="text"
                    className="w-full rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                    placeholder="Subject"
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.3}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <input
                    type="text"
                    className="w-full rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                    placeholder="Name"
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.3}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <input
                    type="email"
                    className="w-full rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                    placeholder="name@example.com"
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.3}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <textarea
                    className="w-full resize-none rounded bg-blueGray-50 p-4 text-xs font-semibold leading-none outline-none"
                    placeholder="Message..."
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.3}
                  viewport={{ once: true }}
                  className="mb-4 flex items-center justify-between"
                >
                  <label className="flex w-full rounded bg-blueGray-50 px-2">
                    <input className="hidden" type="file" name="Choose file" />
                    <span className="my-1 ml-auto cursor-pointer rounded bg-blueGray-400 px-4 py-3 text-xs font-semibold leading-none text-white hover:bg-blueGray-600">
                      Browse
                    </span>
                  </label>
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.3}
                  viewport={{ once: true }}
                  className="flex items-center justify-between"
                >
                  <label>
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      value={1}
                    />
                    <span className="text-sm font-semibold">
                      I agree to terms and conditions.
                    </span>
                  </label>
                  <button
                    className="rounded bg-blue-500 px-8 py-4 text-sm font-semibold leading-none text-white hover:bg-blue-700"
                    type="submit"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Subscribe */}
      <section className="bg-blue-500 py-20">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-white">
              Subscribe now to{" "}
              <span className="text-blue-200">Our Newsletter</span>
              <br />
              and get the Coupon code.
            </h2>
            <p className="mb-8 text-blueGray-200">
              All your information is completely confidential
            </p>
            <div className="mx-auto flex max-w-lg flex-wrap">
              <div className="mb-3 flex w-full rounded border border-blue-300 bg-blue-500 px-3 md:mb-0 md:mr-6 md:w-2/3">
                <svg
                  className="my-auto h-6 w-6 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <input
                  type="text"
                  className="w-full bg-blue-500 py-4 pl-3 text-xs font-semibold leading-none text-white placeholder-white outline-none"
                  placeholder="Type your e-mail"
                />
              </div>
              <button
                className="w-full rounded border border-blue-300 bg-white px-8 py-4 text-xs font-semibold leading-none text-blue-800 transition duration-300 ease-in-out hover:border-white hover:bg-blue-500 hover:text-white md:w-auto"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
