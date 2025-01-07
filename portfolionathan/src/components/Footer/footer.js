import React from 'react';
import './footer.css';
import MonLogoImage from '../../Images/LogoCorner.png';
import GithubImage from '../../Images/github.png';
import TwitterImage from '../../Images/twitter.png';
import linkedinImage from '../../Images/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerMenu">
                <div className="grilleReseau">
                    <div className="message">
                        <p>
                            Feel Free to contact me.<br />
                            I’m actually looking for an internship
                        </p>
                    </div>
                    <div className="listeLogo">
                        <div className="github"><a href="https://github.com/sainth-nathan-ahoussi"><img src={GithubImage} alt="GitHub" /></a></div>
                        <div className="twitter"><a href=""><img src={TwitterImage} alt="Twitter" /></a></div>
                        <div className="linkedin"><a href="https://www.linkedin.com/in/sainth-nathan-ahoussi-526412279/"><img src={linkedinImage} alt="LinkedIn" /></a></div>
                    </div>
                    
                    <div className="logo2"><Link to="/main"><img src={MonLogoImage} alt="Logo" /></Link></div>
                    <div className="mail"><p>nathanahoussi502@gmail.com</p></div>
                </div>

                <div className="grillefooterMenu">
                    <div className="Pres"><a href="#presentation-section"><span className="highlight">Who I am ?</span></a></div>
                    <div className="Proj"><Link to="/projects">My Projects</Link></div>
                    <div className="Exp"><a href="#experience-section">My Experiences</a></div>
                </div>
            </div>
            <p>2024 - Sainth-Nathan Ahoussi’s Developer Portfolio. France © All rights reserved. Private policy.</p>
        </footer>
    );
};

export default Footer;
