import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Support extends Component {
    sendClick()
    {
        alert("sending...");
    }
    render() {
        return (
            <div className="container" style={{paddingLeft:200, marginBottom:50, marginTop:-30}}>
                <br/>
                <div className="card center"  style={{width:500}} >
                    <div className="card-body" style={{padding:30}}>
                    <h1 className="card-title" style={{textAlign:"center"}} style={{paddingLeft:150}}>Contact Us</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form>
                            <div className="form-group">
                                <label for="supportEmail">Email address</label>
                                <input type="email" className="form-control" id="supportEmail"/>
                            </div>
                            <div className="form-group">
                                <label for="subjectType">Subject Type</label>
                                <select className="form-control" id="subjectType">
                                <option>General Information</option>
                                <option>Membership</option>
                                <option>Technical</option>
                                <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" id="message" rows="12"></textarea>
                            </div>
                            <button type="submit" onClick={this.sendClick} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}}>Send</button>
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
