import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateDeveloper from './pages/CreateDeveloper';
import EditDeveloper from './pages/EditDeveloper';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/create" component={CreateDeveloper}></Route>
          <Route path="/edit/:id" component={EditDeveloper}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;