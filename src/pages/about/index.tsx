import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Counter from "~/components/counter";
import Expert, { type IExpert } from "~/components/expert";
import HowWeWork from "~/components/howWeWork";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import instagramSvg from "~/assets/instagram-blue.svg";
import { motion } from "framer-motion";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";

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
      <section className="relative pt-24 -mt-24">
        <div
          className="hidden absolute inset-0 z-0 ml-auto w-1/2 lg:block bg-blueGray-100"
          style={{ zIndex: -1 }}
        ></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="px-3 w-full lg:w-1/2">
              <div className="py-12">
                <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                  <motion.h2
                    variants={fadeInMotion}
                    initial="hidden"
                    animate="show"
                    className="mb-4 text-3xl font-bold lg:text-4xl font-heading"
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
                    className="block py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-center text-white bg-blue-400 rounded sm:inline-block sm:mr-3 sm:mb-0 hover:bg-blue-500"
                  >
                    Key Features
                  </MotionLink>
                  <MotionLink
                    href="#how-we-work"
                    variants={fadeInUpMotion}
                    initial="hidden"
                    animate="show"
                    scroll={false}
                    className="block py-4 px-8 text-xs border sm:inline-block border-blueGray-200 text-blueGray-400 hover:border-blueGray-300 hover:text-blueGray-600"
                  >
                    How We Work?
                  </MotionLink>
                </div>
              </div>
            </div>
            <div className="px-3 pb-10 mb-12 w-full lg:mb-0 lg:w-1/2 lg:bg-blueGray-100">
              <div className="flex justify-center items-center">
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
      <section className="pt-6 pb-2">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-between pt-8 pb-16">
            <motion.div
              variants={fadeInUpMotion}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="flex py-4 w-1/2 lg:w-auto"
            >
              <div className="flex justify-center items-center w-12 h-12 text-blue-500 rounded-xl sm:w-20 sm:h-20 bg-blueGray-50">
                <svg
                  className="w-8 h-8"
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
              <div className="ml-2 sm:py-2 sm:ml-6">
                <span className="font-bold sm:text-2xl font-heading">+ </span>
                <Counter to={150} />
                <p className="text-xs sm:text-base text-blueGray-400">
                  Annual Partner
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUpMotion}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex py-4 w-1/2 lg:w-auto"
            >
              <div className="flex justify-center items-center w-12 h-12 text-blue-500 rounded-xl sm:w-20 sm:h-20 bg-blueGray-50">
                <svg
                  className="w-8 h-8"
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
              <div className="ml-2 sm:py-2 sm:ml-6">
                <span className="font-bold sm:text-2xl font-heading">+ </span>
                <Counter to={57} />
                <span className="font-bold sm:text-2xl font-heading"> K</span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Completed Projects
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUpMotion}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="flex py-4 w-1/2 lg:w-auto"
            >
              <div className="flex justify-center items-center w-12 h-12 text-blue-500 rounded-xl sm:w-20 sm:h-20 bg-blueGray-50">
                <svg
                  className="w-8 h-8"
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
              <div className="ml-2 sm:py-2 sm:ml-6">
                <span className="font-bold sm:text-2xl font-heading">+ </span>
                <Counter to={500} />
                <p className="text-xs sm:text-base text-blueGray-400">
                  Happy Customers
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUpMotion}
              initial="hidden"
              animate="show"
              custom={0.8}
              className="flex py-4 w-1/2 lg:w-auto"
            >
              <div className="flex justify-center items-center w-12 h-12 text-blue-500 rounded-xl sm:w-20 sm:h-20 bg-blueGray-50">
                <svg
                  className="w-8 h-8"
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
              <div className="ml-2 sm:py-2 sm:ml-6">
                <span className="font-bold sm:text-2xl font-heading">+ </span>
                <Counter to={320} />
                <p className="text-xs sm:text-base text-blueGray-400">
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
        <div className="container mx-auto text-center">
          <div className="mx-auto mb-16 max-w-lg">
            <span className="inline-block py-1 px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-xl">
              About Our Expert
            </span>
            <h2 className="mt-2 mb-4 text-3xl font-bold md:text-4xl font-heading">
              Entrust Your Project To Our
              <span className="text-blue-500"> Specialists</span>
            </h2>
            <p className="leading-loose text-blueGray-400">
              Our IT services converge business and technology experts to help
              to manage business categories
            </p>
          </div>
          <div className="flex flex-wrap -mx-5">
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
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-8 max-w-md">
              <motion.span
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                custom={0.1}
                viewport={{ once: true }}
                className="inline-block py-1 px-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-xl"
              >
                Contact Us
              </motion.span>
              <motion.h2
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-2 text-4xl font-bold font-heading"
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
                    className="p-4 w-full text-xs font-semibold leading-none rounded outline-none bg-blueGray-50"
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
                    className="p-4 w-full text-xs font-semibold leading-none rounded outline-none bg-blueGray-50"
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
                    className="p-4 w-full text-xs font-semibold leading-none rounded outline-none bg-blueGray-50"
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
                    className="p-4 w-full text-xs font-semibold leading-none rounded outline-none resize-none bg-blueGray-50"
                    placeholder="Message..."
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.3}
                  viewport={{ once: true }}
                  className="flex justify-between items-center mb-4"
                >
                  <label className="flex px-2 w-full rounded bg-blueGray-50">
                    <input className="hidden" type="file" name="Choose file" />
                    <span className="py-3 px-4 my-1 ml-auto text-xs font-semibold leading-none text-white rounded cursor-pointer bg-blueGray-400 hover:bg-blueGray-600">
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
                  className="flex justify-between items-center"
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
                    className="py-4 px-8 text-sm font-semibold leading-none text-white bg-blue-500 rounded hover:bg-blue-700"
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
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white font-heading">
              Subscribe now to{" "}
              <span className="text-blue-200">Our Newsletter</span>
              <br />
              and get the Coupon code.
            </h2>
            <p className="mb-8 text-blueGray-200">
              All your information is completely confidential
            </p>
            <div className="flex flex-wrap mx-auto max-w-lg">
              <div className="flex px-3 mb-3 w-full bg-blue-500 rounded border border-blue-300 md:mr-6 md:mb-0 md:w-2/3">
                <svg
                  className="my-auto w-6 h-6 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <input
                  type="text"
                  className="py-4 pl-3 w-full text-xs font-semibold leading-none placeholder-white text-white bg-blue-500 outline-none"
                  placeholder="Type your e-mail"
                />
              </div>
              <button
                className="py-4 px-8 w-full text-xs font-semibold leading-none text-blue-800 bg-white rounded border border-blue-300 transition duration-300 ease-in-out md:w-auto hover:text-white hover:bg-blue-500 hover:border-white"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="relative">
        <div className="hidden absolute inset-0 ml-auto w-1/2 lg:block bg-blueGray-50"></div>
        <div className="container mx-auto">
          <div className="flex relative flex-wrap -mx-4">
            <div className="px-4 pt-20 mx-auto w-full max-w-lg text-center lg:mx-0 lg:w-1/2 lg:max-w-full lg:text-left">
              <Link
                href="/"
                className="inline-block mx-auto text-3xl font-semibold leading-none lg:ml-0"
              >
                <Image
                  className="h-10"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg"
                  height={40}
                  width={125.8}
                  alt="logo"
                />
              </Link>
              <div className="mt-12 mb-16">
                <p className="mb-4 text-xs text-center lg:text-left text-blueGray-400">
                  Subscribe and stay fully connected with product.
                </p>
                <div className="flex flex-wrap items-center lg:flex-nowrap">
                  <div className="flex px-4 mb-3 w-full rounded lg:mb-0 lg:w-2/3 bg-blueGray-50">
                    <svg
                      className="my-auto w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input
                      className="py-4 pl-3 w-full text-xs outline-none bg-blueGray-50 text-blueGray-400"
                      type="text"
                      placeholder="Type your e-mail"
                    />
                  </div>
                  <button
                    className="py-4 px-8 w-full text-xs font-semibold leading-none text-white bg-blue-400 rounded lg:ml-6 lg:w-auto hover:bg-blue-500 hover-up-2"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-xs text-blueGray-400">
                  © 2021. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <Link className="inline-block px-2" href="#">
                    <Image src={facebookSvg as string} alt="facebook-logo" />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image src={twitterSvg as string} alt="twitter-logo" />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image src={instagramSvg as string} alt="instagram-logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative px-4 pt-40 w-full lg:pl-12 lg:w-1/2">
              <div className="flex flex-row flex-wrap justify-around mb-12">
                <div className="mb-12 w-1/2 lg:w-auto">
                  <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-12 w-1/2 lg:w-auto">
                  <h5 className="mb-6 text-lg font-bold font-heading">
                    Quick Links
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Tesimonials
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Faqs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-12 w-1/2 lg:w-auto">
                  <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-lg text-blueGray-400 hover:text-blueGray-500"
                      >
                        Single
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center lg:hidden">
                <p className="text-xs text-blueGray-400">
                  © 2021. All rights reserved.
                </p>
                <div className="-mx-2 mt-4">
                  <Link className="inline-block px-2" href="#">
                    <Image src={facebookSvg as string} alt="facebook-logo" />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image src={twitterSvg as string} alt="twitter-logo" />
                  </Link>
                  <Link className="inline-block px-2" href="#">
                    <Image src={instagramSvg as string} alt="instagram-logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
