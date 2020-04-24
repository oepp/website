import React, { Component } from 'react'

export default class ProductCard extends Component {
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
        return (
           <div style={{backgroundColor:'#33CFFF'}}>
           <div style={{float:'left'}}>
            <img className="card-img-start" src={`data:image/jpeg;base64,${this.displayImage()}`} style={{height:500,width:300,float:'left'}} alt="Image 1"/>
            </div><div style={{float:'right',fontSize:'20px',paddingLeft:'20px',paddingTop:'10px',paddingRight:'20px',color:'#FFF'}}>
                <p className="card-title">Description: {this.props.obj.GameDescription}</p>
                <ul  style={{fontSize:'1em'}}>
                   <li>ReleaseTime: {this.props.obj.ReleaseTime}</li>
                   <li>Total Income: {this.props.obj.Income}</li>
                   <li>CreatorName: {this.props.obj.username}</li>
                   <li>Email: {this.props.obj.email}</li>
                </ul>
              </div> 
            </div>
            
        )
    }
}
