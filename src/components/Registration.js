import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Registration extends Component {
    render() {
        return (
            <div className="container" style={{paddingLeft:200}}>
                <br/>
                <div className="card center"  style={{width:500}} >
                    <div className="card-body" style={{padding:30}}>
                    <h1 className="card-title" style={{textAlign:"center"}} style={{paddingLeft:150}}>Sign Up</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form>
                        <div className="form-group">
                            <label for="firstName" style={{fontSize:15}}>First Name</label>
                            <input type="text" className="form-control" id="firstName" style={{width:350}}/>
                            </div>
                            <div className="form-group">
                            <label for="surname" style={{fontSize:15}}>Surname</label>
                            <input type="text" className="form-control" id="surname" style={{width:350}}/>
                            </div>
                            <div className="form-group">
                            <label for="email" style={{fontSize:15}}>E-mail</label>
                            <input type="text" className="form-control" id="email" style={{width:350}}/>
                            </div>
                            <div className="form-group">
                            <label for="userName" style={{fontSize:15}}>Username</label>
                            <input type="text" className="form-control" id="userName" style={{width:350}}/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1" style={{fontSize:15}}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" style={{width:350}}/>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{backgroundColor:"purple" ,fontSize:16}} >Submit</button>
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
