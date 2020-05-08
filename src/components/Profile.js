import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/user/profile', {withCredentials: true}).then(res => {
            if (res.data !== undefined && res.data.data !== undefined) {
                const data = res.data.data;
                if (res.data.status === "success") {
                    console.log(data);
                    this.setState({
                        name: data.name,
                        surname: data.surname,
                        email: data.email,
                        username: data.username
                    });
                } else if (res.data.status === "error") {
                    alert(data.message);
                }
            }
        }).catch(function(error) {
            window.location = "http://localhost:3000/Login";
        })
    }

    onTextInput(event) {
        const field = event.target.name;
        const value = event.target.value;

    }

    render() {
        return (
            <div className="container" style={{paddingLeft:100,height:1000}}>
                <br/>
                <div className="card center"  style={{width:900, height:300, marginTop:100}} >
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                        <center><h1>User Information</h1></center> <br/>
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-row">
                                    <div className="col-6" style={{paddingLeft:75}}>
                                    <input name={'name'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.name} placeholder="Name"></input>
                                    </div> &nbsp; &nbsp; 
                                    <div className="col-5" style={{paddingLeft:50}}>
                                    <input name={'surname'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.surname} placeholder="Surname"></input>
                                    </div>  &nbsp; &nbsp; 
                                </div><br/>
                                <div className="form-row">
                                    <div className="col-6" style={{paddingLeft:75}}>
                                    <input name={'email'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.email} placeholder="Email"></input>
                                    </div>  &nbsp; &nbsp; 
                                    <div className="col-5" style={{paddingLeft:50}}>
                                    <input name={'username'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.username} placeholder="Username"></input>
                                    </div> &nbsp; &nbsp; 
                                </div><br/>
                                <div className="form-row">
                                    <div className="col-6" style={{paddingLeft:75}}>
                                    <input name={'password'} className="form-control form-control-lg" type="password" onChange={this.onTextInput.bind(this)} value={this.state.password} placeholder="Password"></input>
                                    </div>  &nbsp; &nbsp; 
                                    <div className="col-5" style={{paddingLeft:50}}>
                                    <input name={'confirmPassword'} className="form-control form-control-lg" type="password" onChange={this.onTextInput.bind(this)} value={this.state.confirmPassword} placeholder="Confirm Password"></input>
                                    </div> 
                                </div><br/><br/>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <div style={{paddingLeft:445}}>
                                    <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:'#5062e1'}}>&nbsp; &nbsp;Edit&nbsp; &nbsp;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card center"  style={{width:900, height:500, marginTop:20}} >
                    <div className="card-body" style={{padding:50,backgroundColor:'#fafafa'}}>
                        <center><h1 style={{marginBottom:30}}>COURSES</h1></center>
                        <table className="table table-hover" style={{height:300}}>
                                <thead>
                                    <tr style={{fontSize:20}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{fontSize:18}}>
                                    <th scope="row">1</th>
                                    <td>Language</td>
                                    <td>In Progress</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-success" style={{fontSize:18}}>%80</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-primary" style={{fontSize:18}}><Link to="./feedback?gameId=1">Feedback</Link></button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-danger"style={{fontSize:18}} >Remove</button>
                                        
                                    </td>
                                    </tr>
                                    <tr style={{fontSize:18}}>
                                    <th scope="row">2</th>
                                    <td>Music</td>
                                    <td>Completed</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-success" style={{fontSize:18}}>%100</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-primary" style={{fontSize:18}}><Link to="./feedback?gameId=1">Feedback</Link></button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-danger"style={{fontSize:18}} >Remove</button>
                                    </td>
                                    </tr>
                                    <tr style={{fontSize:18}}>
                                    <th scope="row">3</th>
                                    <td>Computer Sciene</td>
                                    <td>Completed</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-success" style={{fontSize:18}}>%100</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-primary" style={{fontSize:18}}><Link to="./feedback?gameId=1">Feedback</Link></button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-danger"style={{fontSize:18}} >Remove</button>
                                    </td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        );
    }
}
export default Profile;