import React from 'react';
import './hobbies.css';
import BasketImage from '../../Images/Hobbies/basketball.png';
import BoxeImage from '../../Images/Hobbies/Boxe.png';
import FootImage from '../../Images/Hobbies/football.png';
import PhotoImage from '../../Images/Hobbies/camera.png';
import MontageImage from '../../Images/Hobbies/montage.png';
import LanguesImage from '../../Images/Hobbies/languages.png';
import PianoImage from '../../Images/Hobbies/piano.png';
import GuitareImage from '../../Images/Hobbies/guitare.png';
import Musiquemage from '../../Images/Hobbies/musique.png';
import VoyageImage from '../../Images/Hobbies/voyage.png';
import JeuImage from '../../Images/Hobbies/jeu.png';
import ElectroniqueImage from '../../Images/Hobbies/electronique.png';

const Hobbies = () => {
    return (
        <div class="hobbies">
        <h4>Hobbies</h4>
        <p>Things that matter to me outside of school, these are interests that I pursue for some, 
        <br />and for others, they are actual activities that I engage in.
        </p>
        <div class="grilleHobbies">
                <div class="Basket"><img src={BasketImage} /></div>
                <div class="Boxe"><img src={BoxeImage} /></div>
                <div class="Foot"><img src={FootImage} /></div>
                <div class="Photo"><img src={PhotoImage} /></div>
                <div class="Montage"><img src={MontageImage} /></div>
                <div class="Langues"><img src={LanguesImage} /></div>
                <div class="Piano"><img src={PianoImage} /></div>
                <div class="Guitare"><img src={GuitareImage} /></div>
                <div class="Musique"><img src={Musiquemage} /></div>
                <div class="Voyager"><img src={VoyageImage} /></div>
                <div class="Jeu"><img src={JeuImage} /></div>
                <div class="Electronique"><img src={ElectroniqueImage} /></div>
                </div>
        </div>
    );
};

export default Hobbies;
