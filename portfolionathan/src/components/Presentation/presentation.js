import React from 'react';
import './presentation.css'; 
import MoiImage from '../../Images/moi.jpg';
import CompanyImage from '../../Images/Company.png';

const Presentation = () => {
    return (
        <div className="presentation" id="presentation-section">
             <link href='https://fonts.googleapis.com/css?family=Handjet' rel='stylesheet'></link>
              <link href='https://fonts.googleapis.com/css?family=Inknut Antiqua' rel='stylesheet'></link>
            <div className="grillePresentation">
                <div className="photo">
                    <div className="me">
                        <img src={MoiImage} />
                    </div>
                    <br />
                    <div className="company">
                        <h2>Dream Company Name</h2>
                        <img src={CompanyImage} />
                        <p> Jayrus Corporation </p>
                    </div>
                </div>
        
                <div className="moi">
                    <h2>IT technologies and Game Development  Enthusiast.</h2>
                    <br />
                    <p>I’m Sainth-Nathan Ahoussi, a Graduate to be of IUT of Orsay, 
                        planning to enter the second year of an engineering school with a specialization in Artificial Intelligence or Cybersecurity.
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
                    click on my <a href="https://github.com/sainth-nathan-ahoussi"><strong>Github</strong></a> page or get in touch with me by leaving a message at the   
                    <strong><i> Contact Form section.</i></strong></p>
                    <br />
                    <br />
                    <div className="cv"><a href="/CurriculumVitae_Alternance_AHOUSSI.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
                    <br />
                    <br />
                </div>
            </div>
      </div>
    );
};

export default Presentation;
