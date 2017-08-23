import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bubble from './Bubble';
import Content from './Content';
import Navbar from './Navbar';

import BubbleMenu from './BubbleMenu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className="container"> 
		<div className="navbar" >
			<Navbar/ >
		</div> 

		<div className="content" >
			<Content/> 
		</div>
		
		<div className="bubblemenu" >
			<BubbleMenu/> 
		</div>
	</div> 

	, document.getElementById('root'));
registerServiceWorker();
