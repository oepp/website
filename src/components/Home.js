import React, { Component } from 'react'
import Cards from './UserContext/Cards';

export default class Home extends Component {
    render() {
        return (
            <div>      
                <h1 style={{float:'left'}}> Newest Game in our Storage</h1>
                <div className="btn-group-vertical col-md-8 align-right" style={{float:'right'}}>
                <button className="btn btn-primary">Make Your Own Game</button>
                <button className="btn btn-danger">Update Your Existing Game</button>
                </div>
                <Cards/>
            </div>
        )
    }
}
