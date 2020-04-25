import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ForgotAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
            email: "",
        }
    }

    setEmail(event){
        this.setState({
            email: event.target.value
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
                email: this.state.email,
            })
        }
        fetch("http://localhost:3001/user/forgot/password", params)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.status === "success"){
                    alert("Code Sent! Check your email!");
                    window.location.replace("/ConfirmPassword");
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
                <div className="card center"  style={{width:600, height:300, marginTop:100, paddingTop:25}} >
                    <div className="card-body" style={{ backgroundColor:'#fafafa'}}>
                    <center><h2>Forgot Your Password?</h2></center> <br/>
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-row">
                            <div className="col-6" style={{paddingLeft:75}}>
                            <input className="form-control form-control-lg" type="text" placeholder="Email" id="email" onChange = {this.setEmail.bind(this)}></input>
                            </div> 
                            <div className="col-5" style={{paddingLeft:50}}>
                            <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:'#5062e1'}} onClick={this.submitClick.bind(this)}>
                                {this.state.submitting === true ?
                                "Submitting..."
                                :
                                "Send Verification Code"
                                }
                            </button>
                            </div>  &nbsp; &nbsp;
                            </div><br/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        );
    }




}
export default ForgotAccount;