import React from 'react';
import Header from './components/Header/header';
import Parcours from './components/Parcours/parcours'; 
import Presentation from './components/Presentation/presentation'; 
import Skillset from './components/Skillset/skillset'; 
import Toolbox from './components/Toolbox/toolbox';
import Langues from './components/Langues/langues';
import Experience from './components/Experience/experience';
import Newsletter from './components/Newsletter/newsletter';
import Hobbies from './components/Hobbies/hobbies';
import Footer from './components/Footer/footer';  

function App() {
    return (
        <div className="App">
            <Header />
            <Parcours />
            <Presentation />
            <Skillset />
            <Toolbox />
            <Langues />
            <Experience />
            <br />
            <Newsletter />
            <Hobbies />
            <Footer />
        </div>
    );
}

export default App;
