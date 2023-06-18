import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "states/AuthContextProvider";

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
    <div>
      HomeScreen
      <button onClick={() => navigate("/settings")}>settings</button>
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
};
