"use client"
import React, { useState, useEffect } from 'react';

type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
};

const WhatOurClientsSay: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "AIofy transformed our data strategy with actionable AI insights. Their expertise is unparalleled!",
      author: "Mark D.",
      position: "CTO",
      company: "AdC Networks",
      rating: 5
    },
    {
      id: 2,
      content: "Their AI model training elevated our automation capabilities significantly. Truly a game-changer!",
      author: "Disha",
      position: "Chief Data Officer",
      company: "SDS Insights",
      rating: 5
    },
    {
      id: 3,
      content: "Aiofy didn’t just consult — they co-piloted our entire AI journey. From idea to execution, their team made complex tech feel surprisingly human. Game-changer!",
      author: "Jignesh Patel",
      position: "Founder",
      company: "ElloraVision",
      rating: 5
    },
    {
      id: 4,
      content: "The AI agents they built for us now handle tasks we used to spend hours on. It’s like hiring a digital team that never sleeps!",
      author: "Harish",
      position: "Co-Founder",
      company: "CocoPalm",
      rating: 5
    },
    {
      id: 5,
      content: "Training AI always felt like rocket science. Aiofy turned it into a breeze. Our models perform better than ever — and we actually understand them now.",
      author: "Mak",
      position: "Founder",
      company: "EmporiaMax",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-[#FFBF23] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl  sm:text-6xl text-blue-900 mb-4 flex items-center justify-center font-bold">
           
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-6"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-indigo-200 border-opacity-20 shadow-xl">
                    <div className="flex mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-xl italic font-medium text-black mb-6 font-['SpaceGrotesk']">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-blue-900">{testimonial.author}</p>
                        <p className="text-black">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white scale-125' : 'bg-indigo-200 bg-opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default WhatOurClientsSay;