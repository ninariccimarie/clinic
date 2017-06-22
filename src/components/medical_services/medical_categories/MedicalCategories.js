import React, { Component } from 'react';

import styles from './medicalCategories.scss'

const categories = ['immunization', 'screenings', 'lab/xray',
                    'adult/children\'s disease', 'maternity', 'circumcision']

const MedicalCategories = (props) => {

    const handleClick = (e) => {
        props.onCategoryChange(e.target.value)
    }

    return(
        <ul className={styles.container}>
            {categories.map((category) =>
                <div>
                    <button className={ styles.button } key={category} value={category} 
                    onClick={handleClick}>{category}</button>
                </div>
            )}    
        </ul>
    )
}

export default MedicalCategories