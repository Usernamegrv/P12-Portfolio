import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./layout/footer/Footer.jsx";

import Projets from "./pages/projets/Projets.jsx";
import Apropos from "./pages/apropos/Apropos.jsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Apropos />} />
        <Route path="projects" element={<Projets />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
