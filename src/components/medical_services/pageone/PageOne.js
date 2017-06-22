import React, { Component } from 'react';
import ReactDateTime from 'react-datetime'

import MedicalCategories from './../medical_categories/MedicalCategories'
import About from '../../about/About'
import './react-datetime.css'
import styles from './pageOne.scss'

const PageOne = (props) => {
    const category = props.category
    return(
        <div>
            <MedicalCategories onCategoryChange={props.onCategoryChange}/>
            <h2 className={ styles.title }>preferred date and time</h2>
            
            <div classname={ styles.input }>
                <ReactDateTime value={props.datetime} onChange={props.onDateTimeChange}/>
            </div>
        </div>
    )
}

export default PageOne