import React from 'react';
import './footer.css';
import MonLogoImage from '../../Images/LogoCorner.png';
import GithubImage from '../../Images/github.png';
import TwitterImage from '../../Images/twitter.png';
import linkedinImage from '../../Images/linkedin.png';

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
                        <div className="github"><a href=""><img src={GithubImage} alt="GitHub" /></a></div>
                        <div className="twitter"><a href=""><img src={TwitterImage} alt="Twitter" /></a></div>
                        <div className="linkedin"><a href=""><img src={linkedinImage} alt="LinkedIn" /></a></div>
                    </div>
                    
                    <div className="logo2"><a href=""><img src={MonLogoImage} alt="Logo" /></a></div>
                    <div className="mail"><p>nathanahoussi502@gmail.com</p></div>
                </div>

                <div className="grillefooterMenu">
                    <div className="Pres"><a href=""><span className="highlight">Qui-je suis ?</span></a></div>
                    <div className="Proj"><a href="">Mes Projets</a></div>
                    <div className="Exp"><a href="">Mes Expériences</a></div>
                </div>
            </div>
            <p>2024 - Sainth-Nathan Ahoussi’s Developer Portfolio. France © All rights reserved. Private policy.</p>
        </footer>
    );
};

export default Footer;
