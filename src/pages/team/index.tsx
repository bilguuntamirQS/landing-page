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
import Title from "~/components/title";

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

interface TeamMemberProps {
  delay: number;
  img: string;
  name: string;
  role: string;
}

const TeamMember: FC<TeamMemberProps> = ({ delay, img, name, role }) => {
  return (
    <motion.div
      variants={fadeInUpMotion}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      custom={delay}
      viewport={{ once: true }}
      className="mb-12 w-full px-3 md:w-1/2 lg:w-1/4"
    >
      <Image
        src={img}
        alt=""
        width={500}
        height={500}
        className="mx-auto h-64 w-64 rounded object-cover object-top"
      />
      <p className="mt-6">
        <strong>{name}</strong>
      </p>
      <p className="mb-4 text-xs text-gray-500">{role}</p>
      <div className="flex justify-center space-x-2 py-1">
        <Image src={facebookSvg as string} alt="" />
        <Image src={twitterSvg as string} alt="" />
      </div>
    </motion.div>
  );
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
  const teamMembers: Omit<TeamMemberProps, "delay">[] = [
    {
      name: "Geraldine Tusoy",
      role: "CEO, Co Founders",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-1.png",
    },
    {
      name: "Clara Kolawole",
      role: "CEO-Founder",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-2.png",
    },
    {
      name: "Chris Fulton",
      role: "Project-Manager",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-3.png",
    },
    {
      name: "Dany Connolly",
      role: "Direct-Founder",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-4.png",
    },
    {
      name: "Al-amin Bishash",
      role: "Director",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-5.png",
    },
    {
      name: "Sanuya Santa",
      role: "Marketing",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-6.png",
    },
    {
      name: "Steven Job",
      role: "Designer",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-7.png",
    },
    {
      name: "Romario",
      role: "Designer",
      img: "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-8.png",
    },
  ];

  return (
    <>
      <BreadCumb title="Out Team" />
      {/* Experts */}
      <section className="bg-blueGray-50 py-20">
        <div className="container">
          <Title
            label="Our Team Leader"
            desc="Our Customers Very Happy With Our Services."
          >
            Meet Your <span className="text-blue-500">Experts</span> <br />
            Team Member
          </Title>
          <div className="flex flex-wrap">
            {experts.map((i, index) => (
              <Expert key={`team-expert-${index}`} {...i} />
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      <section className="pt-20">
        <div className="container text-center">
          <Title
            label="Out Team"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis."
          >
            Our Awesome
            <br />
            <span className="text-blue-500">Creative</span> Team Member
          </Title>
          <div className="-mx-3 flex flex-wrap">
            {teamMembers.map((i, index) => (
              <TeamMember
                key={`team-member-${index}`}
                {...i}
                delay={(index % 4) * 0.2 + 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
