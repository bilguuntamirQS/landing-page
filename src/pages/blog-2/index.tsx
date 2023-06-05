import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import Subscribe from "~/components/subscribe";
import { fadeInMotion } from "~/utils/animation";

interface BlogItemProps {
  img: string;
  title: string;
  label: string;
  left?: boolean;
}

const BlogItem: FC<BlogItemProps> = ({ img, title, label, left }) => {
  return (
    <motion.div
      variants={fadeInMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="-mx-4 flex flex-wrap"
    >
      <div
        className={`order-1 w-full px-4 lg:w-1/2 lg:pt-4 ${left ? "lg:order-0 lg:pr-20" : "lg:order-1 lg:pl-20"
          }`}
      >
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase text-blue-600">
          {label}
        </span>
        <h3 className="my-4 font-heading text-xl font-bold md:text-2xl">
          <Link href="/blog-single">{title}</Link>
        </h3>
        <p className="mb-4 text-sm leading-loose text-blueGray-400 md:text-base">
          Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a
          semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed
          mauris. Vestibulum vehicula leo eget libero eleifend, quis dictum eros
          bibendum. Maecenas convallis tempor varius.
        </p>
        <Link className="text-xs font-semibold text-blue-600" href="#">
          <span>Read More</span>
          <svg
            className="ml-1 inline-block h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </div>
      <div
        className={`order-0 mb-8 w-full px-4 lg:w-1/2 ${left ? "lg:order-1" : "lg:order-0"
          }`}
      >
        <Image
          src={img}
          alt=""
          width={1080}
          height={607}
          className="h-80 w-full rounded object-cover"
        />
      </div>
    </motion.div>
  );
};

const Blog2: NextPage = () => {
  const blogItems: BlogItemProps[] = [
    {
      label: "Development",
      title: "How to Make Website WCAG Compliant?",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-6.png",
    },
    {
      label: "startup",
      title: "You have a Great Is Business Idea?",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-7.png",
    },
    {
      label: "startup",
      title: "The Future of Enterprise API Development",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-8.png",
    },
    {
      label: "startup",
      title: "How To Make Your iOS 13 Compatible?",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-9.jpg",
    },
  ];
  return (
    <>
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-4xl lg:mb-20">
            Our Blog
          </h2>
          {blogItems.map((i, index) => (
            <BlogItem
              key={`blog-item-${index}`}
              {...i}
              left={index % 2 === 0}
            />
          ))}
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Blog2;
