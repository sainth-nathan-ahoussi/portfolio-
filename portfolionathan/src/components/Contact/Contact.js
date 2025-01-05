import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your message" rows="4" required></textarea>
                    </div>
                    <div className="form-group-checkbox">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            J'accepte les <a href="#terms">Conditions d'utilisation</a>
                        </label>
                    </div>
                    <button type="submit"> <i class="fa fa-envelope"></i>  Send</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Call Us</h3>
                <p>+33 6 52 49 53 39</p>
                <h3>Where we are :</h3>
                <p>Massy 91300<br />France, Ile-de-France</p>
                <h3>What we can do :</h3>
                <ul>
                    <li>Websites</li>
                    <li>Application</li>
                    <li>Programing Algorithms</li>
                    <li>Traduction</li>
                    <li>Filming and Montage</li>
                    <li>Pcs Installation and Configuration</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
