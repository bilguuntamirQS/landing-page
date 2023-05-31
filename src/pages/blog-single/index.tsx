import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Footer from "~/components/footer";
import Subscribe from "~/components/subscribe";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";

const BlogSingle: NextPage = () => {
  return (
    <>
      <section className="pb-20">
        <div
          className="pt-20 pb-8 mb-12 bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url(https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-14.jpg)",
          }}
        >
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6 text-center">
                <span className="text-base md:text-lg">
                  <a className="hover:underline text-blueGray-200" href="#">
                    <span className="inline-block py-1 px-3 mr-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-xl">
                      Bussiness
                    </span>
                  </a>
                  <span className="text-sm text-blueGray-200">
                    24 Jan, 2021
                  </span>
                </span>
                <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl font-heading">
                  Best Tailwind CSS template for your SASS landing site
                </h2>
              </div>
              <div className="flex justify-center mb-8">
                <Image
                  className="object-cover w-12 h-12 rounded-full"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-8.png"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="pl-4">
                  <p className="mb-1 text-blueGray-100">Alice Bradley</p>
                  <p className="text-xs font-semibold text-blueGray-200">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <motion.p
              className="mb-6 leading-loose text-blueGray-400"
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo est eget consequat imperdiet. Suspendisse laoreet
              scelerisque lobortis. Mauris facilisis hendrerit nulla at
              vehicula. Suspendisse potenti. Ut in nulla a purus bibendum
              convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate
              massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit.
              Nullam laoreet mollis dictum. Ut suscipit, magna at elementum
              iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit
              amet purus. Nulla sed erat molestie, auctor mauris lobortis,
              iaculis justo.
            </motion.p>
            <motion.div
              className="px-12 pt-5 pb-10 mx-auto w-full"
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
            >
              <div className="mb-6 w-full border-l-4 border-gray-100">
                <p className="px-5 text-lg text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  obcaecati laudantium recusandae, debitis eum voluptatem ad,
                  illo voluptatibus temporibus odio provident.
                </p>
              </div>
              <div className="pl-6 w-full">
                <p className="font-bold text-black text-md">
                  Scott Windon
                </p>
                <p className="text-xs text-gray-500">@scott.windon</p>
              </div>
            </motion.div>
            <motion.p
              className="mb-6 leading-loose text-blueGray-400"
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
            >
              Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt
              lorem cursus suscipit. Integer scelerisque sem et sem porta, eu
              volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam
              mattis, sapien a commodo ultrices, nunc orci tincidunt ante,
              tempus tempus turpis metus laoreet lacus. Praesent condimentum,
              arcu ut fringilla tincidunt, augue diam pretium augue, sit amet
              vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque
              non ultrices ut, convallis eu felis. Duis luctus tempor arcu,
              vitae elementum massa porta non. Morbi aliquet, neque ut volutpat
              sodales, dui enim facilisis enim, ut dictum lacus neque in urna.
              Nam metus elit, ullamcorper pretium nisi at, aliquet gravida
              lectus. Nullam id lectus pellentesque, suscipit dolor eget,
              consequat velit. Pellentesque finibus commodo nisl, id interdum
              leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
            </motion.p>
            <motion.p
              className="leading-loose text-blueGray-400"
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
            >
              Duis dolor nulla, pellentesque non ultrices ut, convallis eu
              felis. Duis luctus tempor arcu, vitae elementum massa porta non.
              Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim,
              ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium
              nisi at, aliquet gravida lectus. Nullam id lectus pellentesque,
              suscipit dolor eget, consequat velit. Pellentesque finibus commodo
              nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis
              nunc maximus ut.
            </motion.p>
            <MotionLink
              href="#"
              target="_blank"
              className="inline-flex items-center mt-8 text-gray-600 dark:text-gray-200 hover:underline"
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
            >
              <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                <title>Logo Twitter</title>
                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
              </svg>
              <span className="mx-2">Share on twitter</span>
            </MotionLink>
            {/* Author section */}
            <div className="flex flex-wrap mt-12 mb-12">
              <div className="w-full">
                <motion.div
                  className="py-10 px-6 bg-white rounded border border-gray-100 shadow hover:border-gray-200"
                  variants={fadeInUpMotion}
                  initial="hidden"
                  whileInView="show"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={0.1}
                >
                  <div className="flex items-center mb-4">
                    <Image
                      className="object-cover w-16 h-16 rounded-full"
                      src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-1.png"
                      width={500}
                      height={500}
                      alt=""
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-1 text-md">
                        Geraldine Tusoy
                      </strong>
                      <p className="mt-3 text-xs">CEO, Co Founders</p>
                    </div>
                  </div>
                  <p className="mb-5 text-sm leading-loose">
                    Donec consequat tortor risus, at auctor felis consequat a.
                    Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                    pulvinar. Vestibulum non quam velit.
                  </p>
                </motion.div>
              </div>
            </div>
            {/* Comment section */}
            <div className="mx-auto max-w-screen-sm antialiased">
              <h3 className="mb-6 text-3xl font-semibold text-gray-900">
                Comments
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      className="mt-2 w-8 h-8 rounded-full sm:w-10 sm:h-10"
                      src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-2.png"
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 py-2 px-4 leading-relaxed rounded-lg border border-gray-100 sm:py-4 sm:px-6">
                    <strong>Kolawole</strong>
                    <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="flex mr-2 -space-x-2">
                        <Image
                          className="w-6 h-6 rounded-full border border-white"
                          src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-3.png"
                          width={500}
                          height={500}
                          alt=""
                        />
                        <Image
                          className="w-6 h-6 rounded-full border border-white"
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
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      className="mt-2 w-8 h-8 rounded-full sm:w-10 sm:h-10"
                      src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-5.png"
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 py-2 px-4 leading-relaxed rounded-lg border border-gray-100 sm:py-4 sm:px-6">
                    <strong>Fulton</strong>
                    <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <h4 className="my-5 text-xs font-bold tracking-wide text-gray-400 uppercase">
                      Replies
                    </h4>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                          <Image
                            className="mt-3 w-6 h-6 rounded-full sm:w-8 sm:h-8"
                            src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-6.png"
                            width={500}
                            height={500}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 py-2 px-4 leading-relaxed bg-gray-50 rounded-lg sm:py-4 sm:px-6">
                          <strong>Clara </strong>
                          <span className="text-xs text-gray-400">3:34 PM</span>
                          <p className="text-xs sm:text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                          <Image
                            className="mt-3 w-6 h-6 rounded-full sm:w-8 sm:h-8"
                            src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-7.png"
                            width={500}
                            height={500}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 py-2 px-4 leading-relaxed bg-gray-50 rounded-lg sm:py-4 sm:px-6">
                          <strong>Dany </strong>
                          <span className="text-xs text-gray-400">3:34 PM</span>
                          <p className="text-xs sm:text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* comment form */}
            <div className="mt-12 mb-4">
              <form className="w-full max-w-xl bg-white rounded-lg">
                <div className="flex flex-wrap mb-6">
                  <h2 className="pt-3 pb-2 text-lg font-bold text-gray-800">
                    Add a new comment
                  </h2>
                  <div className="mt-2 mb-2 w-full md:w-full">
                    <textarea
                      className="py-4 px-3 w-full h-32 text-sm leading-normal bg-gray-100 rounded border border-gray-100 resize-none focus:bg-white focus:outline-none"
                      name="body"
                      placeholder="Type Your Comment"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start px-1 w-full md:w-full">
                    <div className="flex items-start px-2 mr-auto w-1/2 text-gray-700">
                      <svg
                        fill="none"
                        className="mr-1 w-5 h-5 text-gray-600"
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
                      <p className="pt-px text-xs md:text-xs">
                        Some HTML is okay.
                      </p>
                    </div>
                  </div>
                  <button className="block p-4 mt-6 text-xs font-semibold leading-none text-center text-white bg-blue-500 rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:-translate-y-1">
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center mt-12 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <a
                href="blog.html"
                className="py-2 px-4 mt-2 text-gray-600 rounded-lg border border-gray-100 transition-colors duration-200 transform dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700"
              >
                Read More Articles
              </a>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default BlogSingle;
