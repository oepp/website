import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

class Feedback extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
        }

    }
    
    submitClick(){
        console.log("Sending...");
    }

    setMessage(){
        console.log("..");
    }

    
    render() {
        return (
            <div className="container" style={{paddingLeft:200, marginTop:40,paddingTop:90}}>
                <br/>
                <div className="card center"  style={{width:600}} >
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                    <center><h1 className="card-title">Feedback</h1></center>
                    <div className="row">
                        <div className="col-sm">
                        <form style={{paddingLeft:30, paddingRight:30, width:500}}>
                            <div className="form-group">
                                <label for="courseName" style={{fontSize:13}}>Course Name</label>
                                <input type="email" className="form-control" id="feedbacourseNameckEmail"/>
                            </div>
                            <div className="form-group">
                                <label for="message" style={{fontSize:13}}>Message</label>
                                <textarea className="form-control" id="message" rows="10" onChange = {this.setMessage.bind(this)}></textarea>
                            </div>
                            {this.state.submitting === true ?
                            <button className="btn btn-info" style={{backgroundColor:"#17a2b8" ,fontSize:16}} type="button" disabled>
                            <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                    &nbsp;Please Wait..
                          </button>
                            : 
                             <button type="submit" onClick={this.submitClick.bind(this)} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16}} >Send</button>
                            }                                 
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Feedback;

