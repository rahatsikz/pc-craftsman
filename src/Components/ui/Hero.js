import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold">Build Your Dream PC</h1>
          <p className="mb-5 max-w-md">
            Get ready to unleash your gaming and productivity potential with our
            wide range of high-performance PC components.
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
