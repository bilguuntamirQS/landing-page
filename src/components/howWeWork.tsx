import type { FC } from "react";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUpMotion } from "~/utils/animation";
import tasksSvg from "~/assets/tasks.svg";
import eatingSvg from "~/assets/eating.svg";
import spaceSvg from "~/assets/space.svg";
import Image from "next/image";

const HowWeWork: FC = () => {
  return (
    <section className="bg-blueGray-50 py-20" id="how-we-work">
      <div className="container">
        <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
          <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
            <motion.h2
              variants={fadeInDown}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-heading text-3xl font-bold md:text-4xl"
            >
              We are <span className="text-blue-500">awesome team</span>
              <br />
              for your business dream
            </motion.h2>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <motion.p
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="leading-loose text-blueGray-400"
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
            variants={fadeInUpMotion}
            custom={0.3}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true }}
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
              <p className="text-sm leading-relaxed text-blueGray-400">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUpMotion}
            custom={0.5}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true }}
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
              <p className="text-sm leading-relaxed text-blueGray-400">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUpMotion}
            custom={0.7}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true }}
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
              <p className="text-sm leading-relaxed text-blueGray-400">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
