import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import {  Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default props => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  
  return (
    
    <Navbar color="primary" light bg="primary" className="navbar shadow-sm p-3 mb-5  rounded" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft}/>
      </Button>
      <NavbarToggler onClick={toggle} />
      
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          
          <NavItem>
            <NavLink style={{color:'white', fontSize:'medium'}}  tag={Link} to={'/page-1'}>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white' , fontSize:'medium'}}  tag={Link} to={'/page-2'}>SignIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white' , fontSize:'medium'}}  tag={Link} to={'/page-3'}>Exit</NavLink>
          </NavItem>
      </Nav>
      </Collapse>
    </Navbar>
  );
}
