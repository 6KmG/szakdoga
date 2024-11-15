import React, { useState, useEffect } from "react";

interface Component {
    className?: string;
}

const VideoStream: React.FC<Component> = ( {className}) => {
    const videoUrl = "http://localhost:8080/video/mp4/untitled";

    const baseStyles = "";

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
    
    useEffect(() => { fetchVideo()}, []);


  return (
    <video width="640" height="360" controls className={`${baseStyles} ${className}`}>
        <source src={videoUrl} type="video/mp4" />
    </video>
  )
}

export default VideoStream;