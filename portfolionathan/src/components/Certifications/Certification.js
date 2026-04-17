import React, { useState } from 'react';
import './Certification.css';


const CertificationIA = [
    {
        title: "",
        description: "",
        image: "",
        Link: "",
    }
]
const CertificationCyber = []
const CertificationEnglish = []
const CertificationDev = []


const Certification = () => {

    // (document).ready(function () {
    //     var items = (".carousel-item");
    //     var totalItems = items.length;
    //     var itemsPerPage = 3;
    //     var totalPages = Math.ceil(totalItems / itemsPerPage);
    //     var currentPage = 1;

    //     function showPage(page) {
    //         items.hide();
    //         var startIndex = (page - 1) * itemsPerPage;
    //         var endIndex = startIndex + itemsPerPage;
    //         items.slice(startIndex, endIndex).show();
    //     }

    //     (".next-button").click(function () {
    //         if (currentPage < totalPages) {
    //         items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).hide();
    //         currentPage++;
    //         showPage(currentPage);
    //         }
    //     });

    //     (".prev-button").click(function () {
    //         if (currentPage > 1) {
    //         items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).hide();
    //         currentPage--;
    //         showPage(currentPage);
    //         }
    //     });

    //     showPage(currentPage);
    // });

    return (
        <div className="projects-container">
            <h1 className="projects-title">My Certifications</h1>
            <p className="projects-description">
                Welcome to my certifications page !  <br /> 
                This page showcases the certifications I have earned across a wide range of fields, including Artificial Intelligence, software development, cybersecurity, English proficiency and more.
                <br /> 
                <br /> 
                Each certification reflects my commitment to continuous learning, skill development, and staying up to date with evolving technologies. <br /> 
                Together, they highlight both my technical expertise and my dedication to personal and professional growth.
            </p>

            <div className='pagecontent'>
                <div className='IA_content'>
                    <h2>IA</h2>
                    <div className='carousel'>
                        <button className="prev-button">&#10094;</button>
                            <div className="carousel-item">
                                <div class="carousel-content">
                                    <div className="carousel-image"><img src="https://prod.statics.indeed.com/eml/assets/images/logo/indeed_logo_1200x630.png" className="project-image" /></div>
                                    <div className="carousel-titre"><a href=''>Test</a></div>
                                    <div className="carousel-description"><p>Description</p></div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-content">
                                    <div className="carousel-image"><img src="https://prod.statics.indeed.com/eml/assets/images/logo/indeed_logo_1200x630.png" className="project-image" /></div>
                                    <div className="carousel-titre"><a href=''>Test</a></div>
                                    <div className="carousel-description"><p>Description</p></div>
                                </div>
                            </div>
                        <button className="next-button">&#10095;</button>
                    </div>
                </div>
                <div className='Cyber_content'>
                    <h2>Cybersecurity</h2>
                    <div className='carousel'>
                        <button className="prev-button">&#10094;</button>
                            <div className="carousel-item">
                                <div className="carousel-content">
                                    <div className="carousel-image"><img src="https://prod.statics.indeed.com/eml/assets/images/logo/indeed_logo_1200x630.png" className="project-image" /></div>
                                    <div className="carousel-titre"><a href=''>Test</a></div>
                                    <div className="carousel-description"><p>Description</p></div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-content">
                                    <div className="carousel-image"><img src="https://prod.statics.indeed.com/eml/assets/images/logo/indeed_logo_1200x630.png" className="project-image" /></div>
                                    <div className="carousel-titre"><a href=''>Test</a></div>
                                    <div className="carousel-description"><p>Description</p></div>
                                </div>
                            </div>
                        <button className="next-button">&#10095;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;
