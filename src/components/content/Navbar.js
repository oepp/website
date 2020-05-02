import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import {  Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

export default props => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  
  return (
    
    <Navbar className="navbar shadow-sm p-3 mb-5  rounded navbar-fixed-top navbar-oepp" fixed="top" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft}/>
      </Button>
      <NavbarToggler onClick={toggle} />
      <Form className="form-center search-oepp" style={{paddingLeft:300}} >
        <FormControl type="text" placeholder="Search" className=""/>
      </Form>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{color:'white', fontSize:'medium'}}  tag={Link} to={'/Login'}><Button color="info" size="lg">Sign in</Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white' , fontSize:'medium'}}  tag={Link} to={'/Registration'}><Button color="info" size="lg"> Sign up</Button></NavLink>
          </NavItem>
          <NavItem style={{marginTop:15}}>
            <a style={{color:'white' , fontSize:'medium'}}  tag={Link} href={'http://localhost:3001/user/logout'}><Button color="info" size="lg">Logout</Button></a>
          </NavItem>
      </Nav>
      </Collapse>
    </Navbar>
  );
}
