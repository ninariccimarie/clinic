import React, { Component } from 'react'

const FirstName = (props) => {
    return(
        <div>
            <label>First Name: </label>
            <input type="text" value={props.firstName} onChange={props.onChange}/>
        </div>
    )
}

const PageFour = (props) => {
    console.log("MS:First Name:", props.firstName)
    return (
        <div>
            <h1>PageFour</h1>
            <div>
                <FirstName firstName={props.firstName} onChange={props.onFirstNameChange}/>
            </div>
        </div>
    )
}

export default PageFour