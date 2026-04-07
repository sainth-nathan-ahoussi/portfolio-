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
            <link href='https://fonts.googleapis.com/css?family=Handjet' rel='stylesheet'></link>
            <div className="container">     
                <div className="navbar">
                    <div className="logo">   
                        <Link to="/mainPage"><img src={MonLogoImage} alt="Logo" /></Link>
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </div>
                    <nav className={menuOpen ? 'active' : ''}>
                        <ul>
                            <li><a href="/mainPage#presentation-section"><span className="highlight">Who I am ?</span></a></li>
                            <li><Link to="/projects">My Projects</Link></li>
                            <li><a href="/mainPage#experience-section">My Experiences</a></li>
                            <li><a href="">My Certifications</a></li>
                        </ul>    
                    </nav>   
                </div>
                <div className="row">
                    <div className="col"> 
                        <h1>NATHAN</h1>
                            <h3><i>Try everything to regret nothing ! </i></h3>
                        <button type="button"><a href="#presentation-section">Learn More</a></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
