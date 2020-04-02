import React,{Component} from 'react';
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
                password: this.state.password
            })
        }
        fetch("http://localhost:3001/user/register", params)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.status === "success"){
                    alert("Your registration is successful!");
                }
                this.setState({
                    submitting: false
                });
            });
    }
    
    render() {
        return (
            <div className="container" style={{paddingLeft:320}}>
                <br/>
                <div className="card center"  style={{width:500, marginTop:100}} >
                    <div className="card-body" style={{padding:50, width:500, height:400, backgroundColor:'#dfe7f3'}}>
                    <h1 className="card-title" style={{textAlign:"center"}} style={{paddingLeft:150}}>Sign Up</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form style={{paddingLeft:50, paddingRight:50, width:500}}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" id="name" onChange = {this.setName.bind(this)} style={{fontSize:15}}/>
                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="Surname" className="form-control" id="surname" onChange = {this.setSurname.bind(this)} style={{fontSize:15}} />
                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="E-mail" className="form-control" id="email" onChange = {this.setEmail.bind(this)} style={{fontSize:15}}/>
                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="Username" className="form-control" id="username" onChange = {this.setUsername.bind(this)} style={{fontSize:15}}/>
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
                    </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Registration;
