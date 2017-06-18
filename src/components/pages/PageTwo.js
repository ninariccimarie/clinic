import React, { Component } from 'react'

const PageTwo = (props) => {
    const category = props.category
    console.log('Page Two', {category})
    return (
        <div>
            <h1>{category}</h1>
        </div>
    )
}

export default PageTwo