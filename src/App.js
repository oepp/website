import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; // npm install react-router-dom ı terminale yaz.

import Registration from './components/Registration'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
