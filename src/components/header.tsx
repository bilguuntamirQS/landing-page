import { type Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type FC } from "react";
import FacebookLogo from "~/assets/facebook-blue.svg";
import TwitterLogo from "~/assets/twitter-blue.svg";
import InstagramLogo from "~/assets/instagram-blue.svg";

type LinkType = {
  label: string;
  href?: string;
};

type LinkTypeWithSub = LinkType & { sub?: LinkType[] };

const Header: FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [isExpand, setIsExpand] = useState(false);

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
    },
    open: {
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
    },
    {
      label: "Services",
    },
    {
      label: "Company",
      sub: [
        {
          label: "Portfolio",
        },
        {
          label: "Team",
        },
        {
          label: "Testamonials",
        },
        {
          label: "Pricing",
        },
        {
          label: "Faqs",
        },
        {
          label: "404",
        },
      ],
    },
    {
      label: "Blog",
      sub: [
        {
          label: "Category 1",
        },
        {
          label: "Category 2",
        },
        {
          label: "Single 1",
        },
        {
          label: "Single 2",
        },
      ],
    },
    {
      label: "Contact",
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="mt-4 bg-transparent sticky-bar">
        <div className="container mx-auto bg-transparent">
          <nav className="flex justify-between items-center py-3 bg-transparent">
            <Link className="text-3xl font-semibold leading-none" href="/">
              <Image
                className="h-10"
                alt="logo"
                width={126}
                height={40}
                src="https://wp.alithemes.com/html/monst/assets/imgs/logos/monst-logo.svg"
              />
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:space-x-12 lg:w-auto">
              {links.map((i, index) => (
                <li
                  key={`parent-${index}`}
                  className={`py-4 ${i.sub ? "has-child group relative" : ""}`}
                >
                  <Link
                    href={i.href || "#"}
                    className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500"
                  >
                    {i.label}
                  </Link>
                  {i.sub && i.sub.length > 0 && (
                    <ul className="drop-down-menu min-w-[200px]">
                      {i.sub.map((j, index2) => (
                        <li key={`child-${index2}`}>
                          <Link
                            href={j?.href || "#"}
                            className="text-sm menu-sub-item text-blueGray-600 hover:text-blueGray-500"
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
              <Link href="#" className="btn-accent hover-up-2">
                Login In
              </Link>
              <Link href="#" className="btn-primary hover-up-2">
                Sing Up
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="flex items-center py-2 px-3 text-blue-500 rounded border border-blue-200 hover:text-blue-700 hover:border-blue-300 navbar-burger"
              >
                <svg
                  className="w-4 h-4 fill-current"
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
        className={`navbar-menu relative z-50 transition duration-300 ${isMobileOpen ? "" : "hidden"
          }`}
      >
        <div className="fixed inset-0 opacity-25 navbar-backdrop bg-blueGray-800"></div>
        <nav className="flex overflow-y-auto fixed top-0 bottom-0 left-0 flex-col p-6 w-5/6 max-w-sm bg-white border-r transition duration-300">
          <div className="flex items-center mb-8">
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
              className="w-6 h-6 cursor-pointer hover:text-blue-500 navbar-close text-blueGray-600"
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
                  className={`mb-1 rounded-xl ${i.sub ? "menu-item-has-children" : ""
                    }`}
                >
                  {i.sub && (
                    <button
                      onClick={() => {
                        toggleExpand(i.label);
                      }}
                      className="text-center menu-expand"
                      style={{
                        transform: checkIsExpand(i.label)
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                      }}
                    >
                      +
                    </button>
                  )}
                  <Link
                    href={i.href || "#"}
                    className="block p-4 text-sm rounded-xl hover:text-blue-500 hover:bg-blue-50 text-blueGray-500"
                  >
                    {i.label}
                  </Link>
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
                            className="block p-3 text-sm rounded-xl hover:text-blue-500 hover:bg-blue-50 text-blueGray-500"
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
          <div className="pt-6 mt-4 border-t border-blueGray-100">
            <Link
              href="#"
              className="block py-3 px-4 mb-3 text-xs font-semibold leading-none text-center text-white bg-blue-400 rounded hover:bg-blue-500"
            >
              Sign Up
            </Link>
            <Link
              href="#"
              className="block py-3 px-4 mb-2 text-xs font-semibold leading-none text-center text-blue-500 rounded border border-blue-200 hover:text-blue-700 hover:border-blue-300"
            >
              Log In
            </Link>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-blueGray-500">
              <span>Get in Touch</span>
              <Link href="#" className="ml-1 text-blue-500 underline">
                contact@monst.com
              </Link>
            </p>
            <Link href="#" className="inline-block px-1">
              <Image alt="facebook-logo" src={FacebookLogo as string} />
            </Link>
            <Link href="#" className="inline-block px-1">
              <Image alt="twitter-logo" src={TwitterLogo as string} />
            </Link>
            <Link href="#" className="inline-block px-1">
              <Image alt="instagram-logo" src={InstagramLogo as string} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
