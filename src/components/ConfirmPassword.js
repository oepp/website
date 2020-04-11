import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ConfirmPassword extends Component{
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
                            <input className="form-control form-control-lg" type="text" placeholder="Verification Code"></input>
                            </div> &nbsp; &nbsp; 
                            </div><br/>
                            <div className="form-row" style={{paddingLeft:150,fontSize:13,fontWeight:"lighter"}}>
                            <div className="col-8" >
                            <label for="exampleInputPassword1"> New Password</label>
                            <input className="form-control form-control-lg" type="text" placeholder="New Password"></input>
                            </div>  &nbsp; &nbsp; 
                            </div><br/>
                            <div className="form-row" style={{paddingLeft:150,fontSize:13,fontWeight:'normal'}}>
                            <div className="col-8" >
                            <label for="exampleInputPassword1"> Confirm Password</label>
                            <input className="form-control form-control-lg" type="password" placeholder="Confirm Password"></input>
                            </div>  &nbsp; &nbsp; 
                            </div><br/>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <div style={{paddingLeft:250}}>
                            <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:'#5062e1'}}>&nbsp; &nbsp;Submit&nbsp; &nbsp;</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            
        );
    }




}
export default ConfirmPassword;