import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavShell from './components/NavComp/NavShell'

import AllTabs from './components/AllTab'
import JsAss from './components/JsAss'
import Projects from './components/Projects'
import SimTabs from './components/SimTabs'
import JobPrep from './components/JobPrep'


export default class Routes extends Component {

    render() {
        return (
        <div>
            <Switch>
                <Route component={NavShell(AllTabs)} exact path="/" />
                <Route component={NavShell(JsAss)} exact path="/assessments" />                
                <Route component={NavShell(Projects)} exact path="/projects" />                
                <Route component={NavShell(SimTabs)} exact path="/sim" />                
                <Route component={NavShell(JobPrep)} exact path="/job" />                
            </Switch>
        </div>
        )
    }
}