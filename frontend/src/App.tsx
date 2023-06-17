import { DashboardPage } from "pages/DashboardPage";
import { SettingsPage } from "pages/SettingsPage";
import { HomePage } from "pages/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
