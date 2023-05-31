import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";

const BlogComment: FC = () => {
  return (
    <>
      <MotionLink
        href="#"
        target="_blank"
        className="mt-8 inline-flex items-center text-gray-600 hover:underline dark:text-gray-200"
        variants={fadeInMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.1}
      >
        <svg viewBox="0 0 512 512" className="h-6 w-6 fill-current">
          <title>Logo Twitter</title>
          <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
        </svg>
        <span className="mx-2">Share on twitter</span>
      </MotionLink>
      <div className="mb-12 mt-12 flex flex-wrap">
        <div className="w-full">
          <motion.div
            className="rounded border border-gray-100 bg-white px-6 py-10 shadow hover:border-gray-200"
            variants={fadeInUpMotion}
            initial="hidden"
            whileInView="show"
            whileHover="hover"
            viewport={{ once: true }}
            custom={0.1}
          >
            <div className="mb-4 flex items-center">
              <Image
                className="h-16 w-16 rounded-full object-cover"
                src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-1.png"
                width={500}
                height={500}
                alt=""
              />
              <div className="pl-4">
                <strong className="text-md mb-1 mt-6">Geraldine Tusoy</strong>
                <p className="mt-3 text-xs">CEO, Co Founders</p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-loose">
              Donec consequat tortor risus, at auctor felis consequat a. Donec
              quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
              Vestibulum non quam velit.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Comment section */}
      <div className="mx-auto max-w-screen-sm antialiased">
        <h3 className="mb-6 text-3xl font-semibold text-gray-900">Comments</h3>
        <div className="space-y-4">
          <div className="flex">
            <div className="mr-3 flex-shrink-0">
              <Image
                className="mt-2 h-8 w-8 rounded-full sm:h-10 sm:w-10"
                src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-2.png"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className="flex-1 rounded-lg border border-gray-100 px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
              <strong>Kolawole</strong>
              <span className="text-xs text-gray-400">3:34 PM</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-2 flex -space-x-2">
                  <Image
                    className="h-6 w-6 rounded-full border border-white"
                    src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-3.png"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <Image
                    className="h-6 w-6 rounded-full border border-white"
                    src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-4.png"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  5 Replies
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-3 flex-shrink-0">
              <Image
                className="mt-2 h-8 w-8 rounded-full sm:h-10 sm:w-10"
                src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-5.png"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className="flex-1 rounded-lg border border-gray-100 px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
              <strong>Fulton</strong>
              <span className="text-xs text-gray-400">3:34 PM</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <h4 className="my-5 text-xs font-bold uppercase tracking-wide text-gray-400">
                Replies
              </h4>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-3 flex-shrink-0">
                    <Image
                      className="mt-3 h-6 w-6 rounded-full sm:h-8 sm:w-8"
                      src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-6.png"
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 rounded-lg bg-gray-50 px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
                    <strong>Clara </strong>
                    <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 flex-shrink-0">
                    <Image
                      className="mt-3 h-6 w-6 rounded-full sm:h-8 sm:w-8"
                      src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-7.png"
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 rounded-lg bg-gray-50 px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
                    <strong>Dany </strong>
                    <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* comment form */}
      <div className="mb-4 mt-12">
        <form className="w-full max-w-xl rounded-lg bg-white">
          <div className="mb-6 flex flex-wrap">
            <h2 className="pb-2 pt-3 text-lg font-bold text-gray-800">
              Add a new comment
            </h2>
            <div className="mb-2 mt-2 w-full md:w-full">
              <textarea
                className="h-32 w-full resize-none rounded border border-gray-100 bg-gray-100 px-3 py-4 text-sm leading-normal focus:bg-white focus:outline-none"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="flex w-full items-start px-1 md:w-full">
              <div className="mr-auto flex w-1/2 items-start px-2 text-gray-700">
                <svg
                  fill="none"
                  className="mr-1 h-5 w-5 text-gray-600"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="pt-px text-xs md:text-xs">Some HTML is okay.</p>
              </div>
            </div>
            <button className="mt-6 block transform rounded bg-blue-500 p-4 text-center text-xs font-semibold leading-none text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-700">
              Post Comment
            </button>
          </div>
        </form>
      </div>
      <div className="mt-12 flex transform items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1">
        <a
          href="blog.html"
          className="mt-2 transform rounded-lg border border-gray-100 px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Read More Articles
        </a>
      </div>
    </>
  );
};

export default BlogComment;
