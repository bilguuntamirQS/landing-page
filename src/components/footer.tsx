import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import instagramSvg from "~/assets/instagram-blue.svg";
import { motion } from "framer-motion";

const Footer: FC = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="container"
      >
        <div className="-mx-3 mb-12 flex flex-wrap text-center lg:mb-20 lg:text-left">
          <div className="mb-6 w-full px-3 lg:mb-0 lg:w-1/5">
            <Link
              href="/"
              className="mx-auto inline-block text-3xl font-semibold leading-none lg:mx-0"
            >
              <Image
                className="h-10"
                src="https://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg"
                height={40}
                width={125.8}
                alt="logo"
              />
            </Link>
          </div>
          <div className="mb-8 w-full px-3 lg:mb-0 lg:w-2/5">
            <p className="mx-auto max-w-md leading-relaxed text-blueGray-400 lg:mx-0 lg:max-w-full lg:pr-32 lg:text-xl">
              Helping you <strong>maximize</strong> operations management with
              digitization
            </p>
          </div>
          <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/5">
            <p className="mb-2 font-heading font-bold lg:mb-4 lg:text-lg">
              Office
            </p>
            <p className="text-blueGray-400 lg:text-lg">
              359 Hidden Valley Road, NY
            </p>
          </div>
          <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/5">
            <p className="mb-2 font-heading font-bold lg:mb-4 lg:text-lg">
              Contacts
            </p>
            <p className="text-blueGray-400 lg:text-lg">(+01) 234 568</p>
            <p className="text-blueGray-400 lg:text-lg">contact@monst.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <p className="text-sm text-blueGray-400">
            © 2021. All rights reserved. Designed by{" "}
            <Link href="#" className="text-blue-400">
              Alithemes.com
            </Link>
          </p>
          <div className="order-first -mx-2 mb-4 lg:order-last lg:mb-0">
            <Link href="#" className="inline-block px-2">
              <Image src={facebookSvg as string} alt="facebook-logo" />
            </Link>
            <Link href="#" className="inline-block px-2">
              <Image src={twitterSvg as string} alt="facebook-logo" />
            </Link>
            <Link href="#" className="inline-block px-2">
              <Image src={instagramSvg as string} alt="facebook-logo" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
