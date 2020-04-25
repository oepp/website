import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Profile extends Component{

    render() {
        return (
            <div className="container" style={{paddingLeft:50}}>
                <br/>
                <div className="card center"  style={{width:900, height:300, marginTop:100}} >
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                    <center><h2>User Information</h2></center> <br/>
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-row">
                            <div className="col-6" style={{paddingLeft:75}}>
                            <input className="form-control form-control-lg" type="text" placeholder="Name"></input>
                            </div> &nbsp; &nbsp; 
                            <div className="col-5" style={{paddingLeft:50}}>
                            <input className="form-control form-control-lg" type="text" placeholder="Surname"></input>
                            </div>  &nbsp; &nbsp; 
                            </div><br/>
                            <div className="form-row">
                            <div className="col-6" style={{paddingLeft:75}}>
                            <input className="form-control form-control-lg" type="text" placeholder="Email"></input>
                            </div>  &nbsp; &nbsp; 
                            <div className="col-5" style={{paddingLeft:50}}>
                            <input className="form-control form-control-lg" type="text" placeholder="Username"></input>
                            </div> &nbsp; &nbsp; 
                            </div><br/>
                            <div className="form-row">
                            <div className="col-6" style={{paddingLeft:75}}>
                            <input className="form-control form-control-lg" type="password" placeholder="Password"></input>
                            </div>  &nbsp; &nbsp; 
                            <div className="col-5" style={{paddingLeft:50}}>
                            <input className="form-control form-control-lg" type="password" placeholder="Confirm Password"></input>
                            </div> 
                            </div><br/><br/>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <div style={{paddingLeft:445}}>
                            <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:'#5062e1'}}>&nbsp; &nbsp;Edit&nbsp; &nbsp;</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card center"  style={{width:900, height:300, marginTop:20}} >
                    <div className="card-body" style={{padding:50, width:900, height:400, backgroundColor:'#fafafa'}}>
                    <center><h2>Courses</h2></center>
                   
                    </div>
                </div>
            </div>
            
        );
    }

}

export default Profile;