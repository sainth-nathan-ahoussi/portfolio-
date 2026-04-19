import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
            <link href='https://fonts.googleapis.com/css?family=Inknut Antiqua' rel='stylesheet'></link>
            <div className="container">     
                <div className="navbar">
                    <div className="logo">   
                        <Link to="/"><img src={MonLogoImage} alt="Logo" /></Link>
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </div>
                    <nav className={menuOpen ? 'active' : ''}>
                        <ul>
                            <li><HashLink to="/#presentation-section"><span className="highlight">Who I am ?</span></HashLink></li>
                            <li><Link to="/projects">My Projects</Link></li>
                            <li><HashLink to="/#experience-section">My Experiences</HashLink></li>
                            <li><Link to="/">My Certifications</Link></li>
                        </ul>    
                    </nav>   
                </div>
                <div className="row">
                    <div className="col"> 
                        <div className="glitch">
                            <h1>SAINTH-NATHAN</h1>
                        </div>
                            <h3><i>Try everything to regret nothing ! </i></h3>
                        <button type="button"><HashLink to="/#experience-section">Learn More</HashLink></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
