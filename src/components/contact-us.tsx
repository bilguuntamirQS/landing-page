import { motion } from "framer-motion";
import type { FC } from "react";
import { fadeInUpMotion } from "~/utils/animation";

const ContactUs: FC = () => {
  return (
    <section className="py-20">
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
  );
};

export default ContactUs;
