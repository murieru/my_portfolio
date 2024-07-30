import '../styles/Projects.css'
import {projectList} from '../data/projectList.js'
import Project from './Project.js'

function Projects({currentCategory, setCategory, isOpen}){        


    return(

    <div>
        
        <ul>
    {projectList.map((project) => (
        <li
            className={project.category.some(cat => currentCategory.includes(cat)) && isOpen ? 'project-box' : 'project-box closed'}
            key={project.id}
            
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