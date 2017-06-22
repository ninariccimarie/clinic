import React, { Component } from 'react'


const Confirmation = (props) => {
    return (
        <div>
            <div>
                <label>medical service: {props.category}</label>
                <label>date: {props.datetime.format('MMMM DD, YYYY')}</label>
                <label>time: {props.datetime.format('hh:mm A')}</label>
            </div>
            <div>
                <label>first name: {props.firstName}</label>
                <label>middle name: {props.middleName}</label>
                <label>last name: {props.lastName}</label>
                <label>sex: {props.sex}</label>
                <label>birth date: {props.birthDate}</label>                            
            </div>
            <div>
                <label>height: {props.height.ft} ft {props.height.inch} inch/es</label>
                <label>weight: {props.weight}</label>                
            </div>
        </div>
    )
}

export default Confirmation