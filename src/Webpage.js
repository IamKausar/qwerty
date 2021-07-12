import React from 'react';
import './Webpage.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import ExperimentBar from './components/ExperimentBar';

const Webpage = () => {
    return (
        <div className="webpage">
            <Navbar />
            <ExperimentBar />
            <Content />
        </div>
    )
}

export default Webpage;
