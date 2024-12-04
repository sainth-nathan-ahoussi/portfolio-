import React from 'react';
import './newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter-image"></div> {/* Left column: Image */}
            <div className="newsletter-content"> {/* Right column: Content */}
                <h2>Abonnez-vous à notre Newsletter</h2>
                <p>
                    Restez informé des derniers projets, améliorations et actualités de mon portfolio ! En vous abonnant, vous serez les premiers à connaître les nouveaux projets, mises à jour et opportunités de collaboration.
                </p>
                <p>
                    N'hésitez pas à vous abonner, que vous soyez intéressé par une collaboration, une mission, ou que vous souhaitiez simplement rester informé. Soutenez mon travail via la <a href="#support-page">Page de Soutien</a>.
                </p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Entrez votre e-mail" required />
                    <div className="consent">
                        <input type="checkbox" id="consent" required />
                        <label htmlFor="consent">
                            En entrant votre e-mail, vous acceptez de recevoir cette newsletter. Vous pouvez vous désabonner à tout moment. Consultez notre <a href="#privacy-policy">Politique de Confidentialité</a>.
                        </label>
                    </div>
                    <button type="submit">S'abonner</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
