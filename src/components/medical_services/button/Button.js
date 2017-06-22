import React, { Component } from 'react'
import styles from './button.scss'

const Button = (props) => {
    const text = props.text
    const value = {text}

    const handleClick = (e) => {
        props.onChangePage(e.target.value)
    }
    return(
        <div className={styles.button }>
            <button value={text} onClick={handleClick}>{text}</button>
        </div>
    )
}

export default Button