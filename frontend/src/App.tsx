import { DashboardScreen } from "screens/DashboardScreen";
import { SettingsScreen } from "screens/SettingsScreen";
import { HomeScreen } from "screens/HomeScreen";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SplashScreen } from "screens/SplashScreen";
import { LoginScreen } from "screens/LoginScreen";

function App() {
  const [firstLoad, setFirstLoad] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false);
    }, 3000);
  }, []);

  if (firstLoad) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen font-montserrat">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </div>
  );
}

export default App;
