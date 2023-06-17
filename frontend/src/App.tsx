import { DashboardScreen } from "screens/DashboardScreen";
import { SettingsScreen } from "screens/SettingsScreen";
import { HomeScreen } from "screens/HomeScreen";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
