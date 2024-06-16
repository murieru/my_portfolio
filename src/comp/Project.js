import React, { useState } from 'react';
import '../styles/Project.css'
import Carousel from './Carousel'

function Project({id, title, category, date, description, text, imageId, video}){

    const [isClosed, setIsClosed] = useState(true);

    const toggleProject = () => {
        setIsClosed(!isClosed);
    };

    return(

        <div id={id} className="project-desc" onClick={toggleProject}>

            <div className='project-desc-box'>
                <h3>{title}</h3>                
                <div className='content'>
                    <span className='date'>[{date}]</span>
                    <br/>
                    {description}
                </div>
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
                video={video}
                />
            )}

        </div>
        
    )
}

export default Project