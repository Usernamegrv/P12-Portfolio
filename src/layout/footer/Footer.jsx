import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <h1>
        Morgane Gervois <span>Développeuse Web & Mobile</span>
      </h1>

      <nav>
        <ul>
          <li>
            <a href="#portfolio-title">projets</a>
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
                src="/github-mark.png"
                id="github-icone"
                alt="icone github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/morgane-gervois-a85ba820a "
              rel="noopener"
              target="_blank"
            >
              <img src="/linkedin.png" alt="Logo Linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
