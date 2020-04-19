import React, { Component } from 'react'

import CardUI from './CardUI';

export default class Cards extends Component {
    state = {
        games : []
    }
    componentDidMount(){
        this.getGames();
    }
    getGames = _ =>{
        fetch('http://localhost:3001/games/getGames')
        .then(response => response.json())
        .then(response => this.setState({ games : response.data}))
        .catch(err => console.error(err))
    }
    cardRow(){
        return this.state.games.map(function(object,i){
            return <CardUI obj={object} key={i}/>
        })
    }
    render() {
       
        return (
            <div style={{paddingTop:100}}> 
            
            <div className="card-body" >
            
              <div className="container-fluid d-flex justify-content-center " style={{paddingTop:100}}>
                  <div className="row">
                  <div className="col-md-4">
                      {this.cardRow()}
                  </div>
                  </div>
                  </div>
              </div>
           </div>
           
           
        )
    }
}