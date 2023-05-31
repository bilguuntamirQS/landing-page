import type { FC } from "react";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";
import Image from "next/image";
import Link from "next/link";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import instagramSvg from "~/assets/instagram-blue.svg";

export interface CommentProps {
  img: string;
  icons: {
    facebook?: boolean;
    twitter?: boolean;
    instagram?: boolean;
  };
  name: string;
  role: string;
  desc: string;
  delay: number;
}

const Comment: FC<CommentProps> = ({ img, icons, name, role, desc, delay }) => {
  return (
    <div className="w-full py-5 md:w-1/2 md:px-5">
      <motion.div
        variants={fadeInUpMotion}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        custom={delay}
        viewport={{ once: true }}
        className="hover:border-gray-20 rounded border border-gray-100 bg-white px-6 py-10 shadow"
      >
        <div className="mb-4 flex items-center">
          <Image
            className="h-16 w-16 rounded-full object-cover"
            src={img}
            alt=""
            width={500}
            height={500}
          />
          <div className="pl-4">
            <strong className="text-md mb-2 mt-6">{name}</strong>
            <p className="mt-3 text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <p className="mb-5 leading-loose text-blueGray-400">{desc}</p>
        <div className="flex space-x-2">
          {icons.facebook && (
            <Link href="#">
              <Image src={facebookSvg as string} alt="" />
            </Link>
          )}
          {icons.instagram && (
            <Link href="#">
              <Image src={instagramSvg as string} alt="" />
            </Link>
          )}
          {icons.twitter && (
            <Link href="#">
              <Image src={twitterSvg as string} alt="" />
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

Comment.defaultProps = {
  icons: {
    facebook: false,
    twitter: false,
    instagram: true,
  },
};

export default Comment;
