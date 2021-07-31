import React from 'react'
import './Content.css';
import Experiment1 from './subcontent/Experiments/Experiment1';
import Experiment2 from './subcontent/Experiments/Experiment2';
import IO1 from './subcontent/IObars/IO1';
import IO2 from './subcontent/IObars/IO2';
import { Route, Switch } from 'react-router';

const Content = () => {
    return (
        <div className="content">

            <Switch basename='/ccc'>
                <Route path="/exp1" exact>
                    <Experiment1 />
                    <IO1 />
                </Route>
                <Route path="/exp2" exact>
                    <Experiment2 />
                    <IO2 />
                </Route>
            </Switch>

        </div>
    )
}

export default Content
