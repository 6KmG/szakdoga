import React, { useState, useEffect } from "react";
import "./Home.css";
import LogoutButton from "./LogoutButton";
import AnotherButton from "./AnotherButton";
import VideoStream from "./VideoStream";

const App: React.FunctionComponent = () => {
  return (
    <div className="Home">
      <h1 className="absolute top-[5%] left-[5%] text-2xl font-extrabold">Video Streaming</h1>
      <VideoStream className="absolute left-[10%] top-[15%] h-[50%]" />
      <section className="absolute top-[5%] right-[5%]">
        <LogoutButton />
        <AnotherButton />
      </section>
      
    </div>
  );
};

export default App;
