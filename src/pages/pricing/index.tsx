import type { NextPage } from "next";
import ContactUs from "~/components/contact-us";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Subscribe from "~/components/subscribe";
import { motion } from "framer-motion";
import { fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import Link from "next/link";
import type { FC } from "react";
import Counter from "~/components/counter";

interface Props {
  title: string;
  price?: number;
}

const PricingItem: FC<Props> = ({ title, price }) => {
  return (
    <div className="border-b border-gray-200 last:border-none last:border-transparent">
      <motion.div
        variants={fadeInMotion}
        custom={0.1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="-mx-3 flex flex-wrap p-6"
      >
        <div className="mb-2 w-full px-3 text-center text-lg font-semibold lg:mb-0 lg:w-1/6 lg:text-left lg:text-base lg:font-normal">
          {title}
        </div>
        <div className="mb-6 w-full px-3 lg:mb-0 lg:w-4/6">
          <p className="mb-4 leading-loose lg:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida,
            hendrerit enim non, gravida turpis.
          </p>
          <ul className="flex flex-col justify-start space-y-2 lg:flex-row lg:space-x-8 lg:space-y-0">
            <li className="flex">
              <svg
                className="mr-2 h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-blueGray-400">12 Emails</span>
            </li>
            <li className="flex">
              <svg
                className="mr-2 h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-blueGray-400">8 Datebase</span>
            </li>
            <li className="flex">
              <svg
                className="mr-2 h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-blueGray-400">Unlimited Domains</span>
            </li>
            <li className="flex">
              <svg
                className="mr-2 h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-blueGray-400">50 GB Storage</span>
            </li>
          </ul>
        </div>
        <div className="w-full self-center px-3 text-xs lg:w-1/6">
          <Link
            className="mb-2 block rounded bg-blueGray-200 py-4 text-center font-semibold hover:bg-blue-500 hover:text-white"
            href="#"
          >
            Buy {price || 25}$
          </Link>
          <p className="text-center text-blueGray-400">per month</p>
        </div>
      </motion.div>
    </div>
  );
};

const Pricing: NextPage = () => {
  const pricingItems: Props[] = [
    {
      title: "Beginner",
    },
    {
      title: "Intermediate",
    },
    {
      title: "Advanced",
      price: 65,
    },
    {
      title: "Professional",
    },
  ];

  return (
    <>
      <Hero />
      <Counter />
      <section className="py-20">
        <div className="container">
          <div className="mb-16 max-w-lg">
            <motion.h2
              variants={fadeInUpMotion}
              custom={0.1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-4 font-heading text-3xl font-bold lg:text-4xl"
            >
              Start saving time today and
              <span className="text-blue-500"> choose</span> your best plan
            </motion.h2>
            <motion.p
              variants={fadeInUpMotion}
              custom={0.3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-base text-blueGray-400 lg:text-lg"
            >
              Best for freelance developers who need to save time
            </motion.p>
          </div>
          <div className="rounded border border-gray-200 bg-white shadow">
            {pricingItems.map((i, index) => (
              <PricingItem key={`pricing-item-${index}`} {...i} />
            ))}
          </div>
        </div>
      </section>
      <ContactUs />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Pricing;
