import React, { Component } from 'react'
import ReactDateTime from 'react-datetime'


const FirstName = (props) => {
    const onFirstNameChange = (e) => {
        props.onChange(e.target.value)
    }
    return(
        <label>First Name: 
            <input type="text" value={props.firstName} onChange={onFirstNameChange}/>
        </label>
    )
}

const MiddleName = (props) => {
    const onMiddleNameChange = (e) => {
        props.onChange(e.target.value)
    }
    return(
        <label>Middle Name: 
            <input type="text" value={props.middleName} onChange={onMiddleNameChange}/>
        </label>
    )
}

const LastName = (props) => {
    const onLastNameChange = (e) => {
        props.onChange(e.target.value)
    }
    return(
        <label>Last Name: 
            <input type="text" value={props.lastName} onChange={onLastNameChange} />
        </label>
    )
}

const sex = ['male', 'female']

const Sex = (props) => {
    const onSexChange = (e) => {
        props.onChange(e.target.value)
    }
    return(
        <label>Sex: 
            <select value={props.sex} onChange={onSexChange}>
                {sex.map((esex) => 
                	<option key={esex} value={esex}>{esex}</option>)}
            </select>
        </label>
    )
}

const BirthDate = (props) => {
    const onBirthDateChange = (e) => {
        props.onChange(e)
    }
    return(
        <label>Birth Date:
            <ReactDateTime value={props.birthDate} onChange={onBirthDateChange} timeFormat={false}/>
        </label>
    )
}

const Height = (props) => {
    const onHeightChange = (e) => {
        props.onChange(e)
    }
    return(
        <label>Height:
            <input type="text" name="ft" value={props.ft} onChange={onHeightChange} /> 
            ft
            <input type="text" name="inch" value={props.inch} onChange={onHeightChange} />
            inch
        </label>
    )
}

const Weight = (props) => {
    const onWeightChange = (e) => {
        props.onChange(e.target.value)
    }
    return(
        <label>
            <input type="text" name="weight" value={props.weight} onChange={onWeightChange} />
            lbs
        </label>
    )
}

const PatientDetails = (props) => {
    console.log('IPD:Weight:', props.weight)
    return (
        <div>
            <h1>Patient's Details</h1>
            <div>
                <FirstName firstName={props.firstName} onChange={props.onFirstNameChange}/>
                <MiddleName middleName={props.middleName} onChange={props.onMiddleNameChange} />
                <LastName lastName={props.lastName} onChange={props.onLastNameChange} />
                <Sex sex={props.sex} onChange={props.onSexChange} />
                <BirthDate birthDate={props.birthDate} onChange={props.onBirthDateChange} />
                <Height ft={props.height.ft} inch={props.height.inch} onChange={props.onHeightChange} />
                <Weight weight={props.weight} onChange={props.onWeightChange} />
            </div>
        </div>
    )
}

export default PatientDetails