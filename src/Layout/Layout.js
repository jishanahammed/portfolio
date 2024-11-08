import React from "react";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    <div className="flex">
     
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar/>
        <main className="max-w-full mx-auto mt-10  ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
