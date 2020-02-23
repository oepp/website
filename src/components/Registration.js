import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Registration extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">OEPP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                <br/>
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Registration</h5>
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
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"/>
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
