import React, { useState } from 'react';
import '../styles/Project.css'
import Carousel from './Carousel'

function Project({id, title, category, date, description, text, imageId, video, skills}){

    const [isClosed, setIsClosed] = useState(true);

    

    function openClose(id){
        document.getElementById(id).classList.toggle('project-desc-open')
        setIsClosed(!isClosed);
    }

    return(

        <div id={id} className="project-desc">

            <div className='project-desc-box'>
                <h3 onClick={() => openClose(id)}>{title}</h3>                
                <div className='content'>
                    <span className='date'>[{date}]</span>
                    <br/>
                    <span className='desc'> — {description}</span>
                    <br/>
                    {text}
                    <br/>
                    <br/>
                    <ul className='skills'>
                    {skills.map((skill, index) => (<li
                    key={skill+index}
                    className='skill'
                    >[{skill}]</li>
                ))                    
                    }
                    </ul>
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