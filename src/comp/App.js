import '../styles/App.css';
import Banner from './Banner';
import Projects from './Projects';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import { useState } from 'react';



function App() {

  const[openSection, setOpenSection] = useState(null);

  return (
    <div>
    <Banner />
    <Nav openSection={openSection} setOpenSection={setOpenSection} />
    <About />    
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
