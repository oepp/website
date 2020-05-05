import React, { Component } from 'react'
import { Table, Label } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

export default class GameMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
            GameTitle: "",
            GameDescription: "",
            GameImage: null,
            CategoryID: 0,
        }

    }
    setGameTitle(event) {
        this.setState({
            GameTitle: event.target.value
        })  
     }
     setGameDescription(event){
         this.setState({
             GameDescription: event.target.value
         })
     }
     setGameImage(event){
         this.setState({
             GameImage: event.target.value
         })
     }
     setCategoryID(event){
         this.setState({
             CategoryID: event.target.value
         })
     }
    
     submitClick(event){
         event.preventDefault();
         this.setState({
             submitting: true
         });
         const params = {
             method: "POST",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify({
                 GameTitle: this.state.GameTitle,
                 GameDescription: this.state.GameDescription,
                 GameImage: this.state.GameImage,
                 CategoryID: this.state.CategoryID,
             })
         }
         fetch("http://localhost:3001/games/addGame", params)
             .then(res => res.json())
             .then(result => {
                 console.log(result);
                 if(result.status === "success"){
                     alert("Game Added Succesfully!!");
                 }
                 if(result.status === "error"){
                     alert(result.message);
                 }
                 this.setState({
                     submitting: false
                 });
             });
     }
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
        var cardStyle={
            border:'5px solid lightblue',
            marginTop:'20px'
        }
        return (
            <div className="container" style={{paddingTop:100}}>
                <h1><b>You are here in Game creation page.</b></h1><hr/>
                <div className="card-header" style={cardStyle}>
                    <h1 style={{textAlign:'center'}}><ins><b>Explain your game with fill in below questions.</b></ins></h1>
                </div>
                <div className="card-body" style={cardStyle}>
                <Table>
                    <form>
                    <tr>
                            <Label style={labelStyle}> 1. What is your game's title?</Label><br/>
                            <input  style={inputStyle} id="GameTitle" onChange = {this.setGameTitle.bind(this)} type="text" placeholder="Enter title here..."></input>
                    </tr>
                    <tr>
                        
                        <Label style={labelStyle}>2. What is your game's description?</Label><br/>
                        <textarea style={inputStyle} id="GameDescription" onChange = {this.setGameDescription.bind(this)} placeholder="Enter description here..."></textarea>
                    
                </tr> <tr>
                        
                        <Label style={labelStyle}>3.Choose image.</Label><br/>
                        <input type="file" id="GameImage" onChange = {this.setGameImage.bind(this)} style={inputStyle} ></input>
                    
                </tr> <tr>
                        
                        <Label style={labelStyle}>4. Choose category.</Label><br/>                     
          <select  style={inputStyle} id="CategoryID" onChange = {this.setCategoryID.bind(this)}>
            <option value={2}>Music</option>
            <option value={1}>Language</option>
            <option value={3}>Science</option>
            <option value={4}>Sport</option>
          </select><br/><br/>   
          {this.state.submitting === true ?
                                    <button className="btn btn-info" style={{backgroundColor:"#17a2b8" ,fontSize:16}} type="button" disabled>
                                    <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                            &nbsp;Submitting...
                                </button>
                                    : 
                                    <button type="submit" onClick={this.submitClick.bind(this)} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}} >Create</button>
                                    }  
                </tr><br/>
                <tr>
                <NavLink to={"/questions"} tag={Link}>
                   <button style={{width:'20em',float:'right',fontSize:'30px'}} className="btn btn-primary">Continue with defining questions =></button></NavLink>      
                </tr> 
                </form>
                </Table>
                </div>
            </div>
        )
    }
}
