import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from './Welcome';
import Submissions from './Submissions';
import NewSubmission from './NewSubmission';
import Prompts from './Prompts';
import User from './User';

const UserContext = React.createContext(null);
export default function App({ user }) {
  return (
    <UserContext.Provider value={user}>
      <Router>
        <a href="/">Home</a>
        <Switch>
          <Route path="/submissions/new">
            <NewSubmission />
          </Route>
          <Route path="/submissions/">
            <Submissions />
          </Route>
          <Route path="/prompts/">
            <Prompts />
          </Route>
          <Route path="/user/">
            <User />
          </Route>
          <Route path="*">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export { UserContext }
