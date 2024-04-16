import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./layout/footer/Footer.jsx";
import Projets from "./pages/projets/Projets.jsx";
import Apropos from "./pages/apropos/Apropos.jsx";
import Error from "./pages/error/Error.jsx";
import Tarifs from "./pages/tarifs/Tarifs.jsx";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Apropos />} />
        <Route path="projects" element={<Projets />} />
        <Route path="prices" element={<Tarifs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
