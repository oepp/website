import React, { Component } from 'react'
import Cards from './UserContext/Cards';
import { NavLink, Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        var bstyle={
            fontSize:20
        }
        return (
            <div style={{marginBottom:100,marginTop:-10, paddingLeft:30,paddingTop:110}}>      
               <div className="card-header">
                    <h1 style={{textAlign:'center',fontSize:30}}><b>Most Relevant Games In Our Storage</b>
                        <i class="fa fa-book" aria-hidden="true" style={{float:'left',fontSize:45}}></i>
                        <i class="fa fa-gamepad"style={{float:'left',fontSize:45,paddingTop:-10}} aria-hidden="true"></i> 
                    </h1>
               </div>
               <div className="btn-group-vertical col-md-4 float-center" style={{paddingTop:30,paddingLeft:400}}> 
                    <NavLink to={"/profile"} tag={Link}> 
                        <button className="btn btn-success" style={{paddingRight:70, paddingLeft:70}}><h5 style={bstyle}>Make Your Own Game</h5></button>
                    </NavLink>
              </div><br/><br/>
                <Cards/>
            </div>
        )
    }
}
