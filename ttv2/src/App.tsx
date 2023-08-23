import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import VideosPage from "./Pages/VideoPage/VideosPage";
import FooterMenuBar from "./Pages/VideoPage/Components/VideoComponents/FooterMenuBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VideosPage />} />
      </Routes>
      <FooterMenuBar />
    </>
  );
}

export default App;
