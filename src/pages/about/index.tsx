import type { NextPage } from "next";
import Expert, { type IExpert } from "~/components/expert";
import HowWeWork from "~/components/howWeWork";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import ContactUs from "~/components/contact-us";
import Subscribe from "~/components/subscribe";
import Counter from "~/components/counter";

const About: NextPage = () => {
  const experts: IExpert[] = [
    {
      top: true,
      name: "Geraldine Tusoy",
      role: "CEO, Co Founders",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-1.png",
    },
    {
      top: true,
      name: "Clara Kolawole",
      role: "CEO-Founder",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-2.png",
    },
    {
      top: true,
      name: "Chris Fulton",
      role: "Project-Manager",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-3.png",
    },
    {
      top: true,
      name: "Dany Connolly",
      role: "Direct-Founder",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-4.png",
    },
    {
      name: "Al-amin Bishash",
      role: "Director",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-5.png",
    },
    {
      name: "Sanuya Santa",
      role: "Marketing",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-6.png",
    },
    {
      name: "Steven Job",
      role: "Designer",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-7.png",
    },
    {
      name: "Romario",
      role: "Designer",
      image:
        "https://wp.alithemes.com/html/monst/assets/imgs/placeholders/avatar-8.png",
    },
  ];

  return (
    <>
      <Hero />
      <Counter />
      <HowWeWork />
      {/* Experts */}
      <section className="py-20">
        <div className="container text-center">
          <div className="mx-auto mb-16 max-w-lg">
            <span className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
              About Our Expert
            </span>
            <h2 className="mb-4 mt-2 font-heading text-3xl font-bold md:text-4xl">
              Entrust Your Project To Our
              <span className="text-blue-500"> Specialists</span>
            </h2>
            <p className="leading-loose text-blueGray-400">
              Our IT services converge business and technology experts to help
              to manage business categories
            </p>
          </div>
          <div className="-mx-5 flex flex-wrap">
            {experts.map((i, index) => (
              <Expert
                key={`expert-${i.name}`}
                name={i.name}
                image={i.image}
                top={i.top}
                role={i.role}
                delay={(index % 4) * 0.2 + 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactUs />
      <Subscribe />
      <Footer />
    </>
  );
};

export default About;
