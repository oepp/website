import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class FeedbackList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            feedbackList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/user/profile', {withCredentials: true}).then(res => {
            console.log(res); //logged in
            axios.get('http://localhost:3001/user/feedback/list', {withCredentials: true}).then(res => {
                console.log(res);
                if (res.data.status === "success") {
                    this.setState({
                        feedbackList: res.data.data
                    })
                }
            });
        }).catch(function(error) {
            window.location = "http://localhost:3000/Login";
        })
    }

    render() {
        const feedbacks = [];
        if (this.state.feedbackList.length > 0) {
            this.state.feedbackList.forEach(item => {
                feedbacks.push(
                    <tr style={{fontSize:18}}>
                        <th scope="row">{item.id}</th>
                        <td>{item.title}</td>
                        <td>{item.rating}/5</td>
                        <td>{item.message}</td>
                        <td>{item.timestamp}</td>
                    </tr>
                )
            })
        }
        return (
            <div className="container" style={{paddingLeft:100,height:1000,marginTop:50}}>
                <br/><br/>
                <div className="card center"  style={{width:'75vw', height:500, marginTop:50, marginLeft: '-50px'}} >
                    <div className="card-body" style={{padding:50,backgroundColor:'#fafafa'}}>
                        <center><h1 style={{marginBottom:30}}>GAMES FEEDBACKS</h1></center>
                        <table className="table table-hover" style={{height:300}}>
                                <thead>
                                    <tr style={{fontSize:20}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Game Title</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Feedback</th>
                                    <th scope="col">Date/Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feedbacks}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        );
    }
}
export default FeedbackList;