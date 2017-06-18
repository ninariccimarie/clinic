import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Calculator from './components/temperature/Calculator';
import App from './App';
import './index.css';


//ReactDOM.render(<Calculator />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
