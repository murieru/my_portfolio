import React, { useState } from 'react';
import '../styles/Project.css'
import Carousel from './Carousel'

function Project({id, title, category, date, description, text, imageId}){

    const [isClosed, setIsClosed] = useState(true);

    const toggleProject = () => {
        setIsClosed(!isClosed);
    };

    return(

        <div id={id} className="project-desc" onClick={toggleProject}>

            <div className='project-desc-box'>
                <h3>{title}</h3>                
        
                {date}
                <br/>
                {description}
            </div>

            {!isClosed && (
                <Carousel 
                id={id}
                title={title}
                category={category}
                date={date}
                description={description}
                text={text}
                imageId={imageId}
                />
            )}

        </div>
        
    )
}

export default Project