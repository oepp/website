import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }
        fetch("http://localhost:3001/user/login", params)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.status === "success"){
                    alert("Login is success!");
                }
                this.setState({
                    submitting: false
                });
            });
    }
    render() {
        return (
            <div className="container" style ={{paddingLeft:275}}>
                <br/>
                <div className="card center" style={{width:400, marginTop:150}}>
                    <div className="card-body" style={{padding:30, width:400, height:300, backgroundColor:'#dfe7f3'}}>
                    <h1 className="card-title"style={{fontSize:20}} style={{paddingBlockStart:20}}style ={{paddingLeft:150}}>Sign in</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form style={{paddingLeft:50, paddingRight:50, width:500}}>
                            <div className="form-group " >
                            <label for="email"  style={{fontSize:13}} >Username</label>
                            <input type="text"  className="form-control" id="email" onChange = {this.setUsername.bind(this)} style ={{ width:300}}/>
                            </div>
                            <div className="form-group " >
                            <label for="exampleInputPassword1"  style={{fontSize:13}}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange = {this.setPassword.bind(this)} style ={{ width:300}}/>
                            </div>
                            <div>
                                <h5 style={{paddingLeft:170}}><a href="#" style={{backgroundColor:'#dfe7f3'}}>Forgot your account?</a></h5>
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
                    </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;
