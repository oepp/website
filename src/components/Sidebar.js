import React, { Component } from 'react'
import styled from "styled-components";
import NavItem from './NavItem';
import { withRouter } from 'react-router-dom';
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <SideNav></SideNav>
            </div>
        )
    }
}


 class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: '/',
          items: [
            {
              path: '/', 
              name: 'Home',
              css: 'fa fa-fw fa-home',
              key: 1 
            },
            {
              path: '/about',
              name: 'About',
              css: 'fa fa-fw fa-clock',
              key: 2
            },
            {
              path: '/NoMatch',
              name: 'NoMatch',
              css: 'fas fa-hashtag',
              key: 3
            },
          ]
        }  
      }
      onItemClick = (path) => {
        this.setState({ activePath: path }); 
      }
      render() {
        const { items, activePath } = this.state;
        return (
          <StyledSideNav>
            {
              
              items.map((item) => {
                
                return (
                  <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
                )
              })
            }
          </StyledSideNav>
        );
      }
}
const RouterSideNav = withRouter(SideNav);