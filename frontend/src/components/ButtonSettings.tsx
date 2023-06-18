import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export const ButtonSettings = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/settings")}
      className="bg-white p-[6px] rounded-full"
    >
      <IoSettingsOutline className="text-brand-dark-blue h-[28px] w-[28px]" />
    </div>
  );
};
