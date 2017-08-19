import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BubbleMenu from './BubbleMenu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BubbleMenu />, document.getElementById('root'));
registerServiceWorker();
