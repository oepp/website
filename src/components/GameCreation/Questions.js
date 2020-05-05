import React, { Component } from 'react'
import  { useState } from "react";
import ReactDOM from "react-dom";

const Input = () => {
  return (
  <input placeholder="Your input here" />
  );
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add input</button>
      {inputList}
    </div>
  );
};
export default class Questions extends Component {
    render() {
        return (
            <div style={{paddingTop:100}}>
                <Form/>
            </div>
        )
    }
}
