import React from 'react';
import './Webpage.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import ExperimentBar from './components/ExperimentBar';

const Webpage = () => {
    return (
        <div className="webpage">
            <Navbar />
            <div className="flex-container">
                <ExperimentBar />
                <Content />
            </div>

        </div>
    )
}

export default Webpage;
