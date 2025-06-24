import React, { useState } from 'react';
import './projects.css';
import ChurchImage from '../../Images/Projets/Church.jpg';
import DoctorImage from '../../Images/Projets/11thDoctor.jpg';
import AirKnightImage from '../../Images/Projets/AirKnight.jpg';
import BeybladeImage from '../../Images/Projets/beyblade.jpg';
import CalculatriceImage from '../../Images/Projets/calculatrice.png';
import ChessSetImage from '../../Images/Projets/ChessSet.jpg';
import DwashImage from '../../Images/Projets/Dwash.jpg';
import LabyrinthImage from '../../Images/Projets/Labyrinth.jpg';
import MarioImage from '../../Images/Projets/mario.jpg';
import MazeRunnerImage from '../../Images/Projets/mazeRunner.jpg';
import NumberGuesserImage from '../../Images/Projets/NumberGuesser.jpg';
import PizzeriaImage from '../../Images/Projets/pizzeria.jpg';
import RealSteelImage from '../../Images/Projets/Realsteel-1.jpg';
import SignLanguageImage from '../../Images/Projets/signlanguage.png';
import SnakeImage from '../../Images/Projets/snake.jpg';
import TicTacToeImage from '../../Images/Projets/Tic_tac_toe.svg.png';
import TrelloLogoImage from '../../Images/Projets/Trello-Logo.png';
import UltronImage from '../../Images/Projets/ultron.jpeg';
import WalletImage from '../../Images/Projets/wallet.jpg';
import WattpadImage from '../../Images/Projets/Wattpad.jpg';
import WeatherImage from '../../Images/Projets/weather.jpg';
import WeddingHallImage from '../../Images/Projets/weddingHall.jpg';
import TodolistImage from '../../Images/Projets/todolist.png';
import JavaImage from '../../Images/Projets/java.png';
import NoteTakerImage from '../../Images/Projets/notetaking.jpg';
import CSharpImage from '../../Images/Projets/CSharpLogo.png';
import FindYourWayImage from '../../Images/Projets/oneWay.jpg';
import AgeCalculatorImage from '../../Images/Projets/Age-Calculator.png';
import ChangeImage from '../../Images/Projets/Change.jpg';
import CulturaImage from '../../Images/Projets/knowledge.jpg';
import MagicCardsImage from '../../Images/Projets/magicCards.avif';
import QuoteGeneratorImage from '../../Images/Projets/quotegenerator.jpg';
import TokyoRevengersImage from '../../Images/Projets/tokyorevengers.jpg';
import BridgeImage from '../../Images/Projets/BridgeBlog.jpg';
import EntrepriseImage from '../../Images/Projets/entreprise.jpeg';
import MarioOdisseyImage from '../../Images/Projets/marioOdissey.jpg';
import PrivateTeacherImage from '../../Images/Projets/privateTeacher.jpeg';
import MathsmonImage from '../../Images/Projets/mathsmon.png';
import DevWrappedImage from '../../Images/Projets/0_Spotify-Wrapped.webp';


