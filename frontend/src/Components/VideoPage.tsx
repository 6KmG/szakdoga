import React, { useState, useEffect } from "react";
import LoginButton from "./Buttons/LoginButton";
import RegisterButton from "./Buttons/RegisterButton";
import VideoStream from "./Videostream/VideoStream";
import AuthService from "../Services/AuthService";
import { useParams } from "react-router-dom";

const VideoPage: React.FC = () => {
  const {videoName} = useParams();

  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const result = await AuthService.checkAuthStatus();
      if (result) {
        setAuthStatus(true);
      } else {
        setAuthStatus(false);
      }
    };

    checkAuthStatus();
  }, []);
  
  // console.log(authStatus);
  console.log(videoName);

  return (
    <div className="Home">
      <header className="flex justify-between py-[1.5%] px-[3%]">
        <h1 className="text-2xl font-extrabold select-none">
          Video Streaming
        </h1>
        <section>
        <LoginButton/>
        { authStatus ? (<RegisterButton/>):(<></>) }
        </section>

      </header>
      
      <section className="left-edge top-[10%] sm:w-[70%]">
        <VideoStream videoUrl={`http://localhost:8080/video/mp4/${videoName}`} />
        <h2 className="text-2xl font-bold py-[2%] px-[3%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, neque.
        </h2>
      </section>
    </div>
  );
};

export default VideoPage;
