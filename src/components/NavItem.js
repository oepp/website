import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
const NavIcon = styled.div`
position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;
const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;
export default class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }
    render() {
        const { active } = this.props;
        return (
            <div>
                <StyledNavItem active={active}>
  <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
    <NavIcon></NavIcon>
  </Link>
</StyledNavItem>
            </div>
        )
    }
}
