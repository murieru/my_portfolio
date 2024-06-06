import '../styles/App.css';
import Banner from './Banner';
import Projects from './Projects';
import Nav from './Nav';
import About from './About';
import Category from './Category';
import { useState } from 'react';



function App() {

  const [currentCategory, setCategory] = useState([])

  return (
    <div>
    <Banner />
    <Nav />
    <About />
    <Category
    currentCategory = {currentCategory}
    setCategory = {setCategory}
    />
    <Projects 
    currentCategory = {currentCategory}
    setCategory = {setCategory}
    />
    </div>
  );
}

export default App;