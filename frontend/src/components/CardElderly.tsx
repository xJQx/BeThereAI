import React from "react";
import { MoodEmoji, MoodType } from "./MoodEmoji";
import { IoExpandOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export interface CardElderlyProps {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  lastSeen: string;
  lastTextTime: string;
  lastText: string;
  mood: MoodType;
}

export const CardElderly = (props: CardElderlyProps) => {
  const { img, name, lastSeen, lastText, lastTextTime, mood } = props;

  const navigate = useNavigate();

  return (
    <div className="relative bg-brand-light-blue min-h-[175px] w-full max-w-[150px] p-1 rounded-2xl">
      <img
        id="card-elderly-container-image"
        src={img.src}
        alt={img.alt}
        className="min-h-[175px] w-full max-w-[150px] rounded-2xl"
      />
      <div className="absolute bottom-[42px] left-[10px] flex flex-col bg-white px-[8px] py-[4px] rounded-xl opacity-90">
        <span className="text-black font-bold text-[10px] my-0">{name}</span>
        <span className="text-brand-dark-blue text-[8px]">{lastSeen}</span>
      </div>
      <div className="absolute bottom-[8px] left-[10px] flex flex-col bg-white px-[8px] py-[4px] rounded-xl opacity-90">
        <span className="text-brand-blue font-bold text-[8px] my-0">
          {lastTextTime}
        </span>
        <span className="text-brand-blue text-[8px]">{lastText}</span>
      </div>
      <div className="absolute bottom-[42px] right-[10px] flex flex-col bg-white text-brand-blue text-[24px] p-[4px] rounded-full opacity-90">
        <MoodEmoji mood={mood} />
      </div>
      <div
        className="absolute top-[8px] right-[8px] flex flex-col bg-white text-brand-blue text-[18px] p-[4px] rounded-full opacity-90"
        onClick={() => navigate("/messaging")}
      >
        <IoExpandOutline />
      </div>
    </div>
  );
};
