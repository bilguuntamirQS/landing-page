import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/footer";
import Subscribe from "~/components/subscribe";
import { motion } from "framer-motion";
import { fadeInMotion } from "~/utils/animation";
import BlogComment from "~/components/blog-comment";

const BlogSingle2: NextPage = () => {
  return (
    <>
      <section className="pb-20">
        <div className="mb-12 bg-cover bg-no-repeat pb-8 pt-20">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6 text-center">
                <span className="text-base md:text-lg">
                  <Link className="text-blueGray-200 hover:underline" href="#">
                    <span className="mr-3 inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                      Bussiness
                    </span>
                  </Link>
                  <span className="text-sm text-blueGray-500">
                    24 Jan, 2021
                  </span>
                </span>
                <h2 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
                  Best Tailwind CSS template for your SASS landing site
                </h2>
              </div>
              <div className="mb-8 flex justify-center">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-8.png"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="pl-4">
                  <p className="mb-1 text-blueGray-500">Alice Bradley</p>
                  <p className="text-xs font-semibold text-blueGray-500">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <p className="mb-6 leading-loose text-blueGray-400">
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
            </p>
            <div className="mx-auto w-full px-12 pb-10 pt-5">
              <div className="mb-6 w-full border-l-4 border-gray-100">
                <p className="px-5 text-lg text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  obcaecati laudantium recusandae, debitis eum voluptatem ad,
                  illo voluptatibus temporibus odio provident.
                </p>
              </div>
              <div className="w-full pl-6">
                <p className="text-md font-bold text-black">Scott Windon</p>
                <p className="text-xs text-gray-500">@scott.windon</p>
              </div>
            </div>
            <motion.p
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="mb-6 leading-loose text-blueGray-400"
            >
              Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt
              lorem cursus suscipit. Integer scelerisque sem et sem porta, eu
              volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam
              mattis, sapien a commodo ultrices, nunc orci tincidunt ante,
              tempus tempus turpis metus laoreet lacus. Praesent condimentum,
              arcu ut fringilla tincidunt, augue diam pretium augue, sit amet
              vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque
              non ultrices ut, convallis eu felis.
            </motion.p>
          </div>
          <div
            className="mb-12 rounded-xl bg-cover bg-center bg-no-repeat pb-40 pt-40"
            style={{
              backgroundImage:
                "url(https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-8.png)",
            }}
          >
            <div className="mx-auto max-w-2xl">
              <div className="mb-6 text-center"></div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl">
            <motion.p
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
            <motion.p
              variants={fadeInMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
            >
              Duis luctus tempor arcu, vitae elementum massa porta non. Morbi
              aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut
              dictum lacus neque in urna. Nam metus elit, ullamcorper pretium
              nisi at, aliquet gravida lectus. Nullam id lectus pellentesque,
              suscipit dolor eget, consequat velit. Pellentesque finibus commodo
              nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis
              nunc maximus ut.
            </motion.p>
            <BlogComment />
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default BlogSingle2;
