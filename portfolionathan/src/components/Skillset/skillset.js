import React from 'react';
import './skillset.css';

const Skillset = () => {
    return (
        <section className="skillset">
            <h4>Skillset</h4>
            <p>Les compétences suivantes reflètent l'expertise et les savoir-faire développés au fil de mon parcours professionnel et académique, couvrant divers domaines essentiels à la réussite de mes missions.</p>
            <div className="skills-container">
                <div className="column">
                    <p>Persévérance</p>
                    <p>Esprit Critique</p>
                    <p>Curiosité</p>
                    <p>Autonomie</p>
                    <p>Pensée Analytique</p>
                </div>
                <div className="divider"></div>
                <div className="column">
                    <p>Esprit d'équipe</p>
                    <p>Adaptabilité</p>
                    <p>Communication</p>
                    <p>Prise de décision</p>
                    <p>Ordonné</p>
                </div>
                <div className="divider"></div>
                <div className="column">
                    <p>Polyvalence</p>
                    <p>Forte Tenacité</p>
                    <p>Bonne Compréhension</p>
                    <p>Rigueur</p>
                    <p>Multitâche</p>
                </div>
            </div>
        </section>
    );
};

export default Skillset;
