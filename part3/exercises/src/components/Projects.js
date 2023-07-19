import { useState } from 'react';
import projects from './../data.json';
import styles from './../App.css'

const MyProjects = () => {
    const [index, setIndex] = useState(0);
    // const projectList = projects;
    const currentProject = projects[index];

    function handleClick() {
        if(index < projects.length-1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h3>{currentProject.title}</h3>
            <h5>Pattern created by {currentProject.creator}</h5>
            <img src={currentProject.img} alt={currentProject.alt}/>
        </div>
    )
}

export default MyProjects;