import { InputText } from "components/InputText";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "states/AuthContextProvider";

export const LoginScreen = () => {
  const authContext = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    authContext.setIsLoggedIn(true);
    navigate("/");
  };

  useEffect(() => {
    if (authContext.isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-blue to-brand-dark-blue flex flex-col justify-center items-center">
      <div className="flex flex-col text-white text-[24px] font-bold items-end max-w-min">
        <span>BeThere</span>
        <span>AI.</span>
      </div>

      {/* Username and Password */}
      <div className="flex flex-col gap-[8px] mt-[28px] justify-center items-center max-w-[225px]">
        <InputText type="text" placeholder="Username" />
        <InputText type="password" placeholder="Password" />
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="bg-white w-min px-[24px] py-[6px] text-brand-dark-blue font-semibold rounded-3xl mt-[16px]"
      >
        Login
      </button>

      {/* Create Account + Forgot Password */}
      <div className="w-[225px] flex flex-col items-end text-[10px] text-brand-light-blue font-semibold mt-[16px]">
        <span>Create Account</span>
        <span>Forgot Password?</span>
      </div>
    </div>
  );
};
