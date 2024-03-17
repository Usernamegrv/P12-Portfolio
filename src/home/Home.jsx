import Contact from "../components/contact/Contact.jsx";
import Intro from "../components/introduction/Intro";
import Portfolio from "../components/portfolio/Portfolio.jsx";
import Technos from "../components/technos/Technos.jsx";

function Home() {
  return (
    <div>
      <Intro />
      <Portfolio />
      <Technos />
      <Contact />
    </div>
  );
}

export default Home;
