import React from 'react';
import './parcours.css'; 
import CollegeImage from '../../Images/Parcours/college_sada.png';
import PixImage from '../../Images/Parcours/logo_article_pix.png';
import BrevetImage from '../../Images/Parcours/Brevet-college.jpg';
import LyceeVImage from '../../Images/Parcours/vilgenis.png';
import LyceeMImage from '../../Images/Parcours/Mayotte.png';
import BacImage from '../../Images/Parcours/bac.png';
import OrsayImage from '../../Images/Parcours/orsay.png';

const Parcours = () => {
    return (
        <div class="parcours">
            <div class="grilleParcours">
                <div class="College"><img src={CollegeImage} /></div>
                <div class="Pix"><img src={PixImage} /></div>
                <div class="Brevet"><img src={BrevetImage} /></div>
                <div class="LyceeV"><img src={LyceeVImage} /></div>
                <div class="LyceeM"><img src={LyceeMImage} /></div>
                <div class="Bac"><img src={BacImage} /></div>
                <div class="Orsay"><img src={OrsayImage} /></div>
            </div>
        </div>
    );
};

export default Parcours;
