import '../styles/Banner.css';
import { useEffect, useState } from 'react';

function Banner() {
    const welcomeMessage = "Hello, my name is Muriel. I am a swiss designer. Welcome to my portfolio.";
    const [i, setI] = useState(0);

    useEffect(() => {
        const container = document.getElementById('container');

        const animIntro = setInterval(() => {
            if (container && i < welcomeMessage.length) {
                container.innerHTML += welcomeMessage[i];
                setI(i => i + 1);
            } else {
                clearInterval(animIntro);
            }
        }, 50);

        return () => clearInterval(animIntro); // Cleanup interval on component unmount
    }, [i, welcomeMessage]);


    useEffect ( () => {
        const banner = document.getElementById('banner');
        banner.classList.add('anim-intro')
        
    } )


    return (
        <div>
            <div id="banner" className="banner">
                <div className="hidden">{welcomeMessage}</div>
                <h1 id="container"></h1>
            </div>
        </div>
    );
}

export default Banner;