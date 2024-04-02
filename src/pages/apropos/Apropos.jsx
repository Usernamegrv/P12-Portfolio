import Intro from "../../components/introduction/Intro.jsx";
import Technos from "../../components/technos/Technos.jsx";
import { useState, useEffect } from "react";
import "./Apropos.scss";
import Spinner from "../../components/spinner/Spinner.jsx";

function Apropos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading && <Spinner />}
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