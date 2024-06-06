import '../styles/Projects.css'
import {projectList} from '../data/projectList.js'
import Project from './Project.js'

function Projects({currentCategory, setCategory}){

    function openClose(id){
        document.getElementById(id).classList.toggle('project-desc-open');
    }

    return(

    <div>
        
        <ul>
    {projectList.map((project) => (
        <li
            className={project.category.some(cat => currentCategory.includes(cat)) ? 'project-box' : 'project-box closed'}
            key={project.id}
            onClick={() => openClose(project.id)}
        >
            <Project
                id={project.id}
                title={project.title}
                date={project.date}
                category={project.category}
                description={project.description}
                text={project.test}
                imageid={project.imageId}
            />
        </li>
    ))}
</ul>

    </div>
        
    )
}

export default Projects



/* OLD UL without className transition effects (working)
        <ul>
            {projectList.map((project) => (
                project.category.some(cat => currentCategory.includes(cat)) ? (
                    <li className='project-box' key={project.id} onClick={() => openClose(project.id)}>
                        <Project                     
                            id={project.id}
                            title={project.title}
                            date={project.date}
                            category={project.category}
                            description={project.description}
                            text={project.test}
                            imageid={project.imageId}
                        />
                    </li>
                ) : null
            ))}
        </ul>
*/