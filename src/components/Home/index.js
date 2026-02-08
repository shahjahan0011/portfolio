//import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logoJ.png'; 
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setterClass] = useState('text-animate');
    const nameArray = "ahan, ".split("");
    const jobArray = "Software Engineer.".split("");

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
        <>        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                 <img src={LogoTitle} alt='J'/> 
                 <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2> Computer Engineering, 2027 @ University of British Columbia </h2>
                <a href="https://www.linkedin.com/in/jahan-shah-441aa6213/" className="flat-button">CONNECT WITH ME</a>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home;
