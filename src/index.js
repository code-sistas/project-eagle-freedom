import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mothership from './Mothership';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mothership />, document.getElementById('root'));
registerServiceWorker();
