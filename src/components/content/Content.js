import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import Login from '../Login';
import Home from '../Home';
import About from '../About';
import Registration from '../Registration';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About } />
        <Route path="/Pages" component={() => "Pages" } />
        <Route path="/faq" component={() => "FAQ" } />
        <Route path="/contact" component={() => "Contact" } />
    
        <Route path="/Page-1" component={Login} />
        <Route path="/Page-2" component={Registration} />
        
      </Switch>
    </Container>
)
