import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
import MonLogoImage from '../../Images/LogoCorner.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container">     
                <div className="navbar">
                    <div className="logo">   
                        <Link to="/mainPage"><img src={MonLogoImage} alt="Logo" /></Link>
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        ☰ {/* Icone pour le menu burger */}
                    </div>
                    <nav className={menuOpen ? 'active' : ''}>
                        <ul>
                            <li><a href="#presentation-section"><span className="highlight">Who I am ?</span></a></li>
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
