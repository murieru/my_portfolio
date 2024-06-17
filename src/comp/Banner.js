import '../styles/Banner.css';
import { useEffect, useState } from 'react';

function Banner() {
    const welcomeMessage = "Hello, my name is Muriel. I am a Swiss designer.";
    const [displayedMessage, setDisplayedMessage] = useState("");

    useEffect(() => {
        const animIntro = setInterval(() => {
            setDisplayedMessage(prev => {
                if (prev.length < welcomeMessage.length) {
                    return welcomeMessage.slice(0, prev.length + 1);
                } else {
                    clearInterval(animIntro);
                    return prev;
                }
            });
        }, 50);

        return () => clearInterval(animIntro); // Cleanup interval on component unmount
    }, [welcomeMessage]);

    useEffect(() => {
        const banner = document.getElementById('banner');
        banner.classList.add('anim-intro');
    }, []);

    return (
        <div>
            <div id="banner" className="banner">
                <div className="hidden">{welcomeMessage}</div>
                <h1 id="container" aria-live="polite">{displayedMessage}</h1>
            </div>
        </div>
    );
}

export default Banner;