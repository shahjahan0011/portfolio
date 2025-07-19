import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJsSquare, faReact, faGitAlt, faAngular, faCss3 } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

     const [letterClass, setterClass] = useState('text-animate');

     useEffect(() => {
         const timeoutId = setTimeout(() => {
             setterClass('text-animate-hover');
         }, 4000);
     
         // Cleanup function to clear the timeout if the component unmounts
         // or if the effect is re-run before the timeout completes 
         //avoid destroy function Runtime Error
         return () => clearTimeout(timeoutId); // proper cleanup
         }, []);

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} />
                </h1>
                <p>
                    I am a Computer Engineering student with a passion for technology and innovation.
                    I enjoy solving complex problems and building efficient systems.
                </p>
                </div>        
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color='#38ec28ff' />
                </div>    
            </div>
        </div>

        <Loader type="pacman" />
        </>
    )
}

export default About;