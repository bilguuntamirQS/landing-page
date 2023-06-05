import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import Subscribe from "~/components/subscribe";
import { MotionLink, fadeInMotion, fadeInUpMotion } from "~/utils/animation";

interface BlogItemProps {
  delay: number;
  img: string;
  big?: boolean;
  label: string;
  title: string;
  desc?: string;
}

const BlogItem: FC<BlogItemProps> = ({
  delay,
  img,
  big,
  label,
  title,
  desc,
}) => {
  return (
    <motion.div
      className={`w-full ${big ? "lg:w-2/3" : "lg:w-1/3"} mb-12 px-3`}
      variants={fadeInUpMotion}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true }}
      custom={delay}
    >
      <Link href="#">
        <Image
          src={img}
          alt=""
          width={1080}
          height={607}
          className="h-80 w-full rounded object-cover"
        />
        <p className="mt-6 text-sm text-blue-400">
          <span className="mr-3 inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
            {label}
          </span>
          <span className="text-xs text-blueGray-400">24 Jan, 2021</span>
        </p>
        <h3 className="my-2 font-heading text-2xl font-bold">{title}</h3>
        <p className="leading-loose text-blueGray-400">{desc}</p>
      </Link>
    </motion.div>
  );
};

BlogItem.defaultProps = {
  big: false,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.",
};

const Blog: NextPage = () => {
  const blogItems: Omit<BlogItemProps, "delay">[] = [
    {
      title: "Plan Your Project in 2022",
      label: "Bussiness",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-6.png",
    },
    {
      title: "The Next Big Challenge for Content Marketer",
      label: "Analytics",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-7.png",
      big: true,
      desc: "Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo a semper venenatis, felis urna pulvinar nibh, vitae porta erat risus sed mauris. Vestibulum vehicula leo eget libero eleifend.",
    },
    {
      title: "How to Make Website WCAG Compliant?",
      label: "Company",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-8.png",
    },
    {
      title: "The Future of Enterprise API Development",
      label: "Target",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-9.jpg",
    },
    {
      title: "How To Make Your iOS 13 Compatible?",
      label: "Layers",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-10.jpg",
    },
    {
      title: "You have a Great Is Business Idea?",
      label: "Consultancy",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-11.jpg",
    },
    {
      title: "Plan Your Project with Your Software",
      label: "Analytics",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-12.jpg",
    },
    {
      title: "You have a Great Is Business Idea?",
      label: "Digital",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-13.jpg",
    },
  ];

  return (
    <>
      <section className="py-20">
        <div className="container">
          <h2 className="mb-8 font-heading text-3xl font-bold lg:text-4xl">
            Our Blog
          </h2>
          <div className="-mx-3 flex flex-wrap">
            {blogItems.map((i, index) => (
              <BlogItem
                key={`blog-item-${index}`}
                {...i}
                delay={(index % 2) * 0.2 + 0.1}
              />
            ))}
          </div>
          <div className="text-center">
            <MotionLink
              variants={fadeInMotion}
              whileHover="hover"
              className="inline-block rounded bg-blue-400 px-8 py-4 text-xs font-semibold leading-none text-white hover:bg-blue-500"
              href="#"
            >
              Show all posts
            </MotionLink>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Blog;
