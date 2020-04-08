import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Support extends Component {
    constructor(props){
        super(props);
        this.state= {
            submitting: false,
            email: "",
            subjectType: "",
            message: ""
        }
    }

    setEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    setSubjectType(event){
        this.setState({
            subjectType: event.target.value
        })
    }

    setMessage(event){
        this.setState({
            message: event.target.value
        })
    }

    submitClick(event){
        event.preventDefault();
        if(this.state.email == "" ||  this.state.message == "" ){
            alert("Email and Message can not be null.");
            return false
        }
        this.setState({
            submitting: true
        });

        const params = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                subjectType: this.state.subjectType,
                message: this.state.message
            })
        }
        fetch("http://localhost:3001/user/support", params)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.status === "success"){
                    alert("Message is success!");
                }
                this.setState({
                    submitting: false
                });
            });
    }

    sendClick()
    {
        alert("sending...");
    }
    render() {
        return (
            <div className="container" style={{paddingLeft:200, marginBottom:20, marginTop:-40,paddingTop:100}}>
                <br/>
                <div className="card center"  style={{width:700}} >
                    <div className="card-body" style={{padding:30, width:700, height:470, backgroundColor:'#dfe7f3'}}>
                    <h1 className="card-title" style={{textAlign:"center"}} style={{paddingLeft:250}}>Contact Us</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form style={{paddingLeft:80, paddingRight:30, width:600}}>
                            <div className="form-group">
                                <label for="supportEmail" style={{fontSize:13}}>Email address</label>
                                <input type="email" className="form-control" id="supportEmail" onChange = {this.setEmail.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label for="subjectType" style={{fontSize:13}}>Subject Type</label>
                                <select className="form-control" id="subjectType"style={{fontSize:14}}>
                                <option >General Information</option>
                                <option>Membership</option>
                                <option>Technical</option>
                                <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="message" style={{fontSize:13}}>Message</label>
                                <textarea className="form-control" id="message" rows="10" onChange = {this.setMessage.bind(this)}></textarea>
                            </div>
                            {this.state.submitting === true ?
                            <button className="btn btn-info" style={{backgroundColor:"#17a2b8" ,fontSize:16}} type="button" disabled>
                            <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                    &nbsp;Please Wait..
                          </button>
                            : 
                             <button type="submit" onClick={this.submitClick.bind(this)} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}} >Send</button>
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

export default Support;
