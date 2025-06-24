import React from 'react';
import './mentionslegale.css';

const LegalMentions = () => {
    return (
        <div  className="legal-container">
            <h1>Mentions légales</h1>

            <h2>Éditeur du site</h2>
            <p>
                Nom : Ahoussi Nathan<br />
                Statut : Étudiant<br />
                Email : <a href="mailto:nathanahoussi502@gmail.com">nathanahoussi502@gmail.com</a><br />
                Adresse : 2 rue du Languedoc 91300 MASSY
            </p>

            <h2>Hébergeur du site</h2>
            <p>
                Alwaysdata - SARL au capital de 200 000 €<br />
                RCS Paris : 492 893 490 - TVA : FR66492893490<br />
                Siège social : 91 rue du Faubourg Saint-Honoré, 75008 Paris<br />
                Téléphone : +33 1 84 16 23 40<br />
                Directeur de la publication : M. Nicolas Ferrari
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
                Le contenu du site (textes, logo, photo personnelle, logo de l'entreprise fictive) est protégé par le droit d’auteur. Les autres images sont utilisées sous licence ou proviennent de sources libres de droit.
            </p>

            <h2>Cookies & données personnelles</h2>
            <p>
                Ce site peut collecter des données techniques comme votre adresse IP à des fins de démonstration de compétences techniques en réseau et cybersécurité. Ces données sont conservées pendant 30 jours maximum puis supprimées ou anonymisées.
                <br /><br />
                Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à : <a href="mailto:nathanahoussi502@gmail.com">nathanahoussi502@gmail.com</a>.
            </p>

            <h2>Contact</h2>
            <p>
                Pour toute question ou exercice de vos droits, vous pouvez me contacter à l’adresse ci-dessus.
            </p>
        </div>
    );
};

export default LegalMentions;
