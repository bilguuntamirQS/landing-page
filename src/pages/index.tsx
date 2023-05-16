import { type NextPage } from "next";
import Header from "~/components/header";
import Intersect from "~/assets/intersect.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Dashboard from "~/assets/dashboard.png";
import Pattern from "~/assets/pattern.png";
import Counter from "~/components/counter";

const Home: NextPage = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
