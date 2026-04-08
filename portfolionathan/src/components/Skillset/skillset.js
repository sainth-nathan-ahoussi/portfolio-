import React from 'react';
import './skillset.css';

const Skillset = () => {
    return (
        <section className="skillset">
            <h4>Soft Skills</h4>
            <p>The following skills reflect the expertise and know-how developed throughout my professional and academic journey, covering various areas essential to the success of my missions.</p>
            <div className="skills-container">
                <div className="column">
                    <h5>Cognitive Skills</h5>
                    <p>Critical Thinking</p>
                    <p>Curiosity</p>
                    <p>Analytical Thinking / Problem Solving</p>
                    <p>Decision Making</p>
                    <p>Strong Comprehension</p>
                    <p>Organized</p>
                    <p>Attention to Detail / Rigor</p>
                </div>
                <div className="column">
                    <h5>Interpersonal Skills</h5>
                    <p>Teamwork</p>
                    <p>Communication</p>
                    <p>Active Listening</p>
                    <p>Conflict Management</p>
                    <p>Technical Collaboration</p>
                    <p>Technical Vulgarization </p>
                    <p>Constructive Feedback</p>
                </div>
                <div className="column_bis">
                    <h5>Personal / Behavioral Skills</h5>
                    <p>Perseverance</p>
                    <p>Autonomy</p>
                    <p>Adaptability</p>
                    <p>Strong Tenacity</p>
                    <p>Multitasking</p>
                    <p>Stress Management</p>
                    <p>Technology Monitoring</p>
                </div>
            </div>
        </section>
    );
};

export default Skillset;
