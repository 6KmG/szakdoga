// LoginButton.tsx

import React from "react";
import AuthService from "../../Services/AuthService";

const LoginButton: React.FC = () => {
  const handleLogout = () => {
    AuthService.logout().then(() => { 
      window.location.assign("/login");
    });

  }
  return (
    <button onClick={handleLogout} className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-800">Log in</button>
  );
};

export default LoginButton;
