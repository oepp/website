import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

class Feedback extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitting: false,
            feedbackmessage:""
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/user/profile', {withCredentials: true}).then(res => {
            console.log(res); //logged in
        }).catch(function(error) {
            window.location = "http://localhost:3000/Login";
        })
        const params = new URLSearchParams(window.location.search);
        this.setState({
            gameId: parseInt(params.get('gameId'))
        });
    }

    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
    }
    
    setFeedbackMessage(event){
        this.setState({
            feedbackmessage: event.target.value
        })
    }

    submitClick(event){
        event.preventDefault();
        if(this.state.rating === undefined){
            alert("You must select Star Rating");
            return false
        }
        if(this.state.feedbackmessage == "" ){
            alert("Feedback Message cannot be empty.");
            return false
        }
        this.setState({
            submitting: true
        });

        const params = {
            feedbackmessage: this.state.feedbackmessage, 
            gameId: this.state.gameId,
            rating: this.state.rating
        }

        axios.post('http://localhost:3001/user/feedback', params, {withCredentials: true}).then(result => {
            if(result.data.status === "success"){
                alert("Feedback Message submitted!");
            }else{
                alert(result.data.message);
            }
            this.setState({
                submitting: false
            });
        }).catch(function(error) {
            window.location = "http://localhost:3000/Login";
        })
    }
    
    render() {
        return (
            <div className="container" style={{paddingLeft:200, marginTop:100}}>
                <br/>
                <div className="card center"  style={{width:600}} >
                    <div className="card-body" style={{backgroundColor:'#fafafa'}}>
                    <center><h1 className="card-title" style={{fontSize:35}}>Feedback</h1></center>
                    <div className="row">
                        <div className="col-sm">
                        <form style={{paddingLeft:30, paddingRight:30, width:500}}>
                        <div className="form-group" style={{paddingLeft:95, marginTop:20, marginBottom:10}}>
                            <StarRatings
                                rating={this.state.rating}
                                starRatedColor="#563d7c"
                                changeRating={this.changeRating.bind(this)}
                                numberOfStars={5}
                                name='rating'
                            />
                            </div>
                            {/* <div className="form-group">
                                <label for="courseName" style={{fontSize:16}}>Course Name</label>
                                <input type="email" className="form-control" id="feedbacourseNameckEmail"/>
                            </div> */}
                            <div className="form-group" >
                                <label for="message" style={{fontSize:16}}>Message</label>
                                <textarea className="form-control" id="message" rows="10" onChange = {this.setFeedbackMessage.bind(this)}></textarea>
                            </div>
                            {this.state.submitting === true ?
                            <button className="btn btn-info" style={{backgroundColor:"#17a2b8" ,fontSize:16}} type="button" disabled>
                            <span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                    &nbsp;Please Wait..
                          </button>
                            : 
                             <button type="submit" onClick={this.submitClick.bind(this)} className="btn btn-primary" style={{backgroundColor:"#17a2b8" ,fontSize:16, marginleft:30}} >Send</button>
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

