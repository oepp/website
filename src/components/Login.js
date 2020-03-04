import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <div className="card center" style={{width:400}}>
                    <div className="card-body">
                    <h2 className="card-title">Sign in</h2>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form>
                            <div className="form-group " >
                            <label for="email">E-mail or Username</label>
                            <input type="text"  className="form-control" id="email" style ={{ width:250}}/>
                            </div>
                            <div className="form-group ">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" style ={{ width:250}}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;
