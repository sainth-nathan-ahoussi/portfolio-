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
        <div class="languages">
            <h4>Languages</h4>
            <p>I’m someone who love to learn new things especially if it’s something that 
            <br />will be really useful to me.</p>
                <div class="grilleLanguages">
                <div class="japon"><img src= {JaponImage} /> <p> In Progress</p></div>
                <div class="espagne"><img src= {EspagneImage} /> <p> Intermediate (B1)</p></div>
                <div class="portugal"><img src= {PortugalImage} /> <p> In Progress</p></div>
                <div class="coteIvoire"><img src= {CIVImage} /> <p> In Progress</p></div>
                <div class="anglais"><img src= {AnglaisImage} /> <p>Intermediate (C1)</p></div>
                <div class="france"><img src= {FranceImage} /> <p>Natal</p></div>
                <div class="coree"><img src= {CoreeImage} /> <p>In Progress</p></div>
                <div class="nigeria"><img src= {NigeriaImage} /> <p>In Progress</p></div>
                <div class="creole"><img src= {CreoleImage} /> <p>In Progress</p></div>
                <div class="italie"><img src= {ItalieImage} /> <p>In Progress</p></div>
                <div class="congo"><img src= {CongoImage} /> <p>In Progress</p></div>
            </div>
      </div>
    );
};

export default Langues;
