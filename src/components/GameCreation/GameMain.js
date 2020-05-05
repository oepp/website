import React, { Component } from 'react'
import { Table, Label } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

export default class GameMain extends Component {
    render() {
        var labelStyle={
            fontSize:'25px',
            textAlign:'center'
        }
        var inputStyle={
            fontSize:'20px',
            width:'20em',
            paddingBottom:10
        }
        return (
            <div className="container" style={{paddingTop:100}}>
                <h1><b>You are here in Game creation page.</b></h1><hr/>
                <div className="card-header">
                    <h1 style={{textAlign:'center'}}><b>Explain your game with fill in below questions.</b></h1>
                </div>
                <div className="card-body">
                <Table>
                    <tr>
                        
                            <Label style={labelStyle}> 1. What is your game title?</Label><br/>
                            <input  style={inputStyle} type="text" placeholder="Enter title here..."></input>
                        
                    </tr>
                    <tr>
                        
                        <Label style={labelStyle}>2. What is your game description?</Label><br/>
                        <textarea style={inputStyle} placeholder="Enter description here..."></textarea>
                    
                </tr> <tr>
                        
                        <Label style={labelStyle}>3.Choose image?</Label><br/>
                        <input type="file" style={inputStyle} ></input>
                    
                </tr> <tr>
                        
                        <Label style={labelStyle}>4. Choose category?</Label><br/>                     
          <select  style={inputStyle} onChange={this.handleChange}>
            <option value="elma">Music</option>
            <option value="armut">Language</option>
            <option value="havuç">Science</option>
            <option value="muz">Sport</option>
          </select>     
                </tr>
                <tr>
                <NavLink to={"/questions"} tag={Link}>
                   <button style={{width:'40em',height:'5em',float:'right',fontSize:'10px'}} className="btn btn-primary">Continue with defining questions =></button></NavLink>      
                </tr> 
                </Table>
                </div>
            </div>
        )
    }
}
