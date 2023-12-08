import Navbar from "./Components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, APousada, AVila, Reservas } from "./Components/Pages";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APousada" element={<APousada />} />
        <Route path="/AVila" element={<AVila />} />
        <Route path="/Reservas" element={<Reservas />} />
      </Routes>
    </div>
  );
}

export default App;
