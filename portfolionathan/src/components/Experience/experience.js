import React, { useEffect } from 'react';
import './experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
    {
        title: "Internship - IT SIRH Employee Experience Analyst and Developpment.",
        date: "February - Mars 2026 ",
        Entreprise:"Michelin (Clermont-Ferrand)",
        Logo:"https://media.licdn.com/dms/image/v2/D4D0BAQEZ8x7ezlOdEw/company-logo_200_200/company-logo_200_200/0/1707743589225/fondation_dentreprise_michelin_logo?e=2147483647&v=beta&t=XgzSKNeW6JOUNOSNnLAy2YiqHv-Nk7qrtLQbUmMEXKM",
        description: [
            "- Analysis and presentation of the R1 2026 release for the Workday Michelin teams and country stakeholders.",
            "- Development of a multilingual Power Apps decision-support tool, integrated with Microsoft Lists and deployed on Microsoft SharePoint for Michelin SP and C&B teams.",
            "- Participation in Innovation Labs focused on the creation of an AI Agent using Flowise and Extend, including the delivery of a Proof of Concept (POC).",
            "- React development of a widget displaying Workday training content within an Employee Space."
        ]
    },
    {
        title: "Internship - Web Developer ",
        date: "June - August 2024",
        Entreprise: "SINGA (Paris)",
        Logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLCJrtK6jgBouHotuLNlkBjTWfz5LYXT8NA&s",
        description: [
            "- Diagnosis and prototyping for the Maison des Réfugiés new website",
            "- Inventory and update of Singa’s IT equipment and digital tools",
            "- Creation of a Notion directory website to showcase incubated projects",
            "- Development and automation of a program to generate folder tree structures for files stored in Google Drive",
            "- Analysis, wireframing, and development of a V1 version of the website for the Voix en Exil program"
        ]
    },
    {
        title: "Internship - IT Technician Assistant",
        date: "January - Mars 2019 ",
        Entreprise:"INFOTECH (Mayotte)",
        Logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3OBiLsREjjnF6gFpYv2ECDUKkie0Aghy4w&s",
        description: [
            "- Customer reception and sales of IT services",
            "- Handling of orders and appointment scheduling",
            "- Organization and management of client files",
            "- Assistance with the repair of IT equipment"
        ]
    }
];
const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section id="experience-section" className="experience-timeline">
            <h2>IT Professional Experiences</h2>
            <h5>This section presents all the internships and apprenticeships I have completed throughout my IT career.</h5>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div 
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
                        key={index}
                        data-aos="fade-up"
                    >
                        <div className="timeline-content">
                             <span>
                                <img src={exp.Logo} width="50" height="50"/>
                            </span>
                            <h3>{exp.title}</h3>
                            <h4>{exp.Entreprise}</h4>
                            <span className="date">{exp.date}</span>
                            <br />
                            <br />
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