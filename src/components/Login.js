import React,{Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
            username: "",
            password: ""
        }

    }

    setUsername(event){
        this.setState({
            username: event.target.value
        })
    }

    setPassword(event){
        this.setState({
            password: event.target.value
        })
    }

    submitClick(event){
        event.preventDefault();
        if(this.state.username == "" ||  this.state.password == "" ){
            alert("Username or password can not be null.");
            return false
        }
        this.setState({
            submitting: true
        });

        const params = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:3001/user/login', params, {withCredentials: true}).then(result => {
            if(result.data.status === "success"){
                alert("Login is success!");
                window.location = "http://localhost:3000/Profile";
            } else if (result.data.status === "error") {
                alert(result.data.message);
            }
            this.setState({
                submitting: false
            });
        });
    }
    render() {
        return (
            <div className="container" style={{paddingLeft:150}}>
                <div className="card center"style={{width:775,height:350,marginTop:150}}>
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                        <center><h1 className="card-title">Sign in</h1></center><br/>
                        <div className="row" style={{paddingRight:100}}>
                            <div className="col-sm">
                                <form  style={{paddingLeft:80}}>
                                    <div className="form-group">
                                        <label htmlFor="email"  style={{fontSize:15}}>Username</label>
                                        <input type="text" autoComplete="off" autoCorrect="off" className="form-control" id="email" onChange = {this.setUsername.bind(this)} style ={{ width:300}}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1"  style={{fontSize:15}}>Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" onChange = {this.setPassword.bind(this)} style ={{ width:300}}/>
                                    </div>
                                    <div>
                                        <h5 style={{paddingLeft:170}}><a href="./ForgotAccount" style={{backgroundColor:'#fef3d0', color:'#001fff'}}>Forgot your account?</a></h5>
                                    </div>
                                    {this.state.submitting === true ?
                                    <button className="btn btn-info" style={{backgroundColor:"#17a2b8" ,fontSize:16}} type="button" disabled>
                                    <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                            &nbsp;Please Wait..
                                    </button>
                                    : 
                                    <button type="submit" onClick={this.submitClick.bind(this)} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}} >Login</button>
                                    }             
                                </form>
                            </div>
                            <Fragment>
                                    <img style={{width:250, height:250}} src="/img/logo_transparent.png"/>
                            </Fragment>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
