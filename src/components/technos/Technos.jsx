import { useEffect, useState } from "react";
import "./Technos.scss";

export default function Technos() {
  const [technos, setTechnos] = useState([]);

  useEffect(() => {
    fetch("/technos.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnos(data);
      })
      .catch((error) => console.error("error fetching data;", error));
  }, []);
  return (
    <section id="technos">
      <h2>Technos</h2>
      <div id="images-tech">
        {technos.map((techno, index) => (
          <figure key={index}>
            <img
              src={techno.image}
              alt={`logo ${techno.techno}`}
              id={`logo-${techno.techno.toLowerCase()}`}
            />
            <p>{techno.techno}</p>
          </figure>
        ))}
      </div>
    </section>
  );
}
