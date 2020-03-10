import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Support extends Component {
    sendClick()
    {
        alert("sending...");
    }
    render() {
        return (
            <div className="container" style={{paddingLeft:200, marginBottom:20, marginTop:-60}}>
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
                                <input type="email" className="form-control" id="supportEmail"/>
                            </div>
                            <div className="form-group">
                                <label for="subjectType" style={{fontSize:13}}>Subject Type</label>
                                <select className="form-control" id="subjectType" style={{fontSize:12}}>
                                <option>General Information</option>
                                <option>Membership</option>
                                <option>Technical</option>
                                <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="message" style={{fontSize:13}}>Message</label>
                                <textarea className="form-control" id="message" rows="12"></textarea>
                            </div>
                            <button type="submit" onClick={this.sendClick} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:14}}>Send</button>
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
