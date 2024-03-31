import "./Skills.scss";

function Skills() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src="./python.png" alt="logo python" />
        <img src="./javascript.png" alt="logo javascript" />
        <img src="./react.png" alt="logo react" />
        <img src="./CSS3.png" alt="logo css3" />
        <img src="./sass.png" alt="logo sass" />
        <img src="./html5.png" alt="logo html" />
      </div>
      <div className="bar learning" data-skill="Python"></div>

      <div className="bar back intermediate" data-skill="JAVASCRIPT"></div>
      <div className="bar back intermediate" data-skill="REACT"></div>
      <div className="bar front advanced" data-skill="CSS3"></div>
      <div className="bar front advanced" data-skill="SASS"></div>
      <div className="bar front expert" data-skill="HTML5"></div>
    </div>
  );
}

export default Skills;
