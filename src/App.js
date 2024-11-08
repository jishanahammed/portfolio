import React from "react";
import Layout from "./Layout/Layout";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Layout>
      <div className="">
       <Hero/>
       <ContactUs/>
      </div>
    </Layout>
  );
}

export default App;
