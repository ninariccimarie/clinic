import React, { Component } from 'react'
import ReactDateTime from 'react-datetime'

import pages from './pages/Pages'
import Button from './Button'
import './react-datetime.css'

console.log('pages', pages)

const SelectButton = (props) => {
    const onChangePage = props.onChangePage
    if(props.currentPage === 1) {
        return (
            <Button onChangePage={onChangePage} text="Book an Appointment" />
        )
    } 
    else if(props.currentPage > 1 && props.currentPage <= 4) {
        return (
            <div>
                <Button onChangePage={onChangePage} text="Back" />
                <Button onChangePage={onChangePage} text="Next" />
            </div>
        )
    }
    else {
        return (
            <div>
                <Button onChangePage={onChangePage} text="Back" />
            </div>
        )
    }
}

export default class MedicalServices extends Component {
    constructor(props) {
        super(props);
        this.state = {category: '',
                      text: '', 
                      datetime: '', 
                      currentPage: 1,
                      firstName: '',
                      middleName: '',
                      lastName: '',
                      sex: 'female',
                      birthDate: '',
                      height: {ft: 0, inch: 0},
                      weight: 0
        }

        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleDateTimeChange = this.handleDateTimeChange.bind(this)
        this.handleChangePage = this.handleChangePage.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleSexChange = this.handleSexChange.bind(this)
        this.handleBirthDateChange = this.handleBirthDateChange.bind(this)
        this.handleHeightChange = this.handleHeightChange.bind(this)
        this.handleWeightChange = this.handleWeightChange.bind(this)
    }

    handleCategoryChange(category) {
        this.setState({category})
    }

    handleDateTimeChange(datetime) {
        this.setState({datetime})
    }

    handleChangePage(text) {
        const currentPage = this.state.currentPage
        if(text === "Book an Appointment" || text === "Next"){
            this.setState({currentPage: parseInt(currentPage) + 1})
        }
        else {
            this.setState({currentPage: parseInt(currentPage) - 1})
        }
    }

    handleFirstNameChange(firstName) {
        console.log('firstname', firstName)
        this.setState({firstName})
    }

    handleMiddleNameChange(middleName) {
        this.setState({middleName})
    }

    handleLastNameChange(lastName) {
        this.setState({lastName})
    }

    handleSexChange(sex) {
        this.setState({sex})
    }

    handleBirthDateChange(birthDate) {
        this.setState({birthDate})
    }

    handleHeightChange(e) {
        const { height } = this.state
        this.setState({height: Object.assign(height, {[e.target.name]: e.target.value})})
    }

    handleWeightChange(weight) {
        this.setState({weight})
    }

    render() {
        const { category, 
                datetime, 
                currentPage, 
                firstName, 
                middleName, 
                lastName, 
                sex,
                birthDate,
                height,
                weight
        } = this.state

        const PageToRender = pages[currentPage]
        // console.log('Page to render',PageToRender[this.state.currentPage])
        return (
            <div>
                <h2>Medical Services Offered</h2>
                <PageToRender 
                        category={category} 
                        datetime={datetime}
                        firstName={firstName}
                        middleName={middleName}
                        lastName={lastName}
                        sex={sex} 
                        birthDate={birthDate}
                        height={height}
                        weight={weight}
                        onCategoryChange={this.handleCategoryChange} 
                        onDateTimeChange={this.handleDateTimeChange}
                        onFirstNameChange={this.handleFirstNameChange}
                        onMiddleNameChange={this.handleMiddleNameChange}
                        onLastNameChange={this.handleLastNameChange}
                        onSexChange={this.handleSexChange}
                        onBirthDateChange={this.handleBirthDateChange}
                        onHeightChange={this.handleHeightChange}
                        onWeightChange={this.handleWeightChange}
                />
                <SelectButton onChangePage={this.handleChangePage} currentPage={this.state.currentPage}/>
            </div>
        )
    }
}