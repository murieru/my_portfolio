import React, { useState } from 'react';
import '../styles/Project.css'
import Carousel from './Carousel'


function Project({id, title, category, date, description, text, imageId, video, skills, extLink, extLinkText}){

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
                    {extLink ? (
                        <div>
                            <br/>
                    <a href={extLink} target='blank'>
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.55 19.48"><defs></defs><path  d="m23.21,10.85s.05-.1.08-.15c.03-.06.07-.12.1-.19.03-.07.04-.13.06-.2.02-.06.04-.11.05-.17.05-.26.05-.52,0-.78-.01-.06-.03-.11-.05-.17-.02-.07-.04-.14-.06-.2-.03-.07-.07-.13-.1-.19-.03-.05-.05-.1-.08-.15-.07-.11-.16-.21-.25-.31L15.23.59c-.78-.78-2.05-.78-2.83,0-.78.78-.78,2.05,0,2.83l4.32,4.32H2c-1.1,0-2,.9-2,2s.9,2,2,2h14.72l-4.32,4.32c-.78.78-.78,2.05,0,2.83.39.39.9.59,1.41.59s1.02-.2,1.41-.59l7.74-7.74c.09-.09.18-.2.25-.31Z"/></svg>
                        {extLinkText}
                    </a>
                    <br/>
                    </div>
                    ) : null
                    }
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