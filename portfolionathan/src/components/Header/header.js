import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import MonLogoImage from '../../Images/LogoCorner.png';

const Header = () => {
    return (
        <header className="header">
            <div class="container">     
                <div className="navbar">
                    <div className="logo">   
                        <img src={MonLogoImage} alt="Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li className="Presentation"><a href="#presentation-section"><span className="highlight">Who I am ?</span></a></li>
                            <li><Link to="/projects">My Projects</Link></li>
                            <li><a href="#experience-section">My Experiences</a></li>
                        </ul>    
                    </nav>   
                </div>
                <div className="row">
                    <div className="col"> 
                        <h1>NATHAN</h1>
                        <h3>" Toujours tout tenter pour n'avoir rien n'a regretter "</h3>
                        <button type="button"><a href="#presentation-section">Learn More</a></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
