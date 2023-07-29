import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold">Build Your Dream PC</h1>
          <p className="mb-5 max-w-md">
            Get ready to unleash your gaming and productivity potential with our
            wide range of high-performance PC components
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
