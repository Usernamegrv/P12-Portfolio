import "./Tarifs.scss";

function Tarifs() {
  return (
    <section className="table-section">
      <table id="prices">
        <tbody>
          <tr>
            <td className="pricing-table">
              <h2>pack visibilité</h2>
              <h4>€399.99 HT</h4>
              <h5>Site vitrine ( 1 page )</h5>
              <p className="feature-list">
                Conception responsive pour une expérience utilisateur optimale
                sur tous les appareils
              </p>
              <p className="feature-list">
                Intégration de galeries d&apos;images pour présenter vos
                produits ou services
              </p>
              <p className="feature-list">
                Intégration des réseaux sociaux pour renforcer votre présence en
                ligne
              </p>

              <p className="feature-list">
                Optimisation du SEO pour améliorer votre visibilité sur les
                moteurs de recherche
              </p>
              <p className="feature-list">Fonctionnalités de base</p>
              <p className="feature-list">Assistance 8h/24, 5j/7*</p>
            </td>

            <td className="pricing-table popular">
              <h2>pack croissance</h2>
              <h3>Most Popular Package</h3>
              <h4>€699.99 HT</h4>
              <h5>Site vitrine, blog ( jusqu&apos;à 10 pages )</h5>
              <p className="feature-list">
                Toutes les fonctionnalités du pack visibilité
              </p>
              <p className="feature-list">
                Intégration d&apos;un blog pour partager des articles et des
                actualités pertinentes
              </p>
              <p className="feature-list">
                Système de gestion de contenu (CMS) pour mettre à jour
                facilement le contenu de votre site
              </p>
              <p className="feature-list">
                Système de newsletter, rappels automatiques, calendrier
                interactif pour afficher les événements à venir (conférences,
                webinaires, rdv..)
              </p>
              <p className="feature-list">Fonctionnalités avancées </p>
              <p className="feature-list">Assistance 16h/24, 6j/7*</p>
            </td>

            <td className="pricing-table premium">
              <h2>pack premium</h2>
              <h4>€999.99 HT</h4>
              <h5>Site E-commerce, plateforme ( jusqu&apos; à 20 pages )</h5>
              <p className="feature-list">
                Toutes les fonctionnalités des packs visibilité et croissance
              </p>
              <p className="feature-list">
                Mise en place d&apos;une boutique en ligne
              </p>
              <p className="feature-list">
                Intégration de systèmes de paiement sécurisés pour les
                transactions en ligne
              </p>
              <p className="feature-list">
                Tableau de bord administratif pour gérer efficacement votre site
                et vos ventes
              </p>
              <p className="feature-list">
                Fonctionnalités avancées de recherche et de filtrage
              </p>
              <p className="feature-list">Assistance 24h/24, 7j/7*</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Tarifs;
