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
            AI Model Training
          </h2>
          <p className="text-lg md:text-xl text-black w-full">
            At <span className="text-blue-900">Aiofy</span>, we don't just train
            models — we craft high-performance learners that understand
            patterns, predict outcomes, and evolve over time. Whether you're
            building an intelligent chatbot, a smart recommender system, or a
            powerful predictive engine, our AI model training services are built
            to help your AI go from average to extraordinary.
          </p>
          <p className="text-lg md:text-xl text-black w-full mt-3">
            From foundational models to custom fine-tuned architectures, we
            handle every step — data prep, model selection, training, tuning,
            and deployment — so your AI delivers real business value, not just
            theoretical promise.
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
                  End-to-End Model Development
                </h3>
                <p className="text-gray-600">
                  From data prep to deployment, we train AI models tailored to
                  your unique use case — whether it's NLP, vision, prediction,
                  or recommendation engines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Fine-Tuning Pretrained Models
                </h3>
                <p className="text-gray-600">
                  Leverage the power of state-of-the-art models like GPT, BERT,
                  or Stable Diffusion — fine-tuned specifically to your domain
                  for laser-sharp accuracy and performance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Custom Dataset Engineering
                </h3>
                <p className="text-gray-600">
                  We design, clean, and optimize high-quality datasets that make
                  your model smarter, faster, and more reliable — because great
                  AI starts with great data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Performance Optimization & Scaling
                </h3>
                <p className="text-gray-600">
                  We don't just train models — we squeeze every ounce of
                  performance out of them using quantization, pruning, and model
                  distillation, ready to scale in real-world environments.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Evaluation & Bias Reduction
                </h3>
                <p className="text-gray-600">
                  Our training pipeline includes rigorous testing for fairness,
                  bias, and robustness — ensuring your AI is ethical, compliant,
                  and trustworthy.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Continual Learning Pipelines
                </h3>
                <p className="text-gray-600">
                  Stay ahead of the curve with AI that learns over time. We
                  build pipelines that retrain your models with new data,
                  keeping them sharp, relevant, and future-proof.
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
