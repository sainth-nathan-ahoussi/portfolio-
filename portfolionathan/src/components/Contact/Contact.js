import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        terms: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };
    

    const handleCheckbox  = (e) => {
        setFormData(prev => ({
            ...prev,
            terms: e.target.checked
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.terms) {
            toast.error('Please accept the terms and conditions');
            return;
        }
    
        
        const isValidName = /^[a-zA-Z\s]+$/.test(formData.name);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        const isValidMessage = /^[a-zA-Z0-9\s,.!?]*$/.test(formData.message); 
    
        if (!isValidName) {
            toast.error('Name contains invalid characters.');
            return;
        }
        if (!isValidEmail) {
            toast.error('Invalid email address.');
            return;
        }
        if (!isValidMessage) {
            toast.error('Message contains invalid characters.');
            return;
        }
    
        setIsSubmitting(true);
    
        try {
            const sanitizeInput = (input) => {
                const div = document.createElement('div');
                div.textContent = input;
                return div.innerHTML;
            };        

            const sanitizedData = {
                name: sanitizeInput(formData.name),
                email: sanitizeInput(formData.email),
                message: sanitizeInput(formData.message),
            };
            
            const result = await emailjs.send(
                'service_jsic5tt',
                'template_zolbltq',
                {
                    from_name: sanitizedData.name,
                    from_email: sanitizedData.email,
                    message: sanitizedData.message,
                },
                'iSvNEhvqXQOSUEgxW'
            );
            
    
            if (result.text === 'OK') {
                toast.success('Your message was sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    terms: false
                });
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };


    

    return (
        <div className="contact-container">
            <Toaster position="top-right" />
            <div className="contact-form">
                <h2>Contact Me</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name: </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            maxLength={50}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message :</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            maxLength={500}
                            rows={10}
                            required
                        ></textarea>
                    </div>
                   <div className="form-group-checkbox">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={formData.terms}
                            onChange={handleCheckbox}
                            required
                        />
                        <label htmlFor="terms">
                            I accept the <a href="#terms">Terms of Use</a>
                        </label>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
            <div className="contact-info">
                <h3>About Me</h3>
                <h3>Where I'm  :</h3>
                <p>Massy 91300<br />France, Ile-de-France</p>
                <h3>What I can do :</h3>
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
