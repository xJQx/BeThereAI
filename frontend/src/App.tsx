import { DashboardScreen } from "screens/DashboardScreen";
import { SettingsScreen } from "screens/SettingsScreen";
import { HomeScreen } from "screens/HomeScreen";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SplashScreen } from "screens/SplashScreen";

function App() {
  const [firstLoad, setFirstLoad] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen">
      {firstLoad ? (
        <SplashScreen />
      ) : (
        // {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Routes>
        // {/* <Footer /> */}
      )}
    </div>
  );
}

export default App;
