// Home.tsx

import React, { useState, useEffect } from "react";
//import "./Home.css";
import LogoutButton from "./buttons/LogoutButton";
import AnotherButton from "./buttons/AnotherButton";
import VideoStream from "./videostream/VideoStream";

const App: React.FunctionComponent = () => {
  return (
    <div className="Home">
      <h1 className="absolute top-[5%] left-[5%] text-2xl font-extrabold select-none">Video Streaming</h1>
      <VideoStream className="absolute left-[10%] top-[15%] w-[50%]" />
      <section className="absolute top-[5%] right-[5%]">
        <LogoutButton />
        <AnotherButton />
      </section>
      
    </div>
  );
};

export default App;
