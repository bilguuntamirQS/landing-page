import {
  type Variants,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type FC, useEffect } from "react";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import instagramSvg from "~/assets/instagram-blue.svg";
import { useRouter } from "next/router";

type LinkType = {
  label: string;
  href?: string;
};

type LinkTypeWithSub = LinkType & { sub?: LinkType[] };

const Header: FC = () => {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [isExpand, setIsExpand] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleRouteChange = () => {
      setSelected(undefined);
      setIsExpand(false);
      setIsMobileOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100 && isMobileOpen === false);
  });

  function toggleExpand(select: string) {
    if (selected === select) {
      setSelected(undefined);
      setIsExpand(false);
    } else {
      setSelected(select);
      setIsExpand(true);
    }
  }

  function checkIsExpand(label: string) {
    return isExpand && selected === label;
  }

  const menu: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        delay: 0.15,
      },
      transitionEnd: {
        display: "none",
      },
    },
    open: {
      display: "block",
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const links: LinkTypeWithSub[] = [
    {
      label: "Home",
      href: "/",
      sub: [
        ...Array.from({ length: 5 }, (_, index) => index + 1).map((i) => ({
          label: `Landing Page ${i}`,
        })),
      ],
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Company",
      href: "/portfolio",
      sub: [
        {
          label: "Portfolio",
          href: "/portfolio",
        },
        {
          label: "Team",
          href: "/team",
        },
        {
          label: "Testamonials",
          href: "/testimonials",
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
        {
          label: "Faqs",
          href: "/faqs",
        },
        {
          label: "404",
          href: "/404",
        },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      sub: [
        {
          label: "Category 1",
          href: "/blog",
        },
        {
          label: "Category 2",
          href: "/blog-2",
        },
        {
          label: "Single 1",
          href: "/blog-single",
        },
        {
          label: "Single 2",
          href: "/blog-single-2",
        },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`sticky-bar mt-4 bg-transparent ${scrolled ? "sticky" : ""}`}
      >
        <div className="container bg-transparent">
          <nav className="flex items-center justify-between bg-transparent py-3">
            <Link className="text-3xl font-semibold leading-none" href="/">
              <Image
                className="h-10"
                alt="logo"
                width={126}
                height={40}
                src="https://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg"
              />
            </Link>
            <ul className="hidden lg:flex lg:w-auto lg:items-center lg:space-x-12">
              {links.map((i, index) => (
                <li
                  key={`parent-${index}`}
                  className={`py-4 ${i.sub ? "has-child group relative" : ""}`}
                >
                  <Link
                    href={i.href || "#"}
                    className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-400"
                  >
                    {i.label}
                  </Link>
                  {i.sub && i.sub.length > 0 && (
                    <ul className="drop-down-menu min-w-[200px]">
                      {i.sub.map((j, index2) => (
                        <li key={`child-${index2}`}>
                          <Link
                            href={j?.href || "#"}
                            className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-400"
                          >
                            {j?.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <Link href="/login" className="btn-accent hover-up-2">
                Login In
              </Link>
              <Link href="/signup" className="btn-primary hover-up-2">
                Sing Up
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="navbar-burger flex items-center rounded border border-blue-200 px-3 py-2 text-blue-500 hover:border-blue-300 hover:text-blue-700"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`navbar-menu relative z-50 transition duration-300 ${
          isMobileOpen ? "" : "hidden"
        }`}
      >
        <div className="navbar-backdrop bg-blueGray-800 fixed inset-0 opacity-25"></div>
        <nav className="fixed bottom-0 left-0 top-0 flex w-full max-w-sm flex-col overflow-y-auto border-r bg-white p-6 transition duration-300">
          <div className="mb-8 flex items-center">
            <Link
              href="/"
              className="mr-auto text-3xl font-semibold leading-none"
            >
              <Image
                className="h-10"
                alt="logo"
                width={126}
                height={40}
                src="https://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg"
              />
            </Link>
            <button
              className="navbar-close h-6 w-6 cursor-pointer text-blueGray-600 hover:text-blue-500"
              onClick={() => setIsMobileOpen(false)}
            >
              &#10005;
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              {links.map((i, index) => (
                <li
                  key={`mobile-parent-${index}`}
                  className={`mb-1 rounded-xl ${
                    i.sub ? "menu-item-has-children" : ""
                  }`}
                >
                  {i.sub ? (
                    <button
                      onClick={() => {
                        toggleExpand(i.label);
                      }}
                      className="flex w-full items-center justify-between text-center"
                    >
                      <Link
                        href={i.href || "#"}
                        className="rounded-xl p-4 text-sm text-blueGray-400 hover:bg-blue-50 hover:text-blue-500"
                      >
                        {i.label}
                      </Link>
                      <span
                        style={{
                          transform: checkIsExpand(i.label)
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={i.href || "#"}
                      className="block rounded-xl p-4 text-sm text-blueGray-400 hover:bg-blue-50 hover:text-blue-500"
                    >
                      {i.label}
                    </Link>
                  )}
                  {i.sub && (
                    <motion.ul
                      className="pl-5"
                      initial="closed"
                      exit="closed"
                      variants={menu}
                      animate={checkIsExpand(i.label) ? "open" : "closed"}
                    >
                      {i.sub.map((j, index2) => (
                        <li key={`mobile-child-${index2}`}>
                          <Link
                            href={j.href || "#"}
                            className="block rounded-xl p-3 text-sm text-blueGray-400 hover:bg-blue-50 hover:text-blue-500"
                          >
                            {j.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 border-t border-blueGray-100 pt-6">
            <Link
              href="/signup"
              className="mb-3 block rounded bg-blue-400 px-4 py-3 text-center text-xs font-semibold leading-none text-white hover:bg-blue-500"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="mb-2 block rounded border border-blue-200 px-4 py-3 text-center text-xs font-semibold leading-none text-blue-500 hover:border-blue-300 hover:text-blue-700"
            >
              Log In
            </Link>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-blueGray-400">
              <span>Get in Touch</span>
              <Link href="#" className="ml-1 text-blue-500 underline">
                contact@monst.com
              </Link>
            </p>
            <Link href="#" className="inline-block px-1">
              <Image alt="facebook-logo" src={facebookSvg as string} />
            </Link>
            <Link href="#" className="inline-block px-1">
              <Image alt="twitter-logo" src={twitterSvg as string} />
            </Link>
            <Link href="#" className="inline-block px-1">
              <Image alt="instagram-logo" src={instagramSvg as string} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
