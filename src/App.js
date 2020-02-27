import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; // npm install react-router-dom ı terminale yaz.
import Registration from './components/Registration';
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import Sidebar from './components/Sidebar';
 class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
    )
  }
}
export default App;