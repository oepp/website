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
      </input><input style={{marginLeft:10}} type="radio"></input>
    </div>
  )
}
const Input = () => {
  return (
    <div className="card-header">
    <p style={{fontSize:20}}><b>Enter question description here:</b></p>
   <textarea style={{width:'50em'}} placeholder="Write here to your question's description in this place.
    e.g 'This question includes Nelson Mendela'  personal life.'"/><br/><br/>
    <p style={{fontSize:20}}>Press the button for adding blanks.You write your sentence's word box/boxes. And please checked for your blanks.</p>
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
export default class FlashCards extends Component {
    render() {
        return (
            <div>
                <Form style={{paddingTop:'50px'}}/>
                <Button>Press for saving questions</Button>
            </div>
        )
    }
}

