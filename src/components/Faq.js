import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Faq extends Component {
    render() {
        return (
            <div className="container" style={{paddingLeft:50,paddingTop:100}}>
                <center><h4 style ={{color: 'black',marginTop:50,fontSize:35}}>Hello, How Can We Help?</h4></center><br/>
                <div className ="card" style={{width:800,backgroundColor:"#F2F2F2",height:150, paddingLeft:30,marginLeft:100,marginBottom:20}}>
                    <h3 style ={{color:'#800000',fontWeight:'bold',paddingTop:15}}>Is OEPP free?</h3>
                    <p style ={{fontSize:20}}>
                        Learning on OEPP is free. Our apps are available on Android, iOS, and Web.
                        However, OEPP application is need internet. 
                    </p>
                </div>
                <div className= "card" style={{width:800,backgroundColor:"#F2F2F2",height:150,paddingLeft:30, marginLeft:100,marginBottom:20}}>
                    <h3 style ={{color:'#800000',fontWeight:'bold',paddingTop:15}}>Can I access OEPP courses offline?</h3>
                    <p style={{fontSize:20}}>
                        OEPP application courses need to internet and users have to internet
                        to using OEPP application and courses.
                    </p>
                </div>
                <div className= "card" style={{width:800,backgroundColor:"#F2F2F2",height:200,paddingLeft:30, marginLeft:100,marginBottom:20}}>
                    <h3 style ={{color:'#800000',fontWeight:'bold',paddingTop:15}}>How do I activate my account?</h3>
                    <p style ={{fontSize:20}}>
                        After you successfully sign up, you can go login page and then you write email and password.
                        You active your account  successfully.
                    </p>
                </div>
                <div className= "card" style={{width:800,backgroundColor:"#F2F2F2",height:150,paddingLeft:30, marginLeft:100,marginBottom:20}}>
                    <h3 style ={{color:'#800000',fontWeight:'bold',paddingTop:15}}>Is it possible to change my name on a profil?</h3>
                    <p style ={{fontSize:20}}> Yes. Change your name on the Profile Page,and the change will automatically reflect on your page.</p>
                </div>
                <div className= "card" style={{width:800,backgroundColor:"#F2F2F2",height:230,paddingLeft:30, marginLeft:100,marginBottom:20}}>
                    <h3 style ={{color:'#800000',fontWeight:'bold',paddingTop:15}}>How Do We Become Developers?</h3>
                    <p style ={{fontSize:20}}>
                        Users can both take advantage of the lessons they want and add lessons in the field they want to add.<br/>
                        The courses are add that buy clicking the add button according to the field of the course they want to add.
                        </p>
                </div>
                <div className= "card" style={{width:800,backgroundColor:"#F2F2F2",height:190, marginLeft:100,paddingLeft:30,marginBottom:20}}>
                    <h3 style ={{color:'#800000',fontWeight:'bold',paddingTop:15}}>What Lessons Are Included In the OEPP Application?</h3>
                    <p style = {{fontSize:20}}>
                        Depending on the wishes of the users there are courses in Software, Mathematics,English and many other fields.
                    </p>
                </div>
                <div className= "card" style={{width:800,backgroundColor:"#F2F2F2",height:230,paddingLeft:30, marginLeft:100,marginBottom:20}}>
                    <h3 style ={{color:'#800000',fontWeight:'bold',paddingTop:15}}> How to Create an Account?</h3>
                    <p style = {{fontSize:20}}>The OEPP application is clicked on the login tab on the homepage, after logging in with the required name,<br/> 
                    surname, email and password in the OEPP application are successfully carried out with email and password.</p><br/><br/><br/><br/><br/><br/>
                </div>  
            </div>
        );
    }
}


export default Faq;
