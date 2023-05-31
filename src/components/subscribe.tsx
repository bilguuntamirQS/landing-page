import type { FC } from "react";

const Subscribe: FC = () => {
  return (
    <section className="bg-blue-500 py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white">
            Subscribe now to{" "}
            <span className="text-blue-200">Our Newsletter</span>
            <br />
            and get the Coupon code.
          </h2>
          <p className="mb-8 text-blueGray-200">
            All your information is completely confidential
          </p>
          <div className="mx-auto flex max-w-lg flex-wrap">
            <div className="mb-3 flex w-full rounded border border-blue-300 bg-blue-500 px-3 md:mb-0 md:mr-6 md:w-2/3">
              <svg
                className="my-auto h-6 w-6 text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <input
                type="text"
                className="w-full bg-blue-500 py-4 pl-3 text-xs font-semibold leading-none text-white placeholder-white outline-none"
                placeholder="Type your e-mail"
              />
            </div>
            <button
              className="w-full rounded border border-blue-300 bg-white px-8 py-4 text-xs font-semibold leading-none text-blue-800 transition duration-300 ease-in-out hover:border-white hover:bg-blue-500 hover:text-white md:w-auto"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
