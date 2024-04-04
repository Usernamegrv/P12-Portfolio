import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div className="error-container">
      <h2 className="error-title">404</h2>
      <p className="error-content"> Oops! Une erreur s&apos;est produite.</p>
      <Link to="/home" className="retour-home">
        Retour accueil
      </Link>
    </div>
  );
}

export default Error;
