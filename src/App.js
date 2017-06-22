import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Pharmacy from './components/pharmacy/Pharmacy';
import News from './components/news/News';
import ContactUs from './components/contact_us/ContactUs';
import Login from './components/login/Login';

import styles from './app.scss'

const App = () => (
	<Router>
		<div>
			<div className={ styles.topnav }>
				<div className={ styles.container }>
					<div className={ styles.logo }>
					logo
					</div>
					<ul>
						<li><Link to="/">home</Link></li>
						<li><Link to="/about">about</Link></li>
						<li><Link to="/pharmacy">pharmacy</Link></li>
						<li><Link to="/news">news</Link></li>
						<li><Link to="/contactus">contact us</Link></li>
						<li><Link to="/login">log in</Link></li>
					</ul>
				</div>
			</div>
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