import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; // npm install react-router-dom ı terminale yaz.
import Registration from './components/Registration';
import NavbarPage from './components/NavbarPage';
import Menu from'./components/Menu';
import 'bootstrap/dist/css/bootstrap.css';
 class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu></Menu>
        <NavbarPage></NavbarPage>
      </div>
    )
  }
}
export default App;