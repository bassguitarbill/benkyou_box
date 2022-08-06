import React from 'react'
import PropTypes from 'prop-types'

import Welcome from './Welcome';

App.propTypes = {
  user: PropTypes.string
};

const UserContext = React.createContext(null);
export default function App({ user }) {
  return (
    <UserContext.Provider value={user}>
      <div>
      <p>no</p>
        <Welcome currentUser={user} />
        <p>User: {user.name}</p>
      </div>
    </UserContext.Provider>
  );
}

export { UserContext }
