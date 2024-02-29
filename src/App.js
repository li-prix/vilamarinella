import "./index.css";
import Navbar from "./Components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, APousada, Acomodacoes, AVila } from "./Components/Pages";
import Footer from "./Components/Concept/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APousada" element={<APousada />} />
        <Route path="/Acomodacoes" element={<Acomodacoes />} />
        <Route path="/AVila" element={<AVila />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
