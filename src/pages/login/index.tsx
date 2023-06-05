import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionLink, fadeInMotion } from "~/utils/animation";

const Login: NextPage = () => {
  return (
    <>
      <section className="relative pb-20">
        <div className="absolute inset-0 ml-auto hidden w-1/2 lg:block">
          <motion.div
            variants={fadeInMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="flex h-full items-center"
          >
            <Image
              className="mx-auto lg:max-w-lg"
              src="	https://wp.alithemes.com/html/monst/assets/imgs/illustrations/space.svg"
              alt=""
              width={512}
              height={469}
            />
          </motion.div>
        </div>
        <div className="container">
          <div className="relative flex flex-wrap pt-12">
            <div className="w-full py-6 lg:flex lg:w-1/2 lg:flex-col lg:pr-20">
              <motion.div
                variants={fadeInMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.3}
              >
                <span className="text-sm text-blueGray-400">Sign In</span>
                <h4 className="mb-6 text-3xl">Join our community</h4>
                <div className="mb-4 flex rounded border border-gray-200 bg-blueGray-50 px-4">
                  <input
                    className="w-full bg-blueGray-50 py-4 text-xs font-semibold leading-none placeholder-blueGray-400 outline-none"
                    type="email"
                    placeholder="name@email.com"
                  />
                  <svg
                    className="my-auto ml-4 h-6 w-6 text-blueGray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </div>
                <div className="mb-6 flex rounded border border-gray-200 bg-blueGray-50 px-4">
                  <input
                    className="w-full bg-blueGray-50 py-4 text-xs font-semibold leading-none placeholder-blueGray-400 outline-none"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button className="ml-4">
                    <svg
                      className="my-auto h-6 w-6 text-blueGray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <motion.div
                  variants={fadeInMotion}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.1}
                  className="float-left mb-6"
                >
                  <label className="inline-flex text-xs">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      defaultChecked
                    />
                    <span className="ml-2">
                      I agree to{" "}
                      <Link
                        className="underline hover:text-blueGray-500"
                        href="#"
                      >
                        Police privacy
                      </Link>{" "}
                      and{" "}
                      <Link
                        className="underline hover:text-blueGray-500"
                        href="#"
                      >
                        Terms of Use
                      </Link>
                    </span>
                  </label>
                </motion.div>
                <button className="block w-full transform rounded bg-blue-500 p-4 text-center text-xs font-semibold leading-none text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-700">
                  Sign In
                </button>
                <p className="my-6 text-center text-xs font-semibold text-blueGray-400">
                  or continue with
                </p>
                <button className="mb-2 flex w-full transform items-center rounded border border-gray-200 px-4 py-3 text-xs font-semibold leading-none text-blueGray-400 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-blueGray-50">
                  <Image
                    className="mr-10 h-6"
                    src="https://wp.alithemes.com/html/monst/assets/imgs/logos/facebook-sign.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                  <span>Sign In with Facebook</span>
                </button>
                <button className="flex w-full transform items-center rounded border border-gray-200 px-4 py-3 text-xs font-semibold leading-none text-blueGray-400 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-blueGray-50">
                  <Image
                    className="mr-10 h-6"
                    src="https://wp.alithemes.com/html/monst/assets/imgs/logos/google-sign.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  <span>Sign In with Google</span>
                </button>
              </motion.div>
              <div className="mx-auto mt-12 w-full text-center">
                <p>
                  Don&apos;t Have an Account?{" "}
                  <MotionLink
                    variants={fadeInMotion}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={0.1}
                    href="/signup"
                    className="inline-block text-xs font-semibold leading-none text-blue-600 hover:text-blue-700"
                  >
                    Sign Up now
                  </MotionLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
