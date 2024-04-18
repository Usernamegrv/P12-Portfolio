// import { useEffect } from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="mg">
        <h2>
          Morgane Gervois <br />
          <span>Développeuse Web & Mobile</span>
        </h2>
      </div>

      <p>
        Site made with
        <img src="./react.png" alt="logo react" className="logo-react-footer" />
        &
        <img
          src="./vitejs.png"
          alt="logo vite.js"
          className="logo-vite-footer"
        />
      </p>
    </footer>
  );
}

export default Footer;
