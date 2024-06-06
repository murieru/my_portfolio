import '../styles/Project.css'


function Project({id, title, category, date, description, text, imageid}){

    return(

        <div id={id} className='project-desc'>

            <h3>{title}</h3>
            {date}
            <br/>
            {description}
            

        </div>
        
    )
}

export default Project