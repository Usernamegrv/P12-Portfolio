import Intro from "../../components/introduction/Intro.jsx";
import Technos from "../../components/technos/Technos.jsx";
import { useState, useEffect } from "react";

import Spinner from "../../components/spinner/Spinner.jsx";

function Apropos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <Intro />
          <Technos />
        </>
      )}
    </>
  );
}

export default Apropos;
