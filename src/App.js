import "./index.css";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Header/Hero";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  APousada,
  Acomodacoes,
  AVila,
  Reservas,
} from "./Components/Pages";
import Footer from "./Components/Concept/Footer";
import { Switch } from "@headlessui/react";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APousada" element={<APousada />} />
        <Route path="/Acomodacoes" element={<Acomodacoes />} />
        <Route path="/AVila" element={<AVila />} />
        <Route path="/Reservas" element={<Reservas />} />
      </Routes>
    </div>
  );
}

export default App;
