import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthTabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="auth-tabs">
      <button
        onClick={() => handleTabChange("login")}
        className={`tab-button ${activeTab === "login" ? "active" : ""}`}
      >
        Login
      </button>

      <button
        onClick={() => handleTabChange("signup")}
        className={`tab-button ${activeTab === "signup" ? "active" : ""}`}
      >
        Sign Up
      </button>

      {/* Animated underline */}

      
      <motion.div
        initial={{ width: "50%" }}
        animate={{ x: activeTab === "login" ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="tab-indicator"
      />
    </div>
  );
}
