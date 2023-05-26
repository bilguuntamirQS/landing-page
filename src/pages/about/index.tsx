import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 -mt-24">
        <div
          className="hidden absolute inset-0 z-0 ml-auto w-1/2 lg:block bg-blueGray-100"
          style={{ zIndex: -1 }}
        ></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="px-3 w-full lg:w-1/2">
              <div className="py-12">
                <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                  <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading">
                    Committed to <span className="text-blue-500">People</span>
                    ,
                    <br />
                    Commited to the Future
                  </h2>
                  <p className="leading-relaxed text-blueGray-400">
                    We are
                    <strong className="text-blue-500">Monst</strong>, a Creative
                    Design
                  </p>
                  <p className="leading-relaxed text-blueGray-400">
                    Helping you maximize operations managment with digitization
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <Link
                    href="#key-features"
                    scroll={false}
                    className="block py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-center text-white bg-blue-400 rounded sm:inline-block sm:mr-3 sm:mb-0 hover:bg-blue-500"
                  >
                    Key Features
                  </Link>
                  <Link
                    href="#how-we-work"
                    scroll={false}
                    className="block py-4 px-8 text-xs border sm:inline-block border-blueGray-200 text-blueGray-400 hover:border-blueGray-300 hover:text-blueGray-600"
                  >
                    How We Work?
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-3 pb-10 mb-12 w-full lg:mb-0 lg:w-1/2 lg:bg-blueGray-100">
              <div className="flex justify-center items-center">
                <Image
                  className="lg:max-w-lg"
                  src="https://wp.alithemes.com/html/monst/assets/imgs/illustrations/team.svg"
                  alt="team"
                  width={810}
                  height={463}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
