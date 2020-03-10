import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {
    render() {
        return (
            <div className="container" style ={{paddingLeft:275}}>
                <br/>
                <div className="card center" style={{width:400}}>
                    <div className="card-body" style={{padding:30, width:400, height:300, backgroundColor:'#dfe7f3'}}>
                    <h1 className="card-title"style={{fontSize:20}} style={{paddingBlockStart:20}}style ={{paddingLeft:150}}>Sign in</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm">
                        <form style={{paddingLeft:50, paddingRight:50, width:500}}>
                            <div className="form-group " >
                            <label for="email" style={{fontSize:13}}>E-mail or Username</label>
                            <input type="text"  className="form-control" id="email" style ={{ width:300}}/>
                            </div>
                            <div className="form-group " >
                            <label for="exampleInputPassword1" style={{fontSize:13}}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" style ={{ width:300}}/>
                            </div>
                            <div>
                                <h5 style={{paddingLeft:170}}><a href="#" style={{backgroundColor:'#dfe7f3'}}>Forgot your account?</a></h5>
                            </div>
                            <button type="submit" className="btn btn-primary" style ={{backgroundColor:"#17a2b8", fontSize:13}}>Submit</button>
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
