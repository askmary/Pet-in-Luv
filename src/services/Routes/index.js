import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import CatPage from "../../pages/CatPage/CatPage";
import DogPage from "../../pages/DogPage/DogPage";
import AdoptionPage from "../../pages/AdoptionPage/AdoptionPage";
import ConfirmPage from "../../pages/ConfirmPage/Confirm"

export default function Path() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adocaogato" element={<CatPage />} />
        <Route path="/adocaocachorro" element={<DogPage />} />
        <Route path="/adocao" element={<AdoptionPage />} />
        <Route path="/confirm" element={<ConfirmPage/>}/>
      </Routes>
    </Router>
  );
}
