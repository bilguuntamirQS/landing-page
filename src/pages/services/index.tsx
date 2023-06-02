import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInDown, fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import Image from "next/image";
import type { FC } from "react";
import Counter from "~/components/counter";
import HowWeWork from "~/components/how-we-work";
import ContactUs from "~/components/contact-us";
import Subscribe from "~/components/subscribe";
import Footer from "~/components/footer";

interface Props {
  title: string;
  order: number;
}

const ServiceItem: FC<Props> = ({ title, order }) => {
  return (
    <motion.div
      variants={fadeInUpMotion}
      custom={0.2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full items-start pb-8 pt-4 md:w-1/2"
    >
      <div className="mb-5 w-8 text-blue-500">
        <span className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white">
          {order}
        </span>
      </div>
      <div>
        <h3 className="mb-2 font-heading text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-loose text-blueGray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          expedita animi.
        </p>
      </div>
    </motion.div>
  );
};

const Services: NextPage = () => {
  const serviceItems: Omit<Props, "order">[] = [
    {
      title: "Web design UX/UI",
    },
    {
      title: "React Develop",
    },
    {
      title: "Ecommerce Build",
    },
    {
      title: "CMS develop",
    },
  ];

  return (
    <>
      <section className="-mt-24 bg-blueGray-100 pb-12 pt-40">
        <div className="container">
          <motion.h1
            variants={fadeInUpMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-5 text-2xl font-bold lg:text-4xl"
          >
            Our Services
          </motion.h1>
          <motion.ul
            variants={fadeInUpMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex pb-12 text-sm text-gray-500 lg:text-sm"
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
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="inline-flex items-center">
              <Link href="#" className="text-gray-800 hover:text-blue-500">
                Our Services
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="inline-flex items-center text-gray-400">
              <span>Web Development</span>
            </li>
          </motion.ul>
        </div>
      </section>
      <section className="pt-12">
        <div className="container mx-auto py-12">
          <div className="flex flex-wrap">
            <motion.div
              variants={fadeInMotion}
              custom={0.5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-0 md:order-0 mb-12 w-full px-3 pr-12 md:mb-0 md:w-1/2"
            >
              <Image
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-6.jpg"
                width={640}
                height={800}
                alt=""
              />
            </motion.div>
            <div className="order-1 w-full px-3 md:order-1 md:w-1/2">
              <div className="max-w-md">
                <div className="mb-4">
                  <motion.span
                    variants={fadeInDown}
                    custom={0.9}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-xl bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-500"
                  >
                    Why choose us
                  </motion.span>
                  <motion.h2
                    variants={fadeInUpMotion}
                    custom={0.3}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-3 font-heading text-4xl font-bold"
                  >
                    We Provide Best <br />
                    <span className="text-blue-500">Web design </span>services
                  </motion.h2>
                </div>

                <motion.p
                  variants={fadeInUpMotion}
                  custom={0.1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mb-6 leading-loose text-blueGray-400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </motion.p>

                <div className="flex flex-wrap">
                  {serviceItems.map((i, index) => (
                    <ServiceItem
                      key={`service-item-${index}`}
                      {...i}
                      order={(index = 1)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Counter />
      <HowWeWork />
      <ContactUs />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Services;
