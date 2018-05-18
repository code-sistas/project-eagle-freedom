import React, { Component } from 'react'
import Tabs from './Tabs/Tabs';
import Pane from './Tabs/Tabs';

export default class AllTabs extends Component {

    render() {
        return (
            <div>
                <Tabs selected={0}>
                    <Pane label='All' content='Lorem ipsum dolor sit amet, sententiae appellantur mei ad, falli efficiendi no cum. Duo comprehensam conclusionemque ex, copiosae perpetua dissentias ad ius. Id putant oportere iracundia eam, in pri tamquam copiosae. Ut adhuc tacimates his. Eos erat adhuc at, ne qui velit aeterno ceteros, his simul latine scribentur eu. Ne ius suas graeco reprehendunt, pri et nusquam senserit.

Sonet viris ea vel. Illud civibus ex eos. Odio case altera ut eum. Vis omnesque quaestio te.'/>      
                    <Pane label='Simulations' content='Simulations content'/>
                    <Pane label='JS Assessments' content='JS Assessment stuff'/>
                    <Pane label='Projects' content='Projects and schtuff'/>
                    <Pane label='Job Prep' content='all the jobs'/>
                </Tabs>
            </div>
        )
    }
}