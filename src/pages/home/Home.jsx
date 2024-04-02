import Defilement from "../../components/defilement/Defilement.jsx";
import Services from "../../components/services/Services.jsx";
import Spinner from "../../components/spinner/Spinner.jsx";
import Banner from "../../layout/banner/Banner.jsx";

import "./Home.scss";
import { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <section className="home">
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <article>
            <h1>
              Morgane Gervois <span>Développeuse web & mobile</span>
            </h1>
          </article>

          <div className="text-defilement">
            <Defilement />
          </div>
          <Banner />

          <Services />
        </>
      )}
    </section>
  );
}

export default Home;
