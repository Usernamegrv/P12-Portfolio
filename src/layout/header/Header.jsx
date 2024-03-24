import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header className="header">
      <div className="mg">
        {!isHomePage && (
          <h1>
            Morgane Gervois <br></br> <span>Développeuse Web & Mobile</span>
          </h1>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">à propos</Link>
          </li>
          <li>
            <Link to="/projects">projets</Link>
          </li>
          <li>
            <a href="mailto:morganegrvcontact@gmail.com">contact</a>
          </li>
          <li>
            <a
              href="https://github.com/Usernamegrv"
              rel="noopener"
              target="_blank"
            >
              <img
                src="./github-mark.png"
                id="github-icone"
                alt="Logo github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/morgane-gervois-a85ba820a "
              rel="noopener"
              target="_blank"
            >
              <img src="./linkedin.png" alt="Logo Linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
