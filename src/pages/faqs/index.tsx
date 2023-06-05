import type { NextPage } from "next";
import intersectSvg from "~/assets/intersect.svg";
import { MotionImage, fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import { motion } from "framer-motion";
import { useState } from "react";
import GetInTouch from "~/components/get-in-touch";

const Faqs: NextPage = () => {
  const cards = [
    {
      icon: (
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
      ),
      title: "Internet Things",
    },
    {
      icon: (
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      title: "Artificial Intelligence",
    },
    {
      icon: (
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      ),
      title: "Cloud Computing",
    },
    {
      icon: (
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
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          ></path>
        </svg>
      ),
      title: "Data Analicys",
    },
  ];

  const [faqs, setFaqs] = useState([
    {
      question: "Where is my order? Quisque molestie",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. ",
      isOpen: true,
    },
    {
      question: "How can I return an item purchased online?",
      answer:
        "Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy. Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. ",
      isOpen: false,
    },
    {
      question: "Can I cancel or change my order?",
      answer:
        "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
      isOpen: false,
    },
    {
      question: "I have promotional or discount code?",
      answer:
        "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
      isOpen: false,
    },
    {
      question: "What are the delivery types you use?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. ",
      isOpen: false,
    },
    {
      question: "How can I pay for my purchases?",
      answer:
        "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
      isOpen: false,
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literatureId pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. ",
      isOpen: false,
    },
  ]);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-12 pb-20 bg-top bg-no-repeat lg:bg-contain"
        style={{
          backgroundImage: `url(${(intersectSvg as { src: string }).src})`,
        }}
      >
        <div className="container">
          <MotionImage
            variants={fadeInMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            width={384}
            height={322}
            className="mx-auto mb-10 sm:max-w-sm"
            src="https://wp.alithemes.com/html/monst/assets/imgs/illustrations/eating.svg"
            alt=""
          />
          <motion.form
            variants={fadeInMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.3}
            className="flex justify-center mx-auto mb-16 max-w-3xl"
          >
            <input
              className="p-5 w-2/3 text-xs font-bold bg-white rounded-l focus:border-gray-500 focus:outline-none placeholder-blueGray-800 font-heading"
              placeholder="Search, find any question you want to ask..."
            />
            <button className="pr-4 text-blue-600 bg-white rounded-r">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </motion.form>
          <div className="flex flex-wrap justify-between -mx-3 mb-12">
            {cards.map((i, index) => (
              <motion.div
                key={`card-${index}`}
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index * 0.2 + 0.1}
                className="px-3 mb-6 w-full md:w-1/2 lg:w-1/4"
              >
                <div className="p-6 bg-white rounded shadow">
                  <div className="mb-4 text-blue-500">{i.icon}</div>
                  <h4 className="mb-3 font-bold font-heading">{i.title}</h4>
                  <ul className="text-sm list-disc list-inside text-blueGray-400">
                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                    <li className="mb-2">Maecenas efficitur pharetra</li>
                    <li className="mb-2">Sed lorem ante</li>
                    <li>Ullamcorper neque</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mx-auto max-w-4xl">
            <motion.div
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.3}
              className="flex-1"
            >
              <div className="px-4 mx-auto lg:ml-0">
                <motion.h3
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mb-8 text-4xl font-bold font-heading"
                >
                  Faqs
                </motion.h3>
                {faqs.map((i, index) => (
                  <div key={`faq-${index}`}>
                    <button
                      onClick={() =>
                        setFaqs((curr) =>
                          curr.map((j) => ({
                            ...j,
                            isOpen:
                              j.question === i.question ? !i.isOpen : false,
                          }))
                        )
                      }
                      className="flex justify-between items-center py-3 mt-4 w-full font-bold border-b border-gray-200"
                    >
                      <span>{i.question}</span>
                      {i.isOpen ? (
                        <svg
                          className="fill-current"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            className="heroicon-ui"
                            d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="fill-current"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            className="heroicon-ui"
                            d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"
                          ></path>
                        </svg>
                      )}
                    </button>
                    <div
                      className={`mt-2 text-sm text-gray-700 ${i.isOpen ? "" : "hidden"
                        }`}
                    >
                      {i.answer}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default Faqs;
