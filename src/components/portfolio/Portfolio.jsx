import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import "./Portfolio.scss";
import Spinner from "../spinner/Spinner.jsx";

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("projets.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setShowCards(data.map(() => false));
        setIsLoading(true);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  const data = projects;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setShowCards(data.map(() => true));
    }, 1000);
  });

  const openModal = (index) => {
    setSelectedProject(projects[index]);
  };
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <section id="portfolio">
          <div id="portfolio-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`row ${showCards[index] ? "show" : ""}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onAnimationEnd={() =>
                  setShowCards((prevState) =>
                    prevState.map((val, i) => (i === index ? true : val))
                  )
                }
                onClick={() => openModal(index)}
              >
                <div className="project-card card">
                  <div
                    className="wrapper"
                    style={{
                      background: `url('${project.logo}') 50% 50% / cover no-repeat `,
                    }}
                  >
                    <div className="container-techno">
                      <span className="techno">{project.techno}</span>
                    </div>
                    <div className="data">
                      <div className="content">
                        <span className="date">{project.date}</span>
                        <h2 className="title">{project.title}</h2>
                        <p className="text">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Portfolio;
