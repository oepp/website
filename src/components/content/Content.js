import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import Login from '../Login';
import Home from '../Home';
import About from '../About';
import Registration from '../Registration';
import Support from '../Support';
import './navbar.css';
import Faq from '../Faq';

export default props => (
    <Container  fluid className={classNames('content', {'is-open': props.isOpen}, 'container-oepp')}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About } />
        <Route path="/Pages" component={() => "Pages" } />
        <Route path="/contact" component={() => "Contact" } />
    
        <Route path="/Page-1" component={Login} />
        <Route path="/Page-2" component={Registration} />
        <Route path="/Support" component={Support} />
        <Route path = "/Faq"  component ={Faq} />
        
      </Switch>
    </Container>
)