const projectData = [
    {
        title: "Web Sémantique",
        description: "",
        stacks: ["React","CSS","NodeJS","Javascript"],
        image: ChurchImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Web_Semantique",
        status: "Finished",
    },
    {
        title: "PVP Chess",
        description: "A chess game in pvp where each piece have a number of damage it can make and you can win by betting your oppenent or by making a sufficient number of damage in time.",
        stacks: [""],
        image: ChessSetImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Beyblade Spinning top",
        description: "The name says a lot, its this time real electromagnetic toupies that stack up energy with the force of the throw",
        stacks: [""],
        image: BeybladeImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Maze Runner",
        description: "A survival Multiplayer Game in a maze like in the movie.",
        stacks: ["Unreal Ungine","C#"],
        image: MazeRunnerImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "WattPad Bis",
        description: "An app to rivalise with Wattpad but with creteria",
        stacks: [""],
        image: WattpadImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "AirKnight",
        description: "A team fps game in the air with shooting drones",
        stacks: ["Unreal Ungine","C#"],
        image: AirKnightImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Stocking Cards",
        description: "The app that stock in the same place all your card",
        stacks: ["Symphony"],
        image: WalletImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Find Your Way",
        description: "The app that help people find their local church and it's a network for the Christian community",
        stacks: ["React","NodeJS","CSS","HTML"],
        image: FindYourWayImage,
        githubLink: "",
        status: "In Progress",
    }, 
    {
        title: "Wedding Hall ",
        description: "The app that help people find their Dream Wedding hall",
        stacks: ["Symphony"],
        image: WeddingHallImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Dwash",
        description: "The app that help all the student reserve their washing machine",
        stacks: ["React","NodeJS","CSS","HTML"],
        image: DwashImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Doctor Who SONIC SCREWDRIVER",
        description: "The goal is to re-create a SONIC SCREWDRIVER in real life",
        stacks: [""],
        image: DoctorImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Projet Real Steel",
        description: "The goal is to create controlable robot like in the movie to make them fight",
        stacks: [""],
        image: RealSteelImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Dev Wrapped",
        description: "A VsCode extension that give your a recap each year or month of your progration in coding",
        stacks: ["Typescript","Javascript"],
        image: DevWrappedImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Dev-Wrapped",
        status: "In Progress",
    },
    {
        title: "Stars : The Beginning",
        description: "A game in coop with Stars",
        stacks: [""],
        image: MarioOdisseyImage,
        githubLink: "",
        status: "In Progress",
    },
    {
        title: "Labyrinth",
        description: "A game like Pacman but you have to escape through doors",
        stacks: ["Python"],
        image: LabyrinthImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Calculator",
        description: "",
        stacks: ["Java"],
        image: CalculatriceImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Password Keeper",
        description: "",
        stacks: ["javascript"],
        image: "path-to-ayeSoul-image.jpg",
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Note Taking",
        description: "",
        stacks: [""],
        image: NoteTakerImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Number Guesser",
        description: "A game where you proprose a number and it's says to you more or less",
        stacks: ["Python"],
        image: NumberGuesserImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/NumberGuesser",
        status: "Finished",
    },
    {
        title: "Private Teacher",
        description: "An app to connect teacher to student ",
        stacks: ["Java"],
        image: PrivateTeacherImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Quote Generator",
        description: "A quote generator to use whan you want to style your Instagram Post",
        stacks: ["Java"],
        image: QuoteGeneratorImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Snake",
        description: "A snake game playable on PC",
        stacks: ["C++"],
        image: SnakeImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Following Payment",
        description: "An app to follow all of my payment in real time",
        stacks: [""],
        image: "",
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Artificial recognition Bridge Card",
        description: "Real Time Bridge card detection",
        stacks: ["Python", "YOLO", "Google Collab"],
        image: BridgeImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Bridge_IA",
        status: "Finished",
    },
    {
        title: "Age Calculator",
        description: "Age Calculator so people can know there age",
        stacks: ["Python", "Tkinter"],
        image: AgeCalculatorImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/AgeCalculator",
        status: "Finished",
    },
    {
        title: "Cultura",
        description: "A general cultur quizz to play with your family or friend like KCultur",
        stacks: ["C++"],
        image: CulturaImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Element Modificator",
        description: "An app to directly remove all occurences of a letter, character or all from a file.",
        stacks: ["Python", "Tkinter"],
        image: ChangeImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/ModificateurTexte",
        status: "Finished",
    },
    {
        title: "Ultron",
        description: "A real time artificial intelligence like Ultron in the Marvel Movie.",
        stacks: ["Python", "YOLO"],
        image: UltronImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Artificial recognition Sign Language",
        description: "Real Time french sign language  detection",
        stacks: ["Python", "YOLO", "Google Collab"],
        image: SignLanguageImage,
        githubLink: "",
        status: "In Progress",
    },
    {
        title: "Mathsmon",
        description: "Jeu pokemon yant pour but d'apprendre les mathématiques à des utilisateurs allant de primaire au lycée",
        stacks: ["Unreal Ungine", "C#", "ShaderLab","HTML","HLSL"],
        image: MathsmonImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Mathsmon",
        status: "In Progress",
    },
    {
        title: "Tic Tac Toe",
        description: "",
        stacks: ["Python"],
        image: TicTacToeImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "WeatherApp",
        description: "",
        stacks: ["Javascript"],
        image: WeatherImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Trello Lite",
        description: "Reproduction Minimal de l'application de gestion et d'organisation d'équipe Trello",
        stacks: ["Java"],
        image: TrelloLogoImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Trello_Lite",
        status: "Finished",
    },
    {
        title: "To Do List",
        description: "Reproduction Minimal de l'application de gestion et d'organisation d'équipe Trello",
        stacks: [""],
        image: TodolistImage,
        githubLink: "",
        status: "On Hold",
    },
    {
        title: "Mario",
        description: "Recreate some part Mario and implements something new",
        stacks: ["C", "C++", "Shell","CMake","M4"],
        image: MarioImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Mario",
        status: "Finished",
    },
    {
        title: "Projets C#",
        description: "A list of activity i made in C#",
        stacks: ["C#"],
        image: CSharpImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_C-",
        status: "Finished",
    },
    {
        title: "Pizzeria",
        description: "We had to make a website and an app for a pizzeria with all the important fonctionnalities (Cart,Command,Like etc)",
        stacks: ["Java","PHP","HTML","CSS","UML"],
        image: PizzeriaImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Pizzeria/tree/main",
        status: "Finished",
    },
    {
        title: "Tokyo Revengers",
        description: "We had to make a data base for a serie or a movie we liked and we choosed Tokyo Revengers ",
        stacks: ["SQL"],
        image: TokyoRevengersImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_BD_Anime",
        status: "Finished",
    },
    {
        title: "Game cards",
        description: "We had to make a magic cards game in the console in C++ ",
        stacks: ["C++","Makefile"],
        image: MagicCardsImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_JeuCarte",
        status: "Finished",
    },
    {
        title: "Projects Java",
        description: "A regroupement of Java exercices I made ",
        stacks: ["Java"],
        image: JavaImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_Java",
        status: "Finished",
    },
    {
        title: "Entreprise Database",
        description: "We had to make a data base for an company of our choice ",
        stacks: ["SQL"],
        image: EntrepriseImage,
        githubLink: "https://github.com/sainth-nathan-ahoussi/Projet_BD_Entreprise",
        status: "Finished",
    },
    {
        title: "Merve",
        description: "A video game were you do hanged but in 1 versus 1 ",
        stacks: ["NodeJs","React","CSS"],
        image: "path-to-ayeDot-image.jpg",
        githubLink: "https://github.com/sainth-nathan-ahoussi/Merve",
        status: "On Hold",
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
                And if you just want to support my work or my dream you can donate the amount you want in total security in the end of the website.

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
                           <h2 className="project-title">
                                {project.title}
                                {project.status && (
                                    <span className={`project-status ${project.status.toLowerCase().replace(/\s/g, '-')}`}>
                                        {project.status}
                                    </span>
                                )}
                            </h2>
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
