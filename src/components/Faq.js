import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Faq extends Component {
    render() {
        return (
            <div className="container" style={{paddingLeft:50}}>
                <h3 style ={{color:'blue'}}>Is OEPP free?</h3>
                <p>Learning on OEPP is free. Our apps are available on Android, iOS, and Web. 
                    However, OEPP application is need internet. </p><br/>
                <h3 style ={{color:'blue'}}>Can I access OEPP courses offline?</h3>
                <p>OEPP application courses need to internet and users have to internet
                to using OEPP application and courses.</p><br/>
                <h3 style ={{color:'blue'}}>How do I activate my account?</h3>
                <p>After you successfully sign up, you can go login page and then you write email and password.
                    You active your account  successfully.</p><br/>
                <h3 style ={{color:'blue'}}>Is it possible to change my name on a profil?</h3>
                <p> Yes. Change your name on the Profile page,and the change will automatically reflect on your page.</p><br/>
                <br/><br/><br/><br/>
            </div>
            
        );
    }
}

export default Faq;
