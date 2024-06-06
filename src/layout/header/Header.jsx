import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className="header" id="header">
      <div className="mg">
        {!isHomePage && (
          <h1>
            Morgane Gervois <br />
            <span>Développeuse Web & Mobile</span>
          </h1>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="/about">à propos</Link>
          </li>
          <li>
            <Link to="/projects">portfolio</Link>
          </li>
          {/* <li>
            <Link to="/prices">prices</Link>
          </li> */}
          <li>
            <a href="mailto:gervois.contactpro@gmail.com">contact</a>
          </li>

          <li>
            <a
              href="https://github.com/Usernamegrv"
              rel="noopener"
              target="_blank"
              className="github-link"
            >
              <img
                src="./github-white.svg"
                id="github-icone-white"
                alt="Logo github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/morgane-gervois-a85ba820a "
              rel="noopener"
              target="_blank"
              className="linkedin-link"
            >
              <img
                src="./linkedin-white.svg"
                id="linkedin-logo-white"
                alt="Logo Linkedin"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
