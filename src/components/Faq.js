import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Faq extends Component {
    render() {
        return (
            
            <div className="container" style={{paddingLeft:50,paddingTop:100}}>
                      
                <h2 style ={{color: 'Blue',marginLeft:100,marginTop:50}}>Hello, How Can We Help?</h2>
                <div className ="card" style={{width:700,backgroundColor:"#E6E6FA",height:150, paddingLeft:30,marginLeft:100}}>
                <h3 style ={{color:'#800000',fontWeight:30}}>Is OEPP free?</h3>
                <p style ={{fontSize:20,fontWeight:"bold"}}>Learning on OEPP is not free. Our apps are available on Android, iOS, and Web.
                 However, OEPP application is need internet. </p>
                </div>
                 <div className= "card" style={{width:700,backgroundColor:"#E6E6FA",height:150,paddingLeft:30, marginLeft:100}}>
                <h3 style ={{color:'#800000',fontWeight:30}}>Can I access OEPP courses offline?</h3>
                <p style={{fontSize:20,fontWeight:"bold"}}>OEPP application courses need to internet and users have to internet
                to using OEPP application and courses.</p>
                </div>
                <div className= "card" style={{width:700,backgroundColor:"#E6E6FA",height:150,paddingLeft:30, marginLeft:100}}>
                <h3 style ={{color:'#800000',fontWeight:30}}>How do I activate my account?</h3>
                <p style ={{fontSize:20,fontWeight:"bold"}}>After you successfully sign up, you can go login page and then you write email and password.
                You active your account  successfully.</p></div>
                <div className= "card" style={{width:700,backgroundColor:"#E6E6FA",height:150,paddingLeft:30, marginLeft:100}}>
                <h3 style ={{color:'#800000',fontWeight:30}}>Is it possible to change my name on a profil?</h3>
                <p style ={{fontSize:20,fontWeight:"bold"}}> Yes. Change your name on the Profile Page,and the change will automatically reflect on your page.</p></div>
                <div className= "card" style={{width:700,backgroundColor:"#E6E6FA",height:210,paddingLeft:30, marginLeft:100}}>
                <h3 style ={{color:'#800000',fontWeight:30}}>How Do We Become Developers?</h3>
                <p style ={{fontSize:20,fontWeight:"bold"}}>Users can both take advantage of the lessons they want and add lessons in the field they want to add.<br/>
                The courses are add that buy clicking the add button according to the field of the course they want to add.</p></div>
                <div className= "card" style={{width:700,backgroundColor:"#E6E6FA",height:170, marginLeft:100,paddingLeft:30}}>
                <h3 style ={{color:'#800000',fontWeight:30}}>What Lessons Are Included In the OEPP Application?</h3>
                <p style = {{fontSize:20,fontWeight:"bold"}}>Depending on the wishes of the users there are courses in Software, Mathematics,English and many other fields.</p></div>
                <div className= "card" style={{width:700,backgroundColor:"#E6E6FA",height:220,paddingLeft:30, marginLeft:100}}>
                <h3 style ={{color:'#800000',fontWeight:30}}> How to Create an Account?</h3>
                <p style = {{fontSize:20,fontWeight:"bold"}}>The OEPP application is clicked on the login tab on the homepage, after logging in with the required name,<br/> 
                 surname, email and password in the OEPP application are successfully carried out with email and password.</p><br/><br/><br/><br/><br/><br/>
                </div>
                </div>   
        );
    }
}

export default Faq;
