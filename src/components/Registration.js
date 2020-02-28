import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Registration extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Sign Up</h5>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form>
                            <div className="form-group">
                            <div className="row">
                                <div className="col">
                                <label for="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName"/>
                                </div>
                                <div className="col">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName"/>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <label for="email">E-mail</label>
                            <input type="text" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                            <label for="userName">Username</label>
                            <input type="text" className="form-control" id="userName"/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
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

export default Registration;
