import React from 'react'
import './Content.css';
import Experiment1 from './subcontent/Experiments/Experiment1';
import IO1 from './subcontent/IObars/IO1';

const Content = () => {
    return (
        <div className="content">


            <Experiment1 />
            <IO1 />
            <Experiment1 />
            <IO1 />
            <Experiment1 />
            <IO1 />

        </div>
    )
}

export default Content
