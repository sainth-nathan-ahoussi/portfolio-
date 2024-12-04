import React from 'react';
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
                            <li className="Presentation"><a href=""><span className="highlight">Qui-je suis ?</span></a></li>
                            <li><a href="">Mes Projets</a></li>
                            <li><a href="">Mes Expériences</a></li>
                        </ul>    
                    </nav>   
                </div>
                <div className="row">
                    <div className="col"> 
                        <h1>NATHAN</h1>
                        <h3>" Toujours tout tenter pour n'avoir rien n'a regretter "</h3>
                        <button type="button">Learn More</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
