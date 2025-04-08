"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import { CoolMode } from "../../components/ui/cool-mode";

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const services = [
    {
      image: "/images/AIConsulting.jpg",
      title: "AI Consulting and Product Engineering",
      description1:
        "From spotting where AI fits best in your business to building clever solutions that actually work — we help you plug AI into your business like magic. Got an idea? We’ll turn it into a smart, sleek AI product that’s ready to roll.",
      description2:
        "So whether you’re dreaming big or scaling fast, we’ve got the brains (and the code) to make it happen!",
      link: "/services/AiConsulting",
    },
    {
      image: "/images/ModelTraining.jpg",
      title: "AI Model Training",
      description1:
        "Whether you're teaching a model to chat, predict, or make smart decisions — we train AI like total pros. From wrangling messy data to fine-tuning every layer, we handle the nerdy stuff so your AI just wows.",
      description2:
        "Need a model that actually gets the job done? We’ll build it, train it, and set it loose!",
      link: "/services/AiModelTraining",
    },
    {
      image: "/images/genAI.jpg",
      title: "Building AI Agents",
      description1:
        "From smart sidekicks to tireless digital doers — we build AI agents that think, act, and get things DONE. Whether it's automating tasks, chatting like a human, or mastering complex workflows, our agents don't just assist — they ace it.",
      description2:
        "We craft AI agents that operate like seasoned pros, so you can focus on the big moves , while they handle the heavy lifting behind the scenes.",
      link: "/services/BuildingAIAgents",
    },
  ];

  return (
    <motion.div
      id="services-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white py-16 "
    >
      <div className="container mx-auto px-4">
        <motion.h1
          variants={titleVariants}
          className="text-center text-3xl md:text-6xl font-extrabold mb-14 text-blue-900 tracking-tight "
        >
          Our <span className="text-[#FFBF23]">Services</span>
        </motion.h1>
        {/* <h2 className=" text-black mb-4 text-3xl  sm:text-5xl font-['SpaceGrotesk'] text-center">
          Our <span className="text-[#FFBF23]">Services</span>
           </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.8,
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-black leading-relaxed mb-1 flex-grow">
                  {service.description1}
                </p>
                <p className="text-black leading-relaxed mb-4 flex-grow">
                  {service.description2}
                </p>
                <div className="mt-auto">
                  {/* <CoolMode> */}
                  <Link
                    href={service.link}
                    className="group relative block w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center bg-[#FFBF23] text-blue-900 py-2 rounded-lg  transition-colors duration-300 ease-in-out"
                    >
                      <span className="mr-2">Know More</span>

                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.div>
                  </Link>
                  {/* </CoolMode> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
