import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const videoUrl = "http://localhost:8080/video/mp4/untitled";

  const fetchVideo = async () => {
    try {
      const response = await fetch(videoUrl, {
        method: "GET",
        credentials: "include", // Send session cookie
      });

      if (!response.ok) {
        console.error("Failed to fetch video:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div>
      <h2>Video Streaming</h2>
      <video width="640" height="360" controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;