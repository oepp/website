import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
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
            confirmPassword: "",
            contents: []
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

        axios.get('http://localhost:3001/user/profile/contents', {withCredentials: true}).then(res => {
            if (res.data !== undefined && res.data.data !== undefined) {
                const data = res.data.data;
                if (res.data.status === "success") {
                    this.setState({
                        contents: data
                    });
                }
            }
        })
    }

    onTextInput(event) {
        const field = event.target.name;
        const value = event.target.value;

        this.setState({
            ...this.state,
            [field]: value
        });
    }

    onEditForm(event) {
        console.log("Updating user");
        if (this.state.password.trim() !== "" && this.state.password !== this.state.confirmPassword) {
            alert("Password and confirm password is not matching!");
            return false;
        }

        const params = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        axios.post('http://localhost:3001/user/profile', params, {withCredentials: true}).then(result => {
            if (result.data) {
                alert(result.data.message);
            }

            this.setState({
                submitting: false
            });
        }).catch(function(error) {
            window.location = "http://localhost:3000/Login";
        })
    }

    render() {
        const contents = [];
        if (this.state.contents && this.state.contents.length > 0) {
            this.state.contents.forEach(item => {
                contents.push(
                    <tr style={{fontSize:18}}>
                        <th scope="row">{item.id}</th>
                        <td>{item.course}</td>
                        <td>In Progress</td>
                        <td>
                            <button type="button" class="btn btn-outline-success" style={{fontSize:18}}>%100</button>
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-outline-primary" style={{fontSize:18}}><Link to={"./feedback?gameId=" + item.id}>Feedback</Link></button>
                            &nbsp;&nbsp;
                            <button type="button" class="btn btn-outline-danger"style={{fontSize:18}} >Remove</button>
                            
                        </td>
                    </tr>
                );
            });
        }
        return (
            <div className="container" style={{paddingLeft:100,height:1200}}>
                <br/>
                <div className="card center"  style={{width:900, height:300, marginTop:100}} >
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                        <center><h1>User Information</h1></center> <br/>
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-row">
                                    <div className="col-6" style={{paddingLeft:75}}>
                                        <input name={'name'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.name} placeholder="Name"></input>
                                    </div>&nbsp;&nbsp; 
                                    <div className="col-5" style={{paddingLeft:50}}>
                                        <input name={'surname'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.surname} placeholder="Surname"></input>
                                    </div>&nbsp;&nbsp; 
                                </div><br/>
                                <div className="form-row">
                                    <div className="col-6" style={{paddingLeft:75}}>
                                        <input name={'email'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.email} placeholder="Email"></input>
                                    </div>  &nbsp; &nbsp; 
                                    <div className="col-5" style={{paddingLeft:50}}>
                                        <input name={'username'} className="form-control form-control-lg" type="text" onChange={this.onTextInput.bind(this)} value={this.state.username} placeholder="Username"></input>
                                    </div>&nbsp;&nbsp; 
                                </div><br/>
                                <div className="form-row">
                                    <div className="col-6" style={{paddingLeft:75}}>
                                        <input name={'password'} className="form-control form-control-lg" type="password" onChange={this.onTextInput.bind(this)} value={this.state.password} placeholder="Password"></input>
                                    </div>  &nbsp; &nbsp; 
                                    <div className="col-5" style={{paddingLeft:50}}>
                                        <input name={'confirmPassword'} className="form-control form-control-lg" type="password" onChange={this.onTextInput.bind(this)} value={this.state.confirmPassword} placeholder="Confirm Password"></input>
                                    </div> 
                                </div><br/><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div style={{paddingLeft:425}}>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={this.onEditForm.bind(this)} style={{backgroundColor:'#5062e1', fontSize:15}}>&nbsp;&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-group-vertical col-md-4 float-center" style={{ marginTop:30, marginBottom:30, paddingLeft:300}}>
                    <NavLink to={{
                                pathname:'/gameMain',
                                state:{
                                ID:this.state.username
                                }}} tag={Link}>
                                <button style={{width:'10em',fontSize:'30px'}} className="btn btn-danger">
                                    Create New Game 
                                </button>
                    </NavLink> 
                </div>
                <div className="card center"  style={{width:900, height:450, marginTop:20}} >
                    <div className="card-body" style={{padding:50,backgroundColor:'#fafafa'}}>
                        <center><h1 style={{marginBottom:30}}>GAMES</h1></center>
                        <table className="table table-hover" style={{height:300}}>
                                <thead>
                                    <tr style={{fontSize:20}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Game</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contents}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        );
    }
}
export default Profile;   
