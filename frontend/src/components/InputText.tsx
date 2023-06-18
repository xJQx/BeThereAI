import React from "react";

interface InputTextProps {
  type: string;
  placeholder: string;
  style?: React.CSSProperties;
}

export const InputText = ({ type, placeholder, style }: InputTextProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-white w-full px-[24px] py-[6px] text-brand-dark-blue font-semibold rounded-3xl placeholder-brand-dark-blue"
      style={style}
    />
  );
};
