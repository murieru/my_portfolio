import '../styles/App.css';
import Banner from './Banner';
import Projects from './Projects';
import Nav from './Nav';
import About from './About';
import Category from './Category';
import Contact from './Contact';
import { useState } from 'react';



function App() {

  const [currentCategory, setCategory] = useState([])
  const[openSection, setOpenSection] = useState(null);

  return (
    <div>
    <Banner />
    <Nav openSection={openSection} setOpenSection={setOpenSection} />
    <About />
    <Category
    currentCategory = {currentCategory}
    setCategory = {setCategory}
    />
    
    <Projects 
    currentCategory = {currentCategory}
    setCategory = {setCategory}
    isOpen={openSection === 'category'}
    />
    <Contact />
    </div>
  );
}

export default App;
