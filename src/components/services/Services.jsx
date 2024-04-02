import "./Services.scss";
import PropTypes from "prop-types";

function Services() {
  function ServiceCard({ title, description, image }) {
    return (
      <div className="card-container">
        <div className="left"></div>
        <div className="right"></div>
        <div className="card">
          <div className="front">
            <div
              className="cover"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <p className="role">{title}</p>

            <div className="supporting_text">
              <span>{description}</span>
            </div>
          </div>
          <div className="back">
            <ul className="service-details">
              <li>
                <div className="mdi">
                  <span>MG</span>
                </div>
              </li>
              <li>
                <div className="mdi ">
                  <span>MG2</span>
                </div>
              </li>
              <li>
                <div className="mdi">
                  <span>MG3</span>
                </div>
              </li>
              <li>
                <div className="mdi ">
                  <span>MG4</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  const servicesData = [
    {
      title: "Optimisation",
      description: "I love to code and make stuff fly and spin.",
      image: "./seoo.svg",
    },
    {
      title: "Création de site web et mobile",
      description: "I love to code and make stuff fly and spin.",
      image: "./site-responsive.png",
    },
  ];

  return (
    <section className="services-section">
      <h2>Mes services</h2>
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </section>
  );
}

export default Services;
