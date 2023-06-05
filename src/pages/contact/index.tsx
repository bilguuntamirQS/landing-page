import type { NextPage } from "next";
import ContactUs from "~/components/contact-us";
import Hero from "~/components/hero";
import Subscribe from "~/components/subscribe";

const Contact: NextPage = () => {
  return (
    <>
      <Hero />
      <ContactUs />
      <Subscribe />
    </>
  );
};

export default Contact;
