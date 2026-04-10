import React from 'react';
import './langues.css';
import JaponImage from '../../Images/Languages/japan.png';
import EspagneImage from '../../Images/Languages/espagne.png';
import PortugalImage from '../../Images/Languages/portugal.png';
import CIVImage from '../../Images/Languages/coteIvoire.png';
import AnglaisImage from '../../Images/Languages//uk.png';
import FranceImage from '../../Images/Languages/france.png';
import CoreeImage from '../../Images/Languages/coree.png';
import NigeriaImage from '../../Images/Languages/nigeria.png';
import CreoleImage from '../../Images/Languages/creole.png';
import ItalieImage from '../../Images/Languages/italie.png';
import CongoImage from '../../Images/Languages/congo.png';

const Langues = () => {
    return (
        <div className="languages">
            <h4>Languages</h4>
            <h5>I’m someone who love to learn new things especially if it’s something that will be really useful to me.</h5>
                <div className="grilleLanguages">
                <div className="france"><img src= {FranceImage} /> <p>Natal</p></div>
                <div className="anglais"><img src= {AnglaisImage} /> <p><a href="https://www.etsglobal.org/fr/en/digital-score-report/9C35571E742355627BC2843B03ADAE18D0BBBFED3FB9FC622AC205225CAC9F1CVGxWU0wwancrSW1mVFE1OElzclk4Rkh6S0RLejk0UG40djYrMVQyNmFoTTRRb2JK?utm_campaign=sharing_dsr&utm_medium=qr-code-click&utm_source=dsr">Intermediate (B2- TOEIC Link)</a></p></div>
                <div className="espagne"><img src= {EspagneImage} /> <p> Intermediate (B1)</p></div>
                <div className="portugal"><img src= {PortugalImage} /> <p> In Progress</p></div>
                <div className="japon"><img src= {JaponImage} /> <p> In Progress</p></div>
                <div className="coteIvoire"><img src= {CIVImage} /> <p> In Progress</p></div>
                <div className="creole"><img src= {CreoleImage} /> <p>In Progress</p></div>
                <div className="coree"><img src= {CoreeImage} /> <p>In Progress</p></div>  
                <div className="congo"><img src= {CongoImage} /> <p>In Progress</p></div>
            </div>
      </div>
    );
};

export default Langues;
