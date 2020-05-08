import React, { Component } from 'react'
import  { useState } from "react";
import ReactDOM from "react-dom";
import {Button} from "reactstrap"
const Input = () => {
  return (
    <div className="card-header">
  <textarea style={{width:'50em'}} placeholder="Wright your question here with '_'blanks."/><br/><br/>
  1. <input type="text" placeholder="write blank word in this box."/><br/><br/>
  2. <input type="text" placeholder="write blank word in this box."/><br/><br/>
  3. <input type="text" placeholder="write blank word in this box."/><br/><br/>
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
    render() {
        return (
            <div style={{paddingTop:100}}>
              <div className="card-header">
                <h1 style={{align: 'center'}}>Please define your questions.</h1>
              </div>
                <Form style={{paddingTop:'50px'}}/>
                <Button>Press for saving questions</Button>
            </div>
        )
    }
}
