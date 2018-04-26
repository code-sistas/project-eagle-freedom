import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mothership from './Mothership';
import {BrowserRouter as Router} from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
    <Mothership />
    </Router>, document.getElementById('root'));
// registerServiceWorker();
