import React from "react";

type BenefitItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const BenefitItem: React.FC<BenefitItemProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="mb-4 text-blue-900">{icon}</div>
    <div className="mb-2">
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
    </div>
    <div className="text-center">
      <p className="text-black">{description}</p>
    </div>
  </div>
);

const WhyChoosen: React.FC = () => {
  const benefits = [
    {
      title: "Industry-Specific Expertise",
      description:
        "Proven success across Finance, Healthcare, E-commerce, and Manufacturing.",
      icon: (
        <svg
          className="w-12 h-12 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Expert AI Professionals",
      description:
        "A team with a proven track record in AI strategy and deployment.",
      icon: (
        <div className="relative">
          <svg
            className="w-12 h-12 transition duration-700 transform hover:rotate-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        </div>
      ),
    },
    {
      title: "Customized Solutions",
      description: "Tailored AI models to fit your unique business needs.",
      icon: (
        <svg
          className="w-12 h-12 animate-spin"
          style={{ animationDuration: "8s" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Future-Proof Technology",
      description:
        "Stay ahead with the latest advancements in AI and machine learning.",
      icon: (
        <div className="relative">
          <svg
            className="w-12 h-12 transition-transform duration-300 transform hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
              className="animate-pulse"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Results-Driven",
      description: "Focused on delivering measurable outcomes and ROI.",
      icon: (
        <div className="group relative">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            >
              <animate
                attributeName="stroke-dasharray"
                from="1, 150"
                to="90, 150"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-35"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      ),
    },
    {
      title: "Human-Centric Approach",
      description: "We blend smart tech with real-world usability",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brain */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.5c2.7 0 5.8 2 5.8 5.5 0 2.5-1.6 4-3.8 4"
            className="animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.5c-2.7 0-5.8 2-5.8 5.5 0 2.5 1.6 4 3.8 4"
            className="animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          />
          
          {/* Head outline */}
          <circle
            cx="12"
            cy="9"
            r="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            className="animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          
          {/* Face */}
          <circle cx="9" cy="8" r="0.5" fill="currentColor" />
          <circle cx="15" cy="8" r="0.5" fill="currentColor" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 11c.85 1.5 5.15 1.5 6 0"
          />
          
          {/* Person */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 16v3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l3-1 3 1"
          />
          
          {/* Technology connection */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 9h1"
            className="animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18 9h1"
            className="animate-pulse"
            style={{ animationDuration: "2s", animationDelay: "0.3s" }}
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl sm:text-6xl text-blue-900 ">
            Why Choose <span className="text-[#FFBF23]">AIofy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoosen;