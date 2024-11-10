import React from "react";
import Layout from "./Layout/Layout";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Counter from "./components/Counter";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Layout>
      <div className="">
       <Hero/>
       <Counter/>
       <AboutMe/>
       <ContactUs/>
      </div>
    </Layout>
  );
}

export default App;
