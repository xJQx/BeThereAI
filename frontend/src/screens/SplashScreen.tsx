import React from "react";

export const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-blue to-brand-dark-blue flex justify-center items-center">
      <div className="flex flex-col items-end text-white font-montserrat animate-[fadeInUp_2s_ease-in-out_1]">
        <span className="text-[48px] font-bold">BeThere</span>
        <span className="text-[48px] font-bold">AI.</span>
      </div>
    </div>
  );
};
