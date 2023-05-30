import type { NextPage } from "next";
import type { FC } from "react";
import BreadCumb from "~/components/bread-cumb";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";
import Image from "next/image";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import instagramSvg from "~/assets/instagram-blue.svg";
import Link from "next/link";

interface ExpertProps {
  img: string;
  icons: {
    facebook?: boolean;
    twitter?: boolean;
    instagram?: boolean;
  };
  name: string;
  role: string;
  desc: string;
}

const Expert: FC<ExpertProps> = ({ img, icons, name, role, desc }) => {
  return (
    <div className="w-full py-5 md:w-1/2 md:px-5">
      <motion.div
        variants={fadeInUpMotion}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        custom={0.1}
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

Expert.defaultProps = {
  icons: {
    facebook: false,
    twitter: false,
    instagram: true,
  },
};

const Team: NextPage = () => {
  const experts: ExpertProps[] = [
    {
      name: "Geraldine Tusoy",
      role: "CEO, Co Founders",
      desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-1.png",
      icons: {
        facebook: true,
        instagram: true,
      },
    },
    {
      name: "Clara Kolawole",
      role: "CEO-Founder",
      desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-2.png",
      icons: {
        facebook: true,
        instagram: true,
      },
    },
    {
      name: "Chris Fulton",
      role: "Project-Manager",
      desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-3.png",
      icons: {
        facebook: true,
        twitter: true,
      },
    },
    {
      name: "Dany Connolly",
      role: "Direct-Founder",
      desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-4.png",
      icons: {
        facebook: true,
        instagram: true,
        twitter: true,
      },
    },
  ];
  return (
    <>
      <BreadCumb title="Out Team" />
      {/* Experts */}
      <section className="bg-blueGray-50 py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-lg text-center">
            <motion.span
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600"
            >
              Our Team Leader
            </motion.span>
            <motion.h2
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="mb-4 mt-2 font-heading text-3xl font-bold md:text-4xl"
            >
              Meet Your <span className="text-blue-500">Experts</span> <br />
              Team Member
            </motion.h2>
            <motion.p
              variants={fadeInUpMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="leading-loose text-blueGray-400"
            >
              Our Customers Very Happy With Our Services.
            </motion.p>
          </div>
          <div className="flex flex-wrap">
            {experts.map((i, index) => (
              <Expert key={`team-expert-${index}`} {...i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
