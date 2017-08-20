import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bubble from './Bubble';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bubble bubbleText ="My text"/>, document.getElementById('root'));
registerServiceWorker();
