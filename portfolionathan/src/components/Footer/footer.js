import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
             <link href='https://fonts.googleapis.com/css?family=Handjet' rel='stylesheet'></link>
              <link href='https://fonts.googleapis.com/css?family=Inknut Antiqua' rel='stylesheet'></link>
             <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
            <div className="footerMenu">
                <div className="grilleReseau">
                    <div className="message">
                        <p>
                            Feel Free to contact me.
                            <br />
                            <br />
                            I’m actually looking for an Apprenticeship
                        </p>
                    </div>
                    <div className="listeLogo">
                        <div className="github"><a href="https://github.com/sainth-nathan-ahoussi"><i class="fab fa-github icon"></i></a></div>
                        <div className="twitter"><a href="https://youtube.com/@parolesprogrammees?si=7YOQDvIviRPCkua8"><i class="fab fa-youtube icon"></i></a></div>
                        <div className="linkedin"><a href="https://www.linkedin.com/in/sainth-nathan-ahoussi"><i class="fab fa-linkedin-in icon"></i></a></div>
                        <div className="linkedin"><a href="https://www.paypal.me/AhoussiNathan"><i class="fab fa-paypal icon"></i></a></div>
                    </div>
                </div>
                <div className="grillefooterMenu">
                    <div className="Pres"><a href="/mainPage#presentation-section"><span className="highlight">Who I am ?</span></a></div>
                    <div className="Proj"><Link to="/projects">My Projects</Link></div>
                    <div className="Exp"><a href="/mainPage#experience-section">My Experiences</a></div>
                    <div className="Proj"><Link to="">My Certifications</Link></div>
                </div>
            </div>

            <p>2026 - Sainth-Nathan Ahoussi’s Developer Portfolio. France © All rights reserved. Private policy.</p>
        </footer>
    );
};

export default Footer;
