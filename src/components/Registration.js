import React,{Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
            name: "",
            surname: "",
            email: "",
            username: "",
            password: "",
            confirmpassword: ""
        }

    }
    setName(event) {
       this.setState({
           name: event.target.value
       })  
    }
    setSurname(event){
        this.setState({
            surname: event.target.value
        })
    }
    setEmail(event){
        this.setState({
            email: event.target.value
        })
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
    setConfirmPassword(event){
        this.setState({
            confirmpassword: event.target.value
        })
    }
    submitClick(event){
        event.preventDefault();
        if(this.state.password !== this.state.confirmpassword){
            alert("Password is not matching")
            return false
        }
        this.setState({
            submitting: true
        });
        const params = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword

            })
        }
        fetch("http://localhost:3001/user/register", params)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.status === "success"){
                    alert("Your registration is successful!");
                    window.location = "http://localhost:3000/login";
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
        return (
            <div className="container" style={{paddingLeft:150}}>
                <div className="card center"  style={{width:900,height:450, marginTop:120}} >
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                        <center><h1 className="card-title">Sign Up</h1></center><br/>
                        <div className="row" style={{paddingRight:100 }}  >
                            <div className="col-sm">
                                <form style={{paddingLeft:50,width:450}}>
                                    <div className="form-group">
                                        <input type="text" autoComplete="off" autoCorrect="off" placeholder="Name" className="form-control" id="name" onChange = {this.setName.bind(this)} style={{fontSize:15}}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" autoComplete="off" autoCorrect="off" placeholder="Surname" className="form-control" id="surname" onChange = {this.setSurname.bind(this)} style={{fontSize:15}} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" autoComplete="off" autoCorrect="off" placeholder="E-mail" className="form-control" id="email" onChange = {this.setEmail.bind(this)} style={{fontSize:15}}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" autoComplete="off" autoCorrect="off" placeholder="Username" className="form-control" id="username" onChange = {this.setUsername.bind(this)} style={{fontSize:15}}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Password" className="form-control" id="password" onChange = {this.setPassword.bind(this)}style={{fontSize:15}}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" placeholder="Confirm Password" className="form-control" id="confirmpassword" onChange = {this.setConfirmPassword.bind(this)} style={{fontSize:15}}/>
                                    </div> <br/>
                                        {this.state.submitting === true ?
                                        <button className="btn btn-info" style={{backgroundColor:"#17a2b8" ,fontSize:16}} type="button" disabled>
                                        <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                                &nbsp;Submitting...
                                        </button>
                                        : 
                                        <button type="submit" onClick={this.submitClick.bind(this)} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}} >Submit</button>
                                        }
                                </form>
                            </div>
                            <Fragment>
                                    <img style={{width:320, height:320}} src="/img/logo_transparent.png"/>
                            </Fragment>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
export default Registration;
