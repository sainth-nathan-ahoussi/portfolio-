import React, { useState } from 'react';
import './projects.css';

const projectData = [
    {
        title: "Start : The Beginning",
        description: "A game in coop with Stars",
        stacks: [""],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Labyrinth",
        description: "A game like Pacman but you have to escape through doors",
        stacks: ["Python"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Calculator",
        description: "",
        stacks: ["Java"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Password keeper",
        description: "",
        stacks: ["javascript"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Note Taking",
        description: "",
        stacks: [""],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Number Guesser",
        description: "A game where you proprose a number and it's says to you more or less",
        stacks: ["Python"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Private Teacher",
        description: "A quote generator to use whan you want to style your Instagram Post",
        stacks: ["Java"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Quote Generator",
        description: "A quote generator to use whan you want to style your Instagram Post",
        stacks: ["Java"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Snake",
        description: "A snake game playable on PC",
        stacks: ["C++"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Following Payment",
        description: "An app to follow all of my payment in real time",
        stacks: [""],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Artificial recognition Bridge Card",
        description: "Real Time Bridge card detection",
        stacks: ["Python", "YOLO", "Google Collab"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Age Calculator",
        description: "Age Calculator so people can know there age",
        stacks: ["Python", "Tkinter"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Cultura",
        description: "A general cultur quizz to play with your family or friend like KCultur",
        stacks: ["C++"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Element Modificator",
        description: "An app to directly remove all occurences of a letter, character or all from a file.",
        stacks: ["Python", "Tkinter"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Ultron",
        description: "A real time artificial intelligence like Ultron in the Marvel Movie.",
        stacks: ["Python", "YOLO"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Artificial recognition Sign Language",
        description: "Real Time french sign language  detection",
        stacks: ["Python", "YOLO", "Google Collab"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
    },
    {
        title: "Mathsmon",
        description: "Jeu pokemon yant pour but d'apprendre les mathématiques à des utilisateurs allant de primaire au lycée",
        stacks: ["Unreal Ungine", "C#", "ShaderLab","HTML","HLSL"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Mathsmon",
    },
    {
        title: "Tic Tac Toe",
        description: "",
        stacks: ["Python"],
        image: "path-to-ayeHigh-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Trello_Lite",
    },
    {
        title: "WeatherApp",
        description: "",
        stacks: ["Javascript"],
        image: "path-to-ayeHigh-image.jpg",
        githubLink: "",
    },
    {
        title: "Trello Lite",
        description: "Reproduction Minimal de l'application de gestion et d'organisation d'équipe Trello",
        stacks: ["Java"],
        image: "path-to-ayeHigh-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Trello_Lite",
    },
    {
        title: "To Do List",
        description: "Reproduction Minimal de l'application de gestion et d'organisation d'équipe Trello",
        stacks: [""],
        image: "path-to-ayeHigh-image.jpg",
        githubLink: "",
    },
    {
        title: "Mario",
        description: "Simplifying how you start your SaaS journey with the best stack for building profitable web apps.",
        stacks: ["C", "C++", "Shell","CMake","M4"],
        image: "path-to-ninetails-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Mario",
    },
    {
        title: "Projets C#",
        description: "A list of activity i made in C#",
        stacks: ["C#"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_C-",
    },
    {
        title: "Pizzeria",
        description: "We had to make a website and an app for a pizzeria with all the important fonctionnalities (Cart,Command,Like etc)",
        stacks: ["Java","PHP","HTML","CSS","UML"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Pizzeria/tree/main",
    },
    {
        title: "Tokyo Revengers",
        description: "We had to make a data base for a serie or a movie we liked and we choosed Tokyo Revengers ",
        stacks: ["SQL"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_BD_Anime",
    },
    {
        title: "Game cards",
        description: "We had to make a magic cards game in the console in C++ ",
        stacks: ["C++","Makefile"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_JeuCarte",
    },
    {
        title: "Projects Java",
        description: "A regroupement of Java exercices I made ",
        stacks: ["Java"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Java",
    },
    {
        title: "Entreprise Database",
        description: "We had to make a data base for an company of our choice ",
        stacks: ["SQL"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_BD_Entreprise",
    },
    {
        title: "Merve",
        description: "A video game were you do hanged but in 1 versus 1 ",
        stacks: ["NodeJs","React","CSS"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Merve",
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("");

    const filteredProjects = filter
        ? projectData.filter(project =>
            project.stacks.some(stack => stack.toLowerCase().includes(filter.toLowerCase()))
          )
        : projectData;

    const openFilterMenu = () => {
        alert("Filter menu functionality to be implemented!");
    };

    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <p className="projects-description">
                Welcome to my project page !  <br /> 
                Here you can explore a collection of my work, including web apps, AI projects, and much more made in school, work or even for myself  <br /> 
                Use the search or filtering options to find projects based on your language interests.<br /> 
                <br /> 
                <br /> 
                Take a look and if you find my work great and you would like to colab to make one of your idea come to live, don't mind contacting me.<br /> 
                And if you just want to support my work or my dream you can donate the amount you want in total security.
            </p>

            <div className="projects-controls">
                <input
                    type="text"
                    className="stack-filter"
                    placeholder="Recherchez par stack (ex: React, Python...)"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <button className="filter-button" onClick={openFilterMenu}>
                    Filter Options
                </button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <a
                        key={index}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <div className="project-stacks">
                                {project.stacks.map((stack, i) => (
                                    <span key={i} className="stack">{stack}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
