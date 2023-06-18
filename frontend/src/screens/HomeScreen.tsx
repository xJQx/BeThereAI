import { Navbar } from "components/Navbar";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "states/AuthContextProvider";
import { ButtonSettings } from "components/ButtonSettings";
import { CardElderly } from "components/CardElderly";

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
    <div className="min-h-screen brand-light-blue">
      {/* <button onClick={handleLogOut}>log out</button> */}
      <Navbar
        img={{
          src: "assets/profile-image-user-3.jpg",
          alt: "profile image",
        }}
        name="Welcome, Linda!"
        icons={[<ButtonSettings key="settings" />]}
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-brand-light-blue rounded-t-3xl shadow-xl shadow-brand-dark-blue">
        <CardElderly />
        <CardElderly />
      </div>
    </div>
  );
};
