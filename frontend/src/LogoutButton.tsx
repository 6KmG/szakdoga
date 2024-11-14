import React from "react";

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    await fetch("/logout", {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/login";
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
