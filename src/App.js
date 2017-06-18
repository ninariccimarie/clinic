import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Pharmacy from './components/Pharmacy';
import News from './components/News';
import ContactUs from './components/ContactUs';
import Login from './components/Login';

const App = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">home</Link></li>
				<li><Link to="/about">about</Link></li>
				<li><Link to="/pharmacy">pharmacy</Link></li>
				<li><Link to="/news">news</Link></li>
				<li><Link to="/contactus">contact us</Link></li>
				<li><Link to="/login">log in</Link></li>
			</ul>
				<Route exact path="/" component={Home}/>
				<Route path ="/about" component={About}/>
				<Route path ="/pharmacy" component={Pharmacy}/>
				<Route path ="/news" component={News}/>
				<Route path ="/contactus" component={ContactUs}/>
				<Route path ="/login" component={Login}/>
		</div>
	</Router>
)

export default App;