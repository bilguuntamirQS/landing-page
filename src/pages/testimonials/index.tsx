import type { NextPage } from "next";
import { motion } from "framer-motion";
import {
  MotionImage,
  MotionLink,
  fadeInMotion,
  fadeInUpMotion,
} from "~/utils/animation";
import Image from "next/image";
import intersectSvg from "~/assets/intersect.svg";
import { comments } from "~/utils/consts";
import Comment from "~/components/comment";
import GetInTouch from "~/components/get-in-touch";
import Footer from "~/components/footer";

const Testimonials: NextPage = () => {
  const logos = [
    "https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-1.png",
    "https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-2.png",
    "https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-3.png",
    "https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-4.png",
    "https://wp.alithemes.com/html/monst/assets/imgs/logos/brands/brand-5.png",
  ];
  return (
    <>
      {/* Hero */}
      <section className="overflow-x-hidden py-20 pb-8">
        <div className="container">
          <div className="mb-24 flex flex-wrap">
            <motion.div
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="relative mb-20 h-128 w-full lg:mb-0 lg:w-1/2"
            >
              <div className="absolute right-0 top-0 -mr-6 mt-6 h-full w-full rounded-xl bg-blueGray-100"></div>
              <Image
                src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-1.png"
                alt=""
                width={1080}
                height={1080}
                className="absolute right-0 top-0 h-full w-full rounded-xl object-cover object-top"
              />
            </motion.div>
            <div className="my-auto w-full lg:w-1/2 lg:pl-24">
              <MotionImage
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.2}
                width={48}
                height={42}
                src="https://wp.alithemes.com/html/monst/assets/imgs/icons/quote.svg"
                alt=""
              />
              <motion.h2
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.3}
                className="my-4 font-heading text-4xl font-bold"
              >
                Maecenas nibh purus, pharetra ac felis sed, elementum molestie
                urna. Nunc at arcu non ipsum auctor lacinia quis quis mi.
              </motion.h2>
              <p className="mb-1 text-lg">
                <motion.strong
                  variants={fadeInMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.4}
                  className="text-blue-500"
                >
                  Alice Bradley
                </motion.strong>
              </p>
              <motion.p
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.5}
                className="text-xs text-gray-500"
              >
                CEO, Co Founders
              </motion.p>
            </div>
          </div>
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center pb-4 pt-4">
            {logos.map((i, index) => (
              <motion.div
                key={`logo-${index}`}
                variants={fadeInUpMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index * 0.2 + 0.1}
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
              >
                <Image
                  className="mx-auto"
                  src={i}
                  width={309}
                  height={59}
                  alt=""
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Comments */}
      <section
        className="bg-top bg-no-repeat pb-12 pt-20 xl:bg-contain"
        style={{
          backgroundImage: `url(${(intersectSvg as { src: string }).src})`,
        }}
      >
        <div className="container">
          <div className="mx-auto mb-12 max-w-lg text-center">
            <Image
              src="https://wp.alithemes.com/html/monst/assets/imgs/icons/quote.svg"
              width={48}
              height={42}
              alt=""
            />
            <h2 className="my-2 font-heading text-3xl font-bold md:text-4xl">
              Our Customers Very Happy With Our Services
            </h2>
            <p className="leading-loose text-blueGray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="flex flex-wrap">
            {comments.map((i, index) => (
              <Comment
                key={`comment-${index}`}
                {...i}
                delay={index * 0.2 + 0.1}
              />
            ))}
          </div>
          <div className="pt-12 text-center">
            <MotionLink
              variants={fadeInMotion}
              whileHover="hover"
              href="#"
              className="inline-block rounded bg-blue-400 px-8 py-4 text-xs font-semibold leading-none text-white hover:bg-blue-500"
            >
              Show more Testimonials
            </MotionLink>
          </div>
        </div>
      </section>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Testimonials;
