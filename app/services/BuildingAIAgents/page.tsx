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
        <header className="pt-20 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl text-[#] mb-4 flex items-center justify-center">
            Building AI Agents
          </h2>
          <p className="text-lg md:text-xl text-black w-full text-left">
            At <span className="text-blue-900">Aiofy</span>, we design AI agents
            that go beyond simple automation. These are intelligent digital
            workers that can think, decide, and act — all in real time. From
            handling repetitive tasks to managing complex workflows, we create
            agents that truly understand the context, adapt to changes, and
            deliver results like seasoned pros. Whether it's a chatbot with
            personality or an autonomous system running behind the scenes — our
            AI agents get the job done, 24/7.
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
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Task-Specific Autonomous Agents
                </h3>
                <p className="text-gray-600">
                  We build agents with sharp focus — whether it's customer
                  support, lead generation, or knowledge management — they own
                  their task and deliver, every time.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Multi-Agent Collaboration Systems
                </h3>
                <p className="text-gray-600">
                  Need agents that work as a team? We engineer agent ecosystems
                  that collaborate, communicate, and coordinate to achieve
                  complex goals seamlessly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Conversational Agents with Memory
                </h3>
                <p className="text-gray-600">
                  Beyond chatbots — we design AI agents that remember, learn
                  from users, and get smarter with every conversation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Agent + Tool Integration
                </h3>
                <p className="text-gray-600">
                  We equip agents to use external tools, APIs, and plugins —
                  from web browsing to sending emails — giving them real-world
                  utility, not just intelligence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Secure & Ethical AI Behavior
                </h3>
                <p className="text-gray-600">
                  We bake in safety, compliance, and responsible behavior —
                  ensuring agents stay aligned with human intent and company
                  policies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Deployment-Ready Architectures
                </h3>
                <p className="text-gray-600">
                  From design to real-world deployment, we ensure your agents
                  are scalable, low-latency, and production-grade — ready to run
                  anywhere: cloud, edge, or hybrid.
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
              Transform your business with next-generation AI Model Training
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
