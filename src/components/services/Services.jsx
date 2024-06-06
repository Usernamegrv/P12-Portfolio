import "./Services.scss";
import PropTypes from "prop-types";

function Services() {
  function ServiceCard({ title, description, image, details }) {
    return (
      <>
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
              {details.map((detail, index) => (
                <li key={index}>
                  <div className="mdi">
                    <span>{detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }

  ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const servicesData = [
    {
      title: "Optimisation SEO",
      description:
        "Améliorez votre positionnement grâce au référencement naturel.",
      image: "./seoo.svg",
      details: [
        "🔍 Analyse et optimisation SEO",
        "🚀 Optimisation des fonctionnalités",
        "📝 Conseils personnalisés pour maximiser votre visibilité en ligne",
      ],
    },
    {
      title: "Maintenance et support technique",
      description:
        "Assurez-vous que votre site reste opérationnel et sécurisé.",
      image: "./maintenance3.png",
      details: [
        "🔄 Mises à jour régulières du contenu, des plugins et de la sécurité",
        "🛡️ Surveillance proactive pour détecter et résoudre les problèmes",
        "🛠️ Support technique rapide et efficace en cas d'urgence",
      ],
    },
    {
      title: "Création de site web et mobile",
      description:
        "Développez une présence en ligne unique et adaptée à vos besoins.",
      image: "./creationsite.png",
      details: [
        "💻 Conception et développement sur mesure pour répondre à vos spécifications",
        "➕ Intégration de fonctionnalités avancées et d'une interface utilisateur intuitive",
        "📱 Comptabilité mobile pour une accéssibilité maximale sur tous les appareils",
      ],
    },
  ];

  return (
    <section className="services-section">
      <h2>Mes services</h2>
      <div className="cards-wrapper">
        {servicesData.map((service, index) => (
          <div className="card-container" key={index}>
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              details={service.details}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
