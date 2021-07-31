import React from 'react'
import './ExperimentBar.css';
import { Link } from 'react-router-dom';

const ExperimentBar = () => {
    return (
        <div className="experimentbar">
            <h1>Experiment Bar</h1>
            <ul>
                <li>
                    <Link to="content" exact>Experiment 1</Link>
                </li>
                <li>
                    <a href=""> <p>Experiment 2</p></a>
                </li>
            </ul>
        </div>
    )
}

export default ExperimentBar
