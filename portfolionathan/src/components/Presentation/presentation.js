import React from 'react';
import './presentation.css'; 
import MoiImage from '../../Images/moi.jpg';
import CompanyImage from '../../Images/Company.png';

const Presentation = () => {
    return (
        <div class="presentation" id="presentation-section">
            <div class="grillePresentation">
                <div class="photo">
                    <div class="me">
                        <img src={MoiImage} />
                    </div>
                <br />
                    <div class="company">
                        <h2>Dream Company Name</h2>
                        <img src={CompanyImage} />
                        <p> Jayrus Entertainment </p>
                    </div>
                </div>
        
                <div class="moi">
                    <h2>IT technologies and Game  <br /> Development Enthusiast.</h2>
                    <br />
                    <p>I’m Sainth-Nathan Ahoussi, a second year student in the
                    IUT of Orsay with 3 year of hands-made knowledge.
                    <br />
                    <br />
                    My journey into IT development began at the time of
                    Secondary School, when I discovered the anime Sword Art
                    Online, an anime about a new style of playing video games in 
                    augmented reality with a headset who was at the cutting 
                    edge of technology that could even make you feel pain or
                    even smell. When I discovered this and I realized it did not
                    existed yet so I thought that i could make it. But reality has 
                    caught up with me it was not a easy task that could be made 
                    by a 11 years old boy alone.
                    <br />
                    <br />
                    <br />
                    Since then I made my research about IT in general and of this
                    research was created a love for development precisely IT 
                    and Web development. Since I wanted to do computer 
                    science the class of technologies in Secondary School I 
                    learned about Scratch and Arduino after that I learned a lot
                    about languages related to Web development, 3D and Electronics.
                    <br />
                    <br />
                    <br />
                    So that how i ended up in the IUT of Orsay with the goal of
                    making my own company in IT especially in Video games
                    development. My inspirations are the French company
                    Ankama and Ubisoft.<br />
                    <br />
                    For a more in-depth understanding of my qualifications,
                    click on my <a href="https://github.com/sainth-nathan-ahoussi">Github</a> page or get in touch with me at
                     <strong><i>nathanahoussi502@gmail.com</i></strong></p>
                    <br />
                    <br />
                    <div class="cv"><a href="../curriculum_vitae_nathan.pdf">Resume</a></div>
                    <br />
                    <br />
                    <p>(PDF format, 1.7 MB)</p>
                    <br />
                </div>
            </div>
      </div>
    );
};

export default Presentation;
