import React, { Component } from 'react'

const PageThree = (props) => {
    const datetime = props.datetime
    return (
        <div>
            <h1>{datetime.format('MMMM DD, YYYY hh:mm A')}</h1>
        </div>
    )
}

export default PageThree