

import React from "react";

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">

          <h2 className="my-4 font-bold text-3xl text-blue-900 sm:text-6xl">
            About <span className="text-[#FFBF23]">Our Company</span>
          </h2>
          <p className="text-black">
          Welcome to <span className="text-blue-900">AIofy</span> -- where smart meets cool in the world of AI. We team up with you to bring bold ideas to life by using genius AI strategies, training smart models, or building agents that work like magic.

          </p>
          <p>No jargon, just real solutions that make your business faster, smarter, and future-proof.</p>
        </div>
      </div>
    </div>
  );
};

export default About;