import { useState } from 'react';
import projects from './../data.json';

const MyProjects = () => {
    const [index, setIndex] = useState(0);
    const currentProject = projects[index];

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            
        </div>
    )
}