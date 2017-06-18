import React, { Component } from 'react';
import ReactDateTime from 'react-datetime'

import MedicalCategories from './../MedicalCategories'
import About from './../About'
import './../react-datetime.css'

// export default class PageOne extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {category: '', datetime: ''}
//         this.handleCategoryChange = this.handleCategoryChange.bind(this)
//         this.handleDateTimeChange = this.handleDateTimeChange.bind(this)
//     }
    
//     handleCategoryChange(category) {
//         this.setState({category})
//     }

//     handleDateTimeChange(datetime) {
//         this.setState({datetime})
//     }

//     render() {
//         console.log("Category",this.state.category)
//         console.log(this.state.datetime)
//         return (
//         <div>
//             <MedicalCategories onCategoryChange={this.handleCategoryChange}/>
//             <ReactDateTime value={this.state.datetime} onChange={this.handleDateTimeChange} />
//         </div>
//     )
//     }
// }

const PageOne = (props) => {
    const category = props.category
    console.log("PageOne Category", {category})
    return(
        <div>
            <MedicalCategories onCategoryChange={props.onCategoryChange}/>
            <ReactDateTime value={props.datetime} onChange={props.onDateTimeChange}/>
        </div>
    )
}

export default PageOne