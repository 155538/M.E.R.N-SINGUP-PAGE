import { useState } from "react";
import AuthTabs from "./components/AuthTabs";
import AuthForm from "./components/AuthForm";
import "./styles/Auth.css";
import { div } from "framer-motion/client";

export default function App() {
  const [mode, setMode] = useState("login");

  return (

    
    <div className="auth-container">
      <h1 className="auth-title">Signup page !</h1>
      
      <AuthTabs onTabChange={(tab) => setMode(tab)} />
      
      <AuthForm mode={mode} />
    
      
      {/* Footer for switching between login and signup */}
      
      <div className="auth-footer">
        {mode === "login" ? (
          <p>Don't have an account? <span onClick={() => setMode("signup")}>Sign Up</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setMode("login")}>Login</span></p>
        )}
      </div>
    </div>




  );
}
