import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import instagramSvg from "~/assets/instagram-blue.svg";

const Footer: FC = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 ml-auto hidden w-1/2 bg-blueGray-50 lg:block"></div>
      <div className="container">
        <div className="relative -mx-4 flex flex-wrap">
          <div className="mx-auto w-full max-w-lg px-4 pt-20 text-center lg:mx-0 lg:w-1/2 lg:max-w-full lg:text-left">
            <Link
              href="/"
              className="mx-auto inline-block text-3xl font-semibold leading-none lg:ml-0"
            >
              <Image
                className="h-10"
                src="https://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg"
                height={40}
                width={125.8}
                alt="logo"
              />
            </Link>
            <div className="mb-16 mt-12">
              <p className="mb-4 text-center text-xs text-blueGray-400 lg:text-left">
                Subscribe and stay fully connected with product.
              </p>
              <div className="flex flex-wrap items-center lg:flex-nowrap">
                <div className="mb-3 flex w-full rounded bg-blueGray-50 px-4 lg:mb-0 lg:w-2/3">
                  <svg
                    className="my-auto h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input
                    className="w-full bg-blueGray-50 py-4 pl-3 text-xs text-blueGray-400 outline-none"
                    type="text"
                    placeholder="Type your e-mail"
                  />
                </div>
                <button
                  className="hover-up-2 w-full rounded bg-blue-400 px-8 py-4 text-xs font-semibold leading-none text-white hover:bg-blue-500 lg:ml-6 lg:w-auto"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-xs text-blueGray-400">
                © 2021. All rights reserved.
              </p>
              <div className="-mx-2 mt-4">
                <Link className="inline-block px-2" href="#">
                  <Image src={facebookSvg as string} alt="facebook-logo" />
                </Link>
                <Link className="inline-block px-2" href="#">
                  <Image src={twitterSvg as string} alt="twitter-logo" />
                </Link>
                <Link className="inline-block px-2" href="#">
                  <Image src={instagramSvg as string} alt="instagram-logo" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full px-4 pt-40 lg:w-1/2 lg:pl-12">
            <div className="mb-12 flex flex-row flex-wrap justify-around">
              <div className="mb-12 w-1/2 lg:w-auto">
                <h5 className="mb-6 font-heading text-lg font-bold">About</h5>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-12 w-1/2 lg:w-auto">
                <h5 className="mb-6 font-heading text-lg font-bold">
                  Quick Links
                </h5>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Tesimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Faqs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-12 w-1/2 lg:w-auto">
                <h5 className="mb-6 font-heading text-lg font-bold">Blog</h5>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg text-blueGray-400 hover:text-blueGray-500"
                    >
                      Single
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center lg:hidden">
              <p className="text-xs text-blueGray-400">
                © 2021. All rights reserved.
              </p>
              <div className="-mx-2 mt-4">
                <Link className="inline-block px-2" href="#">
                  <Image src={facebookSvg as string} alt="facebook-logo" />
                </Link>
                <Link className="inline-block px-2" href="#">
                  <Image src={twitterSvg as string} alt="twitter-logo" />
                </Link>
                <Link className="inline-block px-2" href="#">
                  <Image src={instagramSvg as string} alt="instagram-logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
