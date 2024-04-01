import PropTypes from "prop-types";

import "./Modal.scss";
import Slider from "../slider/Slider.jsx";

function Modal({ project, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-background">
        <div className="modal">
          <div className="xmark">
            <img src="./xmark.svg" className="close" onClick={onClose} />
          </div>
          <div className="slider-section">
            <Slider images={project.images} />
          </div>
          <h2>{project.title}</h2>
          {/* <p>{project.description}</p> */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button button"
          >
            <span> Voir le projet </span>
          </a>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
