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
      {isLoading && <div className="donut"></div>}
      {!isLoading && (
        <>
          <h1>
            Site en construction <span>Site en construction</span>
          </h1>
        </>
      )}
    </section>
  );
}

export default Home;
