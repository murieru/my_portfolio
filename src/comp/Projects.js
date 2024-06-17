import '../styles/Projects.css'
import {projectList} from '../data/projectList.js'
import Project from './Project.js'
import { useState, useEffect } from 'react';

function Projects({currentCategory, setCategory, isOpen}){


    function openClose(id){
        document.getElementById(id).classList.toggle('project-desc-open');
    }
        


    return(

    <div>
        
        <ul>
    {projectList.map((project) => (
        <li
            className={project.category.some(cat => currentCategory.includes(cat)) && isOpen ? 'project-box' : 'project-box closed'}
            key={project.id}
            onClick={() => openClose(project.id)}
        >   
            <Project
                id={project.id}
                title={project.title}
                date={project.date}
                category={project.category}
                description={project.description}
                text={project.text}
                imageId={project.imageId}
                video={project.video}
                skills={project.skills}
            />
           
        </li>
    ))}
</ul>

    </div>
        
    )
}

export default Projects