import React from "react";

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    await fetch("/logout", {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">Logout</button>
  );
};

export default LogoutButton;
