import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "~/components/counter";
import dashboardImage from "~/assets/dashboard.png";
import patternImage from "~/assets/pattern.png";
import intersectSvg from "~/assets/intersect.svg";
import featureImage from "~/assets/img-1.png";
import blobTearSvg from "~/assets/blob-tear.svg";
import { useEffect, useRef, useState } from "react";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import instagramSvg from "~/assets/instagram-blue.svg";
import {
  MotionLink,
  fadeInDown,
  fadeInMotion,
  fadeInRight,
  fadeInUpMotion,
  fadeUpMotion,
  jumpMotion,
} from "~/utils/animation";
import HowWeWork from "~/components/howWeWork";

interface Product {
  title: string;
  description: string;
  image: string;
}

const Home: NextPage = () => {
  const products: Product[] = [
    {
      title: "New Event",
      description: "Oxford univercity",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-4.jpg",
    },
    {
      title: "Shopping Mall",
      description: "Alibaba Co",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-5.jpg",
    },
    {
      title: "User growth",
      description: "Harvard univercity",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-2.jpg",
    },
    {
      title: "Product Launch",
      description: "Cocacola, Co",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-3.jpg",
    },
  ];

  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current)
      setCarouselWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="-mt-24 bg-top bg-no-repeat pt-24 xl:bg-contain"
        style={{
          backgroundImage: `url(${(intersectSvg as { src: string }).src})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="pt-12 text-center">
            <div className="mx-auto mb-8 max-w-2xl">
              <motion.h2
                variants={fadeInMotion}
                initial="hidden"
                animate="show"
                className="mb-4 font-heading text-3xl font-bold lg:text-5xl lg:leading-normal"
              >
                Committed to People
                <br />
                Commited <span className="text-blue-500">to the Future</span>
              </motion.h2>
              <motion.p
                variants={fadeInMotion}
                initial="hidden"
                animate="show"
                className="leading-relaxed text-blueGray-400"
              >
                We are <strong className="text-blue-500">Monst</strong>, a
                Creative Design{" "}
              </motion.p>
            </div>
            <div>
              <MotionLink
                variants={fadeInUpMotion}
                initial="hidden"
                animate="show"
                href="/#key-features"
                scroll={false}
                className="btn-primary mr-2 px-8 py-4"
              >
                Key Features
              </MotionLink>
              <MotionLink
                variants={fadeInUpMotion}
                initial="hidden"
                animate="show"
                custom={0.3}
                href="/#how-we-work"
                scroll={false}
                className="btn-white mr-2 px-8 py-4"
              >
                How We Work?
              </MotionLink>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mb-8 mt-16 max-w-6xl md:mt-8">
          <Image
            src={patternImage}
            alt="pattern"
            className="w-full"
            width={942}
            height={485}
          />
          <motion.div
            variants={jumpMotion}
            initial="hidden"
            animate="show"
            className="absolute left-[14%] top-[9%] h-[66%] w-[72%]"
          >
            <Image
              className="w-full rounded"
              src={dashboardImage}
              width={678}
              height={436}
              alt="dashboard"
            />
          </motion.div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between pb-16 pt-8">
            <motion.div
              variants={fadeInUpMotion}
              initial="hidden"
              animate="show"
              custom={0.2}
              whileHover="hover"
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
              whileHover="hover"
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
              whileHover="hover"
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
              whileHover="hover"
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
      {/* Features */}
      <section
        className="overflow-x-hidden py-12 md:py-16 lg:py-32"
        id="key-features"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-none">
            <div className="w-full lg:w-1/2">
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:py-6 lg:pr-32"
              >
                <div className="mb-4">
                  <motion.span
                    variants={fadeInDown}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={0.9}
                    className="rounded-xl bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-500"
                  >
                    Why choose us
                  </motion.span>
                  <motion.h2
                    variants={fadeInUpMotion}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={0.3}
                    className="mt-5 font-heading text-4xl font-bold"
                  >
                    Key Features
                  </motion.h2>
                </div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  custom={0.5}
                  viewport={{ once: true }}
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
                    <p className="leading-loose text-blueGray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur nostrum pariatur ab.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.7}
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
                    <p className="leading-loose text-blueGray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur nostrum pariatur ab.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.9}
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
                    <p className="leading-loose text-blueGray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur nostrum pariatur ab.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <div className="relative my-12 w-full lg:my-0 lg:w-1/2">
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.5}
              >
                <motion.div
                  variants={jumpMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                  }}
                >
                  <Image
                    className="relative z-10 mx-auto w-full rounded-xl"
                    src={featureImage}
                    alt="feature-image"
                  />
                </motion.div>
                <Image
                  className="absolute left-0 top-0 -ml-12 -mt-12 w-40"
                  src={blobTearSvg as string}
                  alt="blog-tear"
                />
                <Image
                  className="absolute bottom-0 right-0 -mb-12 -mr-12 w-40"
                  src={blobTearSvg as string}
                  alt="blob-tear"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* How We Work*/}
      <HowWeWork />
      {/* Carousel */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="-mx-3 flex flex-wrap">
            <div className="relative mb-8 w-full text-center lg:mb-0 lg:w-1/3 lg:text-left">
              <div className="mx-auto mb-6 max-w-md lg:mb-0 lg:ml-0 lg:max-w-xs lg:pr-16">
                <motion.h2
                  variants={fadeInUpMotion}
                  custom={0.3}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mb-4 font-heading text-3xl font-bold md:text-4xl"
                >
                  Simple Solution for{" "}
                  <span className="text-blue-500">Complex</span> Connections
                </motion.h2>
                <motion.p
                  variants={fadeInUpMotion}
                  custom={0.9}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-xs leading-loose text-blueGray-400 md:text-base"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </motion.p>
              </div>
              <div className="flex justify-center lg:absolute lg:bottom-0 lg:left-0">
                <div className="flex">
                  <span className="mr-4 flex cursor-pointer p-3 text-blue-500">
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
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-4 flex cursor-pointer p-3 text-blue-500">
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap lg:w-2/3">
              <div className="relative w-full">
                <motion.div
                  ref={carouselRef}
                  className="cursor-grab overflow-hidden"
                  whileTap={{ cursor: "grabbing" }}
                >
                  <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -carouselWidth }}
                    className="flex gap-4 px-3 pb-5"
                  >
                    {products.map((i, index) => (
                      <div
                        key={`product-${index}`}
                        className="group border border-blueGray-100"
                      >
                        <Image
                          src={i.image}
                          alt="product"
                          width={249}
                          height={340.98}
                          className="pointer-events-none min-w-[20rem] overflow-clip rounded-xl"
                        />
                        <div className="flex items-end justify-between">
                          <div>
                            <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                              {i.title}
                            </h1>
                            <p className="mt-2 text-xs text-gray-500">
                              {i.description}
                            </p>
                          </div>
                          <div>
                            <Link
                              href="#"
                              className="mr-2 inline-block rounded border border-blue-200 px-4 py-3 text-xs font-semibold leading-none tracking-wide text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* World */}
      <section
        className="bg-top bg-no-repeat py-20"
        style={{
          backgroundImage:
            "url(https://wp.alithemes.com/html/monst/assets/imgs/elements/blob.svg)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="relative px-4 py-20 lg:p-20">
            <div className="mx-auto max-w-lg text-center">
              <motion.h2
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-4 font-heading text-3xl font-bold lg:text-4xl"
              >
                Subscribe now to{" "}
                <span className="text-blue-500">Our Newsletter</span> and get
                the Coupon code.
              </motion.h2>
              <motion.p
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.3}
                className="mb-8 text-blueGray-400"
              >
                All your information is completely confidential
              </motion.p>
            </div>
            <motion.div
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.5}
              className="mx-auto flex max-w-md flex-wrap rounded-lg bg-white p-4"
            >
              <div className="mb-3 flex w-full rounded bg-blueGray-100 px-3 md:mb-0 md:mr-6 md:w-2/3">
                <svg
                  className="my-auto h-6 w-6 text-blueGray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <input
                  className="w-full bg-blueGray-100 py-4 pl-3 text-xs font-semibold leading-none text-blueGray-500 outline-none"
                  type="text"
                  placeholder="Type your e-mail"
                />
              </div>
              <button
                className="w-full rounded bg-blue-500 px-8 py-4 text-xs font-semibold leading-none text-white hover:bg-blue-500 md:w-auto"
                type="submit"
              >
                Sign Up
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="container mx-auto px-4"
        >
          <div className="-mx-3 mb-12 flex flex-wrap text-center lg:mb-20 lg:text-left">
            <div className="mb-6 w-full px-3 lg:mb-0 lg:w-1/5">
              <Link
                href="/"
                className="mx-auto inline-block text-3xl font-semibold leading-none lg:mx-0"
              >
                <Image
                  className="h-10"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg"
                  height={40}
                  width={125.8}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="mb-8 w-full px-3 lg:mb-0 lg:w-2/5">
              <p className="mx-auto max-w-md leading-relaxed text-blueGray-400 lg:mx-0 lg:max-w-full lg:pr-32 lg:text-xl">
                Helping you <strong>maximize</strong> operations management with
                digitization
              </p>
            </div>
            <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/5">
              <p className="mb-2 font-heading font-bold lg:mb-4 lg:text-lg">
                Office
              </p>
              <p className="text-blueGray-400 lg:text-lg">
                359 Hidden Valley Road, NY
              </p>
            </div>
            <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/5">
              <p className="mb-2 font-heading font-bold lg:mb-4 lg:text-lg">
                Contacts
              </p>
              <p className="text-blueGray-400 lg:text-lg">(+01) 234 568</p>
              <p className="text-blueGray-400 lg:text-lg">contact@monst.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <p className="text-sm text-blueGray-400">
              © 2021. All rights reserved. Designed by{" "}
              <Link href="#" className="text-blue-400">
                Alithemes.com
              </Link>
            </p>
            <div className="order-first -mx-2 mb-4 lg:order-last lg:mb-0">
              <Link href="#" className="inline-block px-2">
                <Image src={facebookSvg as string} alt="facebook-logo" />
              </Link>
              <Link href="#" className="inline-block px-2">
                <Image src={twitterSvg as string} alt="facebook-logo" />
              </Link>
              <Link href="#" className="inline-block px-2">
                <Image src={instagramSvg as string} alt="facebook-logo" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
