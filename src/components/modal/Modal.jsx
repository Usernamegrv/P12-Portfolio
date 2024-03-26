import PropTypes from "prop-types";
import "./Modal.scss";

function Modal({ project, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-background">
        <div className="modal">
          <span className="close" onClick={onClose}>
            {" "}
            X{" "}
          </span>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
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
