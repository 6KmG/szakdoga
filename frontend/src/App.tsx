// App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Login from "./Components/Login";
import VideoPage from "./Components/VideoPage"; // Example home component
import Register from "./Components/Register"; // Example register component

// import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/:videoPath" element={<Home />} /> */}
        {/* <Route path="/" element={<VideoPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video/:videoName" element={<VideoPage />} />
      </Routes>
    </Router>
  );
};

function UserProfile() {
  const { userId } = useParams(); // Extract the dynamic part of the URL
  return <h1>User Profile for ID: {userId}</h1>;
}

export default App;
