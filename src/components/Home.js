import React, { Component } from 'react'
import Cards from './UserContext/Cards';

export default class Home extends Component {
    render() {
        var bstyle={
            fontSize:20
        }
        return (
            <div style={{marginBottom:100,marginTop:-10, paddingLeft:10,paddingTop:110}}>      
               <div className="card-header">
               <h1 style={{textAlign:'center',fontSize:30}}><b>Most relevant games in our storage</b><i class="fa fa-book" 
               aria-hidden="true" style={{float:'left',fontSize:45}}></i> <i class="fa fa-gamepad"style={{float:'left',fontSize:45,paddingTop:-10}} aria-hidden="true"></i> </h1>
               </div>
               
               <div className="btn-group-vertical col-md-4 float-center" style={{paddingTop:30,paddingLeft:100}}> 
               <button className="btn btn-primary" ><h5 style={bstyle}>Make Your Own Game</h5></button>
                <button className="btn btn-danger"><h5 style={bstyle}>Update Your Existing Game</h5></button>
              </div> <br/><br/>
                <Cards/>
            </div>
        )
    }
}
