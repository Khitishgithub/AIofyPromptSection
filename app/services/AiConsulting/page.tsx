"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="bg-[#FFBF23] flex-1">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 p-4 text-black rounded-full font-bold transition-colors hover:bg-white/10"
            aria-label="Go back"
          >
            <ArrowLeft size={24} className="text-black" />
            <span>Go Back</span>
          </button>
        </div>
        {/* Header */}
        <header className="pt-20 pb-16 px-4 md:px-8 max-w-6xl mx-auto ">
          <h2 className="text-3xl sm:text-5xl text-[#] mb-4 flex items-center justify-center text-center">
            AI Consulting and Product Engineering
          </h2>
          <p className="text-lg md:text-xl text-black w-full">
            At <span className="text-blue-900">Aiofy</span>, we help businesses
            unlock the full potential of AI with sharp strategy and cutting-edge
            engineering. Whether you're exploring possibilities or building the
            next big thing, we're here to make sure your AI journey is fast,
            focused, and full of wins.
          </p>
        </header>

        {/* Main Content */}
        <main className="px-4 md:px-8 max-w-6xl mx-auto pb-2">
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-10">
            <div className="flex items-center mb-8">
              <div className="w-14 h-11 mr-4">
                <Image
                  src="/images/aiofyicon.jpg"
                  alt="Services icon"
                  width={108}
                  height={68}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                What We Offer:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Maturity Assessment */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  AI Maturity Assessment
                </h3>
                <p className="text-gray-600">
                  A comprehensive audit of your existing infrastructure, data
                  maturity, and AI capabilities to identify gaps and
                  opportunities.
                </p>
              </div>

              {/* Business Impact Analysis */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Business Impact Analysis
                </h3>
                <p className="text-gray-600">
                  In-depth analysis to pinpoint areas where AI can deliver the
                  highest ROI—from cost reduction to revenue growth.
                </p>
              </div>

              {/* Custom AI Strategy Development */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Custom AI Strategy Development
                </h3>
                <p className="text-gray-600">
                  Personalized roadmaps with clear milestones, financial
                  projections, and risk assessments to ensure seamless AI
                  adoption.
                </p>
              </div>

              {/* AI Governance Frameworks */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  AI Governance Frameworks
                </h3>
                <p className="text-gray-600">
                  Best-in-class governance protocols to manage risks,
                  compliance, and ethical considerations with precision.
                </p>
              </div>

              {/* Change Management Support */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 md:col-span-2">
                <h3 className="text-xl font-bold text-black mb-4">
                  Change Management Support
                </h3>
                <p className="text-gray-600">
                  Dedicated support for workforce upskilling and process
                  transformation to maximize AI adoption.
                </p>
              </div>
            </div>
          </section>
        </main>

        <div className="p-5 rounded-lg text-center">
          <a
            href="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            Contact Us
          </a>
        </div>

        {/* Footer */}
        <footer className="bg-[#FFBF23] text-black py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg">
              Transform your business with next-generation AI Consulting
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
