// LogoutButton.tsx

import React from "react";
import AuthService from "../AuthService";

const LogoutButton: React.FC = () => {
  // const handleLogout = () => {
  //   fetch("http://localhost:8080/logout", {
  //     method: "POST",
  //     credentials: "include",
  //   }).then(() => { 
  //     window.location.assign("/login");
  //   });
    
  // };

  const handleLogout = () => {
    AuthService.logout().then(() => { 
          window.location.assign("/login");
    });

  }
  return (
    <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">Logout</button>
  );
};

export default LogoutButton;
