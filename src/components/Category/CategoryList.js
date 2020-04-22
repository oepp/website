import React, { Component } from 'react'
import CategoryCard from './CategoryCard'


export default class CategoryList extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div style={{paddingTop:100}}>
                <h1>A.Yuksel</h1>
                {this.props.history.location.state.CategoryName}
            </div>
        )
    }
}
