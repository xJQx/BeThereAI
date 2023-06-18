import React from "react";
import { IoHappyOutline, IoSadOutline } from "react-icons/io5";

export type MoodType =
  | "Happy"
  | "Sad"
  | "Excited"
  | "Angry"
  | "Depressed"
  | "Lonely";

interface MoodEmojiProps {
  mood: MoodType;
}

export const MoodEmoji = ({ mood }: MoodEmojiProps) => {
  switch (mood) {
    case "Happy":
      return <IoHappyOutline />;
    case "Sad":
      return <IoSadOutline />;
    default:
      return <></>;
  }
};
