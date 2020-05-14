import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ConfirmPassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
            password: "",
            confirmpassword:"",
            passwordResetCode:""

        }
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
    setResetPasswordCode(event){
        this.setState({
            passwordResetCode: event.target.value
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
                password: this.state.password,
                confirmpassword: this.state.confirmpassword,
                passwordResetCode: this.state.passwordResetCode,
            })
        }
        fetch("http://localhost:3001/user/forgot/confirm/password", params)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.status === "success"){
                    alert("Password updated succesfully!");
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
            <div className="container" style={{paddingLeft:250}}>
                <br/>
                <div className="card center"  style={{width:600, height:350, marginTop:100}} >
                    <div className="card-body" style={{ backgroundColor:'#fafafa'}}>
                    <center><h2>User Information</h2></center> <br/>
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-row" style={{paddingLeft:150,fontSize:13,fontWeight:'normal'}}>
                            <div className="col-8" >
                            <label for="exampleInputPassword1" >Verification Code</label>
                            <input className="form-control form-control-lg" type="text" placeholder="Verification Code" onChange = {this.setResetPasswordCode.bind(this)}></input>
                            </div> &nbsp; &nbsp; 
                            </div><br/>
                            <div className="form-row" style={{paddingLeft:150,fontSize:13,fontWeight:"lighter"}}>
                            <div className="col-8" >
                            <label for="exampleInputPassword1"> New Password</label>
                            <input className="form-control form-control-lg" type="password" placeholder="New Password" onChange = {this.setPassword.bind(this)}></input>
                            </div>  &nbsp; &nbsp; 
                            </div><br/>
                            <div className="form-row" style={{paddingLeft:150,fontSize:13,fontWeight:'normal'}}>
                            <div className="col-8" >
                            <label for="exampleInputPassword1"> Confirm Password</label>
                            <input className="form-control form-control-lg" type="password" placeholder="Confirm Password" onChange = {this.setConfirmPassword.bind(this)}></input>
                            </div>  &nbsp; &nbsp; 
                            </div><br/>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <div style={{paddingLeft:250}}>
                            <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:'#5062e1'}} onClick={this.submitClick.bind(this)}>
                                {this.state.submitting === true ?
                                "Submitting..."
                                :
                                "Submit"
                                }
                            </button>                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            
        );
    }




}
export default ConfirmPassword;