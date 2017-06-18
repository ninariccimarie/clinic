import React, { Component } from 'react'


const Button = (props) => {
    const text = props.text
    const value = {text}

    const handleClick = (e) => {
        props.onChangePage(e.target.value)
    }
    return(
        <div>
            <button value={text} onClick={handleClick}>{text}</button>
        </div>
    )
}

export default Button