import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ForgotAccount extends Component{
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
                            <input className="form-control form-control-lg" type="text" placeholder="Email"></input>
                            </div> 
                            <div className="col-5" style={{paddingLeft:50}}>
                            <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:'#5062e1'}}>&nbsp; &nbsp;Send Verification Code&nbsp; &nbsp;</button>
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