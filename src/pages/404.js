/* eslint-disable @next/next/no-img-element */
import React from "react";
import img from "/public/undraw_Page_not_found.png";

const NotFound = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <img src={img.src} alt="" />
      <h2 className="text-primary text-2xl text-center font-serif mb-8">
        Page Not Found
      </h2>
    </div>
  );
};

export default NotFound;
