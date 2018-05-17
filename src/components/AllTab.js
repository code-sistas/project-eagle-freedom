import React, { Component } from 'react'
import Tabs from './Tabs/Tabs';
import Pane from './Tabs/Tabs';

export default class AllTabs extends Component {

    render() {
        return (
            <div>
                <Tabs selected={0}>
                    <Pane label='All'>
                        <div>All</div>       
                    </Pane>
                    <Pane label='Simulations'>
                        <div>Simulations</div>
                    </Pane>
                    <Pane label='JS Assessments'>
                        <div>JS Assessments</div>
                    </Pane>
                    <Pane label='Projects'>
                        <div>Projects</div>
                    </Pane>
                    <Pane label='Job Prep'>
                        <div>Job Prep</div>
                    </Pane>
                </Tabs>
            </div>
        )
    }
}