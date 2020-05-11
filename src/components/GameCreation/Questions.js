import React, { Component } from 'react'
import  { useState } from "react";
import ReactDOM from "react-dom";
import {Button} from "reactstrap"
const Question =()=>{
    const [inputList, setInputList] = useState([]);
    const onAddBlankClick =event =>{
    setInputList(inputList.concat(<Blank key={inputList.length}/>))
  }
  return(
    <div>
      {inputList}
      <button className="btn btn-primary" onClick={onAddBlankClick}>Add Blank</button>
    </div>
  )
}
const Blank=()=>{
  return(
    <div style={{paddingBottom:20}}>
      <input type ="text" name="blank">
      </input><input style={{marginLeft:10}} type="checkbox"></input>
    </div>
  )
}
const Input = () => {
  return (
    <div className="card-header">
    <p style={{fontSize:20}}><b>Enter question description here:</b></p>
   <textarea style={{width:'50em'}} placeholder="Write here to your question's description in this place.
    e.g 'This question includes Nelson Mendela'  personal life.'"/><br/><br/>
    <p>You write your sentence's word box/boxes. And please checked for your blanks.</p>
 <Question/>
  </div>
  );
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div style={{float: 'center'}}>
    
      {inputList}
      <button className="btn btn-primary" onClick={onAddBtnClick}>Add input</button>
    </div>
  );
};
export default class Questions extends Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
            <div style={{paddingTop:100}}>
              <div className="card-header">
                <h1 style={{align: 'center'}}>Fill in blanks page please define your questions.</h1>
              </div>
              <div style={{padding:'10px',paddingTop:'30px',width:'50%'}}>
                <Form style={{paddingTop:'50px'}}/>
                <Button>Press for saving questions</Button>
              </div>
            </div>
        )
    }
}