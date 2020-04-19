import React, { Component } from 'react'

export default class CardUI extends Component {
    constructor(props){
        super(props)
    }
    displayImage(){
        let data = this.props.obj.GameImage;
        let buff = new Buffer(data);
        let base64data = buff.toString('base64');
        return base64data;
      }
    render() {
        return(
            <div className="card text-center shadow" style={{marginBottom:20,width:300}}>
                <div className="overflow">
                    <img className="card-img-top" src={`data:image/jpeg;base64,${this.displayImage()}`} style={{height:200}} alt="Image 1"/>
                </div>
                <div className="card-body text-dark" style={{height:160}}>
                    <h4 className="card-title">{this.props.obj.GameTitle}</h4>
                    <p className="card-text text-secondary" style={{fontSize:'1em'}}>
                       {this.props.obj.GameDescription}
                    </p>
                    <a href="#" className="btn btn-outline-success">See Details</a>
                </div>
                <div className="card-footer">
                    <p>{this.props.obj.CategoryName}</p>
                </div>
            </div>
        );
    }
}
