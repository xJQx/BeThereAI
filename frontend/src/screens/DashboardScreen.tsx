import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "states/AuthContextProvider";

export const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authContext.isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return <div>DashboardScreen</div>;
};
