import React, { Component } from 'react';
import About from './About';
import MedicalServices from './MedicalServices';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

const Home = () => (
	<div>
		<h2>home</h2>
		<h1>Welcome to Clinic App!</h1>
        
        <div>
            <About />
            <Link to="/about">More About Us...</Link>
            <Route path ="/about" component={About}/> 
        </div>

        <div>
            <MedicalServices />
        </div>
	</div>
)

export default Home;