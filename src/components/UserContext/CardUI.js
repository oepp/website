import React from 'react'

import './card-style.css';
const Card =props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img className="card-img-top" src={props.imgsrc} style={{height:'10em'}} alt="Image 1"/>
            </div>
            <div className="card-body text-dark" style={{height:'20em'}}>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                   {props.text}
                </p>
                <a href="#" className="btn btn-outline-success">See Details</a>
            </div>
        </div>
    );
}
export default Card;