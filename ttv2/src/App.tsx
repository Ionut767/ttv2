import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import VideosPage from "./Pages/VideoPage/VideosPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VideosPage />} />
      </Routes>
    </>
  );
}

export default App;
