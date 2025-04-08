"use client";
import React, { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-24 h-24 rounded-full border-4 border-yellow-300 border-t-yellow-500 animate-spin"></div>

        {/* Inner circle */}
        <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-yellow-400 border-b-yellow-200 animate-spin"></div>

        {/* Core circle */}
        <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 animate-pulse"></div>

        {/* Text below */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-500 font-bold text-lg font-['SpaceGrotesk']">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
