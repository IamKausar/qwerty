import React from 'react';
import './Webpage.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import ExperimentBar from './components/ExperimentBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Usage from './components/Usage';
import Homepage from './pages/Homepage';

const Webpage = () => {
    return (
        <BrowserRouter basename='/tutorial'>

            <div className="webpage">
                <Navbar />


                <div className="flex-container">
                    <Usage />
                    <Content />
                    <Switch>
                        {/* <Route path="/ccc" component={Content} />
                        <Route path="*" component={Homepage} exact /> */}
                    </Switch>
                </div>

            </div>
        </BrowserRouter >

    )
}

export default Webpage;
