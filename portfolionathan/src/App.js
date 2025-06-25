import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Marquee from './components/Marquee/Marquee';
import Header from './components/Header/header';
import Parcours from './components/Parcours/parcours';
import Presentation from './components/Presentation/presentation';
import Skillset from './components/Skillset/skillset';
import Toolbox from './components/Toolbox/toolbox';
import Langues from './components/Langues/langues';
import Experience from './components/Experience/experience';
import Newsletter from './components/Newsletter/newsletter';
import Hobbies from './components/Hobbies/hobbies';
import Contact from './components/Contact/Contact';
import Donation from './components/Donation/Donation';
import Footer from './components/Footer/footer';
import Projects from './components/Projects/Projects';
import LegalMentions from './components/MentionsLégales/LegalMentions';

function App() {
    return (
        <Router>
            <Marquee />
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/mainPage" />} />

                {/* Main Home Route */}
                <Route path="/mainPage" element={
                    <>
                        <Parcours />
                        <Presentation />
                        <Skillset />
                        <Toolbox />
                        <Langues />
                        <Experience />
                        <Newsletter />
                        <Hobbies />
                        <Contact />   
                    </>
                } />

                {/* Projects Page Route */}
                <Route path="/projects" element={
                    <>
                        <Projects />
                        <Donation />
                    </>
                } />


                {/* Projects Page Mentions Légales */}
                <Route path="/mentions-legales" element={
                    <>
                        <LegalMentions />
                    </> 
                } />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
