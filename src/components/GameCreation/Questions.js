import React, { Component } from 'react'
import  { useState } from "react";
import ReactDOM from "react-dom";
import {Button} from "reactstrap"
import FillInBlanks from './FillInBlanks';
import FlashCards from './FlashCards';

export default class Questions extends Component {
  constructor(props){
    super(props)
  }
  routePage = (value) =>{
    if(value ==1){
      return (
        <div> 
          <div className="card-header">
            <h1 style={{align: 'center'}}>Fill in blanks page please define your questions.</h1>
          </div>
          <div style={{padding:'10px',paddingTop:'30px',width:'50%'}}>
            <FillInBlanks/>
          </div>
        </div>
    )
    }else if(value==0){
      return (
        <div>
        
          <div className="card-header">
            <h1 style={{align: 'center'}}>Flash in blanks page please define your questions.</h1>
          </div>
          <div style={{padding:'10px',paddingTop:'30px',width:'50%'}}>
            <FlashCards/>
          </div>
        </div>
    )
    }else
    return "Nothing selected"
  }
    render() {
        return (
            <div style={{paddingTop:100}}>  
             {this.routePage(this.props.history.location.state.GameTemp)}
            </div>
        )
    }
}