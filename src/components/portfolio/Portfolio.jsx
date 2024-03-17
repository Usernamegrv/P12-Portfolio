import { useEffect, useState } from "react";
import "./Portfolio.scss";
import projectsData from "../../projets.json";
function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <>
      <h2 id="portfolio-title">Projets</h2>
      <section id="portfolio">
        <div id="portfolio-container">
          {projects.map((project, index) => (
            <div key={index} className="row">
              <a href={project.url} target="_blank">
                <div className="project-card card">
                  <div
                    className="wrapper"
                    style={{
                      background: `url('${project.image}') 50% 1% / cover no-repeat`,
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
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
