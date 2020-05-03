import React, { Component } from 'react';
export default class FBShareButton extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        url : 'facebook.com'
      }
    }
    
    render(){
      let encodedURL = encodeURI(this.state.url);
      return(
        <a href={`https://facebook.com/sharer/sharer.php?u=${encodedURL}`}><i className="fab fa-facebook-square"/> Share on Facebook </a>
      )
    }
  }
  