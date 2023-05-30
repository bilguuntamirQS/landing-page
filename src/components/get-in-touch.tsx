import type { FC } from "react";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";

const GetInTouch: FC = () => {
  return (
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
                    defaultChecked
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
  );
};

export default GetInTouch;
