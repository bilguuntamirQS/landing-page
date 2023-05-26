import type { FC } from "react";
import { type Variants, motion } from "framer-motion";
import { fadeUpMotion } from "~/utils/animation";
import tasksSvg from "~/assets/tasks.svg";
import eatingSvg from "~/assets/eating.svg";
import spaceSvg from "~/assets/space.svg";
import Image from "next/image";

const HowWeWork: FC = () => {
  const howWeWorkMotion: Variants = {
    ...fadeUpMotion,
    hover: {
      y: -10,
    },
  };

  return (
    <section className="py-20 bg-blueGray-50" id="how-we-work">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-12 max-w-2xl lg:max-w-full">
          <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: -80,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              className="text-3xl font-bold md:text-4xl font-heading"
            >
              We are <span className="text-blue-500">awesome team</span>
              <br />
              for your business dream
            </motion.h2>
          </div>
          <div className="w-full lg:pl-16 lg:w-1/2">
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              className="leading-loose text-blueGray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
          <motion.div
            variants={howWeWorkMotion}
            custom={0}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            className="px-3 mb-6 w-full md:w-1/2 lg:w-1/3"
          >
            <div className="p-12 bg-white rounded shadow">
              <div className="flex justify-center items-center mx-auto w-12 h-12 font-bold text-blue-800 bg-blue-200 rounded-full font-heading">
                1
              </div>
              <Image
                className="my-4 mx-auto h-48"
                src={eatingSvg as string}
                alt="eating"
              />
              <h3 className="mb-2 font-bold font-heading">
                Project Initialization
              </h3>
              <p className="text-sm leading-relaxed text-blueGray-400">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={howWeWorkMotion}
            custom={1}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            className="px-3 mb-6 w-full md:w-1/2 lg:w-1/3"
          >
            <div className="p-12 bg-white rounded shadow">
              <div className="flex justify-center items-center mx-auto w-12 h-12 font-bold text-blue-800 bg-blue-200 rounded-full font-heading">
                2
              </div>
              <Image
                className="my-4 mx-auto h-48"
                src={spaceSvg as string}
                alt="space"
              />
              <h3 className="mb-2 font-bold font-heading">
                Looking for Creative
              </h3>
              <p className="text-sm leading-relaxed text-blueGray-400">
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={howWeWorkMotion}
            custom={2}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            className="px-3 mb-6 w-full md:w-1/2 lg:w-1/3"
          >
            <div className="p-12 bg-white rounded shadow">
              <div className="flex justify-center items-center mx-auto w-12 h-12 font-bold text-blue-800 bg-blue-200 rounded-full font-heading">
                3
              </div>
              <Image
                className="my-4 mx-auto h-48"
                src={tasksSvg as string}
                alt="space"
              />
              <h3 className="mb-2 font-bold font-heading">
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
