import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import projectData from '../../Data/project.json';

const Project = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => { 
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    })

    const renderProject = (project) => {
        return (
            <div className='images-container'>
                {
                    project.map((proj, idx) => {
                    return(
                        <div className='image-box' key={idx}>
                            <img src={proj.cover} className='project-image' alt={proj.name} />
                            <div className='content'>
                                <p className='title'>{proj.title}</p>
                                <h4 className='description'>{proj.description}</h4>
                                <button className='btn' onClick={() => window.open(proj.url)}>View</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }

    return (
        <>
        <div className="container project-page">
             <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Projects".split("")}
                    idx={15} />
             </h1>
             <div>
                {renderProject(projectData.project)}
             </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Project;