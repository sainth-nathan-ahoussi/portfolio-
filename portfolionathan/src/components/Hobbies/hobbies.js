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
        <h5>Things that matter to me outside of school, these are interests that I pursue for some, and for others, they are actual activities that I engage in.</h5>
        <div class="grilleHobbies">
                <div class="Basket"><img src={BasketImage} /> <p>Basketball</p></div>
                <div class="Boxe"><img src={BoxeImage} /> <p>Boxe</p></div>
                <div class="Foot"><img src={FootImage} /> <p>Football</p></div>
                <div class="Photo"><img src={PhotoImage} /> <p>Shooting and Filming</p></div>
                <div class="Montage"><img src={MontageImage} /> <p>Editing</p></div>
                <div class="Langues"><img src={LanguesImage} /> <p>Languages</p></div>
                <div class="Piano"><img src={PianoImage} /> <p>Piano</p></div>
                <div class="Guitare"><img src={GuitareImage} /> <p>Guitar</p></div>
                <div class="Musique"><img src={Musiquemage} /> <p>Music</p></div>
                <div class="Voyager"><img src={VoyageImage} /> <p>Travel</p></div>
                <div class="Jeu"><img src={JeuImage} /> <p>Videos Games</p></div>
                <div class="Electronique"><img src={ElectroniqueImage} /> <p>Electronic</p></div>
                </div>
        </div>
    );
};

export default Hobbies;
