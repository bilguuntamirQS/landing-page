import type { NextPage } from "next";
import type { FC } from "react";
import BreadCumb from "~/components/bread-cumb";
import { motion } from "framer-motion";
import { fadeInUpMotion } from "~/utils/animation";
import Image from "next/image";
import facebookSvg from "~/assets/facebook-blue.svg";
import twitterSvg from "~/assets/twitter-blue.svg";
import Title from "~/components/title";
import GetInTouch from "~/components/get-in-touch";
import { comments } from "~/utils/consts";
import Comment from "~/components/comment";

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
            {comments.slice(0, 4).map((i, index) => (
              <Comment
                key={`comment-${index}`}
                {...i}
                delay={index * 0.2 + 0.1}
              />
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
      <GetInTouch />
    </>
  );
};

export default Team;
