import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Profile extends Component{

    render() {
        return (
            <div className="container" style={{paddingLeft:100,height:1000}}>
                <br/>
                <div className="card center"  style={{width:900, height:300, marginTop:100}} >
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                        <center><h1>User Information</h1></center> <br/>
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
                <div className="card center"  style={{width:900, height:500, marginTop:20}} >
                    <div className="card-body" style={{padding:50,backgroundColor:'#fafafa'}}>
                        <center><h1 style={{marginBottom:30}}>COURSES</h1></center>
                        <table className="table table-hover table-dark" style={{height:300}}>
                                <thead>
                                    <tr style={{fontSize:20}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{fontSize:18}}>
                                    <th scope="row">1</th>
                                    <td>Language</td>
                                    <td>In Progress</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-success" style={{fontSize:15}}>%80</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-primary" style={{fontSize:15}}>Feedback</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-danger"style={{fontSize:15}} >Remove</button>
                                        
                                    </td>
                                    </tr>
                                    <tr style={{fontSize:18}}>
                                    <th scope="row">2</th>
                                    <td>Music</td>
                                    <td>Completed</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-success" style={{fontSize:15}}>%100</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-primary" style={{fontSize:15}}>Feedback</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-danger"style={{fontSize:15}} >Remove</button>
                                    </td>
                                    </tr>
                                    <tr style={{fontSize:18}}>
                                    <th scope="row">3</th>
                                    <td>Computer Sciene</td>
                                    <td>Completed</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-success" style={{fontSize:15}}>%100</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-primary" style={{fontSize:15}}>Feedback</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-outline-danger"style={{fontSize:15}} >Remove</button>
                                    </td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        );
    }
}
export default Profile;