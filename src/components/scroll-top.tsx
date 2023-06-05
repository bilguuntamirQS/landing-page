import { type Variants, useScroll, useMotionValueEvent } from "framer-motion";
import { type FC, useState } from "react";
import { motion } from "framer-motion";

const ScrollTop: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsShow(latest > 100);
  });

  const scrollMotion: Variants = {
    hidden: {
      position: "fixed",
      bottom: 50,
      right: 30,
      cursor: "pointer",
      opacity: 0,
      transitionEnd: {
        visibility: "hidden",
      },
    },
    show: {
      opacity: 1,
      visibility: "visible",
      transition: {
        type: "spring",
        ease: "linear",
      },
    },
  };

  function scrollToTop() {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <motion.div
      variants={scrollMotion}
      initial="hidden"
      animate={isShow ? "show" : ""}
    >
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 leading-[50px] text-white"
        onClick={scrollToTop}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>
    </motion.div>
  );
};

export default ScrollTop;
