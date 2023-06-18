import { Navbar } from "components/Navbar";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "states/AuthContextProvider";
import { ButtonSettings } from "components/ButtonSettings";
import { CardElderly, CardElderlyProps } from "components/CardElderly";
import { IoAdd, IoAddCircle } from "react-icons/io5";

export const HomeScreen = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authContext.isLoggedIn) {
      navigate("/login");
    }
  }, []);

  const handleLogOut = () => {
    authContext.setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light-blue to-brand-light-blue flex flex-col items-center">
      {/* <button onClick={handleLogOut}>log out</button> */}
      <Navbar
        img={{
          src: "assets/profile-image-user-3.jpg",
          alt: "profile image",
        }}
        name="Welcome, Linda!"
        icons={[<ButtonSettings key="settings" />]}
      />

      <div className="bg-gradient-to-b from-white to-brand-light-blue rounded-t-3xl shadow-brand-dark-blue pt-[24px]">
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {elderlyCardData.map((data) => (
            <CardElderly key={data.name} {...data} />
          ))}
        </div>
      </div>

      <div className="mt-[24px]">
        <IoAdd
          className="text-brand-blue bg-white h-[48px] w-[48px] rounded-full"
          onClick={() => console.log("Add Elderly")}
        />
      </div>
    </div>
  );
};

const elderlyCardData: Array<CardElderlyProps> = [
  {
    img: {
      src: "assets/profile-image-elderly-1.jpg",
      alt: "profile-image-elderly-1",
    },
    name: "Grandma Lee",
    lastSeen: "10mins ago...",
    lastTextTime: "Tuesday 11:15",
    lastText: "You: Coco looks great grand...",
    mood: "Happy",
  },
  {
    img: {
      src: "assets/profile-image-elderly-2.jpg",
      alt: "profile-image-elderly-2",
    },
    name: "Aunty Lee",
    lastSeen: "23mins ago...",
    lastTextTime: "Sunday 17:00",
    lastText: "Received...",
    mood: "Sad",
  },
  {
    img: {
      src: "assets/profile-image-elderly-3.jpg",
      alt: "profile-image-elderly-3",
    },
    name: "Grandpa Alex",
    lastSeen: "10mins ago...",
    lastTextTime: "Tuesday 11:15",
    lastText: "You: Coco looks great grand...",
    mood: "Happy",
  },
  {
    img: {
      src: "assets/profile-image-elderly-1.jpg",
      alt: "profile-image-elderly-1",
    },
    name: "Grandma Lee",
    lastSeen: "10mins ago...",
    lastTextTime: "Tuesday 11:15",
    lastText: "You: Coco looks great grand...",
    mood: "Sad",
  },
];
