import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import VideoPage from "./Pages/VideoPage/VideosPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VideoPage />} />
      </Routes>
    </>
  );
}

export default App;
