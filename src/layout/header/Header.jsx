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
            Morgane Gervois <br></br>
            <span>Développeuse Web & Mobile</span>
          </h1>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <a href="mailto:morganegrvcontact@gmail.com">contact</a>
          </li>

          <li>
            <a
              href="https://github.com/Usernamegrv"
              rel="noopener"
              target="_blank"
              className="github-link"
            >
              <img
                src="./github-black.svg"
                id="github-icone-black"
                alt="Logo github"
              />
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
                src="./linkedin-black.svg"
                id="linkedin-logo-black"
                alt="Logo Linkedin"
              />
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
