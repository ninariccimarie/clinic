import React, { Component } from 'react'

const MedicalService = (props) => {
    const category = props.category
    return (
        <div>
            <h1>{category}</h1>
        </div>
    )
}

export default MedicalService