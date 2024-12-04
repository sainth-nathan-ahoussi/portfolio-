import React, { useEffect } from 'react';
import './experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
    {
        title: "Stage - Infotech Mayotte",
        date: "2018 - 2019",
        description: [
            "Accueil et vente au client",
            "Prise des commandes et des rendez-vous",
            "Organisation des dossiers"
        ]
    },
    {
        title: "Tremplin Citoyen - Association BB Players Viry Chatillon",
        date: "2020 - 2021",
        description: [
            "Animation de groupe d'enfants (7-11 ans)",
            "Détection de talent",
            "Mission de secrétariat"
        ]
    },
    {
        title: "Job Étudiant - Somaco Mayotte",
        date: "2021 - 2022",
        description: [
            "Encaissement",
            "Mise en rayon",
            "Préparation des commandes"
        ]
    },
    {
        title: "Job Étudiant - Auchan Retail Chilly Mazarin",
        date: "Juillet - Février 2023",
        description: [
            "Préparation des commandes",
            "Tri de produit"
        ]
    },
    {
        title: "Stage - Singa Paris",
        date: "Juin - Août 2024",
        description: [
            "Diagnostic et prototypage du site web de la Maison des Réfugiés",
            "Inventaire du matériel et des outils informatiques de Singa",
            "Création d'un répertoire Notion pour les projets incubés",
            "Développement et automatisation d’un programme de génération de structure arborescente",
            "Analyse et programmation d’une version V1 pour le site web du programme Voix en Exil"
        ]
    }
];
const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="experience-timeline">
            <h2>Expériences Professionnelles</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div 
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
                        key={index}
                        data-aos="fade-up"
                    >
                        <div className="timeline-content">
                            <span className="date">{exp.date}</span>
                            <h3>{exp.title}</h3>
                            <ul>
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;