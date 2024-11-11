import React from "react";
import Layout from "./Layout/Layout";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Counter from "./components/Counter";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import ProjectList from "./components/Project/ProjectList";
import Technologies from "./components/Technologies";
import ContactusTec from "./components/ContactusTec";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Layout>
      <div className="">
       <Hero/>
       <Counter/>
       <AboutMe/>
       <Services/>
       <ProjectList/>
     <ContactusTec/>
   
      </div>
      <ScrollToTopButton/>
    </Layout>
  );
}

export default App;
