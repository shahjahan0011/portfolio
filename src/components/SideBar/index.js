import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/logoJ.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHome, faSuitcase, faUser, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {

    const[showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link to="/" className="logo">
                <img src={LogoJ} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Jahan" />
            </Link> 
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="home" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink> 
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="project-link" to="/project">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                // <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                //     <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                // </NavLink>
                <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon' />
            </nav>
                <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jahan-shah-441aa6213/'>
                           <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> 
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://github.com/shahjahan0011'>
                           <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> 
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@jahanshah4818'>
                           <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" /> 
                        </a>
                    </li>
                </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars} color='#ffd700' size='3x' className='burger-icon'/>

            </div>
    )
}

export default Sidebar; 
