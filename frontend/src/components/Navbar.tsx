import React from "react";
import { InputText } from "./InputText";
import { IoSearch } from "react-icons/io5";

interface NavbarProps {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  icons?: Array<React.ReactNode>;
}

export const Navbar = (props: NavbarProps) => {
  const { name, img, icons } = props;

  const handleSearch = () => {
    console.log("Searching...");
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="bg-brand-blue w-screen px-[18px] pt-[28px] pb-[12px] rounded-b-3xl shadow-lg shadow-light-blue flex justify-between items-center">
        {/* Profile Image + Name */}
        <div className="flex flex-row gap-2 items-center">
          <img
            src={img.src}
            alt={img.alt}
            className="rounded-full h-[48px] w-[48px]"
          />
          <span className="text-[16px] font-semibold text-white">{name}</span>
        </div>

        {/* Icon Buttons */}
        {icons && icons.map((icon) => <div key={icon?.toString()}>{icon}</div>)}
      </div>

      {/* Sub Navbar */}
      <div className="bg-transparent w-screen px-[24px] py-[18px]">
        <div className="max-w-[180px] flex flex-row gap-2 items-center">
          <InputText
            type="text"
            placeholder="Search..."
            style={{ fontSize: 12, paddingLeft: 16, paddingRight: 16 }}
          />
          <div className="bg-white p-[6px] rounded-full" onClick={handleSearch}>
            <IoSearch className="text-brand-dark-blue" />
          </div>
        </div>
      </div>
    </>
  );
};
