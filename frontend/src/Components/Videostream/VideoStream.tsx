// VideoStream.tsx

import React, { useState, useEffect } from "react";

interface Component {
    className?: string;
    videoUrl: string;
}

const VideoStream: React.FC<Component> = ( {videoUrl}) => {
    const fetchVideo = async () => {
        try {
            const response = await fetch(videoUrl, {
                method: "GET",
                credentials: "include", // This line is already present, which is good
                headers: {
                    "X-Requested-With": "XMLHttpRequest" // Add this line
                }
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
    <video width="1280" height="720" controls>
        <source src={videoUrl} type="video/mp4" />
    </video>
  )
}

export default VideoStream;