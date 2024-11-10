import React from "react";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    <div className="flex">
     
      <div className="flex-1 flex flex-col min-h-screen dark:bg-gray-900">
        <Navbar/>
        <main className="w-full mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
