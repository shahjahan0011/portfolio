import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'; 
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setterClass] = useState('text-animate');
    const nameArray = ['a', 'h', 'a', 'n'];
    const jobArray = ['a','', 'C', 'o', 'm', 'p', 'u','t', 'e', 'r', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

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
                <img src={LogoTitle} alt='Computer Engineering Student'/>
                 <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2> Student / Developer / Residence Advisor  </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home;