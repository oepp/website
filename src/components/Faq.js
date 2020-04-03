import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Faq extends Component {
    render() {
        return (
            
            <div className="container" style={{paddingLeft:50,paddingTop:100}}>
                <h2 style ={{color: 'blue', paddingTop:40}}>Hello, How Can We Help?</h2><br/>
                <h3 style ={{color:'blue'}}>Is OEPP free?</h3>
                <p style ={{fontSize:20}}>Learning on OEPP is not free. Our apps are available on Android, iOS, and Web.
                 However, OEPP application is need internet. </p><br/>
                <h3 style ={{color:'blue'}}>Can I access OEPP courses offline?</h3>
                <p style={{fontSize:20}}>OEPP application courses need to internet and users have to internet
                to using OEPP application and courses.</p><br/>
                <h3 style ={{color:'blue'}}>How do I activate my account?</h3>
                <p style ={{fontSize:20}}>After you successfully sign up, you can go login page and then you write email and password.
                You active your account  successfully.</p><br/>
                <h3 style ={{color:'blue'}}>Is it possible to change my name on a profil?</h3>
                <p style ={{fontSize:20}}> Yes. Change your name on the Profile page,and the change will automatically reflect on your page.</p><br/>
                <h3 style ={{color:'blue'}}>How Do We Become Developers?</h3>
                <p style ={{fontSize:20}}>Users can both take advantage of the lessons they want and add lessons in the field they want to add.<br/>
                The courses are add that buy clicking the add button according to the field of the course they want to add.</p><br/>
                <h3 style ={{color:'blue'}}>What Lessons Are Included In the OEPP Application?</h3>
                <p style = {{fontSize:20}}>Depending on the wishes of the users there are courses in Software, Mathematics,English and many other fields.</p><br/>
                <h3 style ={{color:'blue'}}> How to Create an Account?</h3>
                <p style = {{fontSize:20}}>The OEPP application is clicked on the login tab on the homepage, after logging in with the required name,<br/> 
                 surname, email and password in the OEPP application are successfully carried out with email and password.</p> <br/><br/><br/><br/><br/><br/>
                
            </div>
            
            
        );
    }
}

export default Faq;
