import React, { Component } from 'react'
import About from '../about/About'
import MedicalServices from '../medical_services/MedicalServices'
import '../../fonts/fonts.css'
import styles from './home.scss'

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const Home = () => (
	<div className={ styles.home }>
		<div className={ styles.medicalServices }>
            <MedicalServices />
        </div>
        <div className={ styles.about }>
            <About />
            <Link to="/about">More About Us...</Link>
            <Route path ="/about" component={About}/> 
        </div>
	</div>
)

export default Home