import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

    render() {
        return (
            <div className="Nav">
                    <Link to="/">All</Link>
                    <Link to="/sim">Simulation</Link>
                    <Link to="/assessments">JS Assessments</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/job">Job Prep</Link>
            </div>
        )
    }
}