import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Welcome from './Welcome';
import Submissions from './Submissions';

App.propTypes = {
  user: PropTypes.string
};

const UserContext = React.createContext(null);
export default function App({ user }) {
  return (
    <UserContext.Provider value={user}>
      <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/submissions/">
            <Submissions />
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
