import Intro from "../../components/introduction/Intro.jsx";
import Technos from "../../components/technos/Technos.jsx";
import { useState, useEffect } from "react";
import "./Apropos.scss";

function Apropos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading && <div className="donut"></div>}
      {!isLoading && (
        <>
          <Intro />
          <Technos />
        </>
      )}
    </div>
  );
}

export default Apropos;
