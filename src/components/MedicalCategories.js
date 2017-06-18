import React, { Component } from 'react';

const categories = ['immunization', 'screenings', 'lab/xray',
                    'adult/children\'s disease', 'maternity', 'circumcision']

const MedicalCategories = (props) => {

    const handleClick = (e) => {
        props.onCategoryChange(e.target.value)
    }

    return(
        <ul>
            {categories.map((category) =>
                <button key={category} value={category} 
                onClick={handleClick}>{category}</button>
            )}    
        </ul>
    )
}

export default MedicalCategories