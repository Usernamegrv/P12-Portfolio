import "./Skills.scss";

function Skills() {
  return (
    <div className="container">
      <div className="logo-container">
        <img
          src="./wordpress.png"
          alt="logo wordpress"
          className="logo-wordpress"
        />
        <img
          src="./javascript.png"
          alt="logo javascript"
          className="logo-javascript"
        />
        <img src="./react.png" alt="logo react" className="logo-react" />
        <img src="./CSS3.png" alt="logo css3" className="logo-css" />
        <img src="./sass.png" alt="logo sass" className="logo-sass" />
        <img src="./html5.png" alt="logo html" className="logo-html" />
      </div>
      <div className="bar back intermediate" data-skill="WORDPRESS"></div>
      <div className="bar back intermediate" data-skill="JAVASCRIPT"></div>
      <div className="bar back intermediate" data-skill="REACT-VITE"></div>
      <div className="bar front advanced" data-skill="CSS3"></div>
      <div className="bar front advanced" data-skill="SASS"></div>
      <div className="bar front expert" data-skill="HTML5"></div>
    </div>
  );
}

export default Skills;
