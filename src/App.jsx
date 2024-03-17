import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./layout/footer/Footer.jsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
