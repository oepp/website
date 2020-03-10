import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Registration extends Component {
    render() {
        return (
            <div className="container" style={{paddingLeft:300, marginTop:-30}}>
                <br/>
                <div className="card center"  style={{width:500}} >
                    <div className="card-body" style={{padding:30, width:500, height:400, backgroundColor:'#dfe7f3'}}>
                    <h1 className="card-title" style={{textAlign:"center"}} style={{paddingLeft:150}}>Sign Up</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form style={{paddingLeft:50, paddingRight:50, width:500}}>
                        <div className="form-group">
                            <input type="text" placeholder="First Name" className="form-control" id="firstName" style={{fontSize:15}}/>
                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="Surname" className="form-control" id="surname" style={{fontSize:15}} />
                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="E-mail" className="form-control" id="email" style={{fontSize:15}}/>
                            </div>
                            <div className="form-group">
                            <input type="text" placeholder="Username" className="form-control" id="userName" style={{fontSize:15}}/>
                            </div>
                            <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" style={{fontSize:15}}/>
                            </div> <br/>
                            <button type="submit" className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}} >Submit</button>
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
