import React from "react";
import Contact from "./ContactUs";
import { Element } from "react-scroll";
import Technologies from "./Technologies";
const ContactusTec = () => {
  return (
    <Element name="contact-us">
     <Technologies/>
    <Contact/>
    </Element>
  );
};

export default ContactusTec;
